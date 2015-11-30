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
    items.each do |item|
    query = self.shopping_cart_items.where(product_id: item["product_id"])
    query_len = query.length
      if query_len === 0
        self.shopping_cart_items.create!(product_id: item["product_id"], quantity: item["quantity"])
      elsif query_len === 1
        query[0].update(quantity: item["quantity"])
      else
        raise "TWO OF A KIND~~~"
      end
    end
    nil
  end


## Auth

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?

    if user.password_digest.is_password?(password)
      user
    else
      nil
    end
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
    return SecureRandom::urlsafe_base64
  end

  private

    def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64
    end

end
