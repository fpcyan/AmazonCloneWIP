class User < ActiveRecord::Base
  attr_accessor :password_confirmation, :email_confirmation

  validates :email, :full_name,
    :password_digest, :session_token, presence: true

  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :password, :email, confirmation: true, on: :create
  validates :password, :password_confirmation, presence: true, on: :create
  after_initialize :ensure_session_token

  has_many :shopping_cart_items, inverse_of: :user, dependent: :destroy
  has_many :products, through: :shopping_cart_items, source: :product

  has_many :shipping_addresses, inverse_of: :user, dependent: :destroy


## Shopping Cart

  def update_shopping_cart(items)
    byebug
    items.each do |item|
      product = self.shopping_cart_items.find_by_product_id(item["product_id"])
      if product
        product.update(quantity: item["quantity"])
      else
        self.shopping_cart_items.create!(
          product_id: item["product_id"],
          quantity: item["quantity"]
          )
      end
    end
  end




## Auth

  def self.find_by_credentials(email, password)
    return nil unless user = User.find_by(email: email)
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password

    self.password_digest = BCrypt::Password.create(password)
  end

  def password
    @password
  end

  def password_digest
    BCrypt::Password.new(super)
  end

  def is_password?(password)
    self.password_digest.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    save!
  end

  def self.generate_session_token!
    SecureRandom::urlsafe_base64
  end

  private

    def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64
    end

end
