class User < ActiveRecord::Base
  attr_accessor :password_confirmation, :email_confirmation

  validates :email, :first_name, :last_name,
    :password_digest, :session_token,
    :password, :password_confirmation,
    presence: true

  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :password, :email, confirmation: true
  after_initialize :ensure_session_token


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
