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

  has_many :user_orders, inverse_of: :user
  has_many :orders, through: :user_orders, source: :orders

## Checkout

  def create_stripe_customer(order_id)
    customer = Stripe::Customer.create(email: email, source: order_id)
    self.stripe_customer_id = customer.id
    save!
  end

  def log_checkout(amount)
    charge = save_stripe_charge(amount)
    user_orders
      .create(purchase_total: charge.amount, stripe_charge_id: charge.id)
      .save_order_manifest(shopping_cart_items)
    empty_shopping_cart
  end

  def save_stripe_charge(amount)
    Stripe::Charge.create(
      customer:     stripe_customer_id,
      amount:       amount,
      description:  'Rails Stripe customer',
      currency:     'usd'
    )
  end

  def empty_shopping_cart
    shopping_cart_items.destroy_all
  end

## Shopping Cart

  def update_shopping_cart(items)
    items.each do |item|
      product = shopping_cart_items.find_by_product_id(item["product_id"])
      if product
        product.update(quantity: item["quantity"])
      else
        shopping_cart_items.create!(
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
    password_digest.is_password?(password)
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
