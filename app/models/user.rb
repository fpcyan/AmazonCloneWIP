class User < ActiveRecord::Base

  validates :email, :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :shopping_cart_items, inverse_of: :user, dependent: :destroy
  has_many :products, through: :shopping_cart_items, source: :product

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

  private

    def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64
    end

end
