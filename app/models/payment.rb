class Payment < ActiveRecord::Base
  validates :user_id, :full_name, :expiration, :cc_token, :merchant, :cvc_code, presence: true
  validates :cc_number, length: { is: 19 }
  belongs_to :user, inverse_of: :payments


  ## This validation is a facsimile of the actual payment storage and valdiation process
  ## It is beyond the current scope of the web application to implement more realistic payment processing

  def self.find_by_credentials(expiration, cvc_code)
    Payment.find_by(expiration: expiration, cvc_code: cvc_code)
  end

  def cc_number
    @cc_number
  end

  def cc_number=(cc_number)
    @cc_number = cc_number

    self.cc_token = BCrypt::Password.create(cc_number)
  end

  def cc_digest
    BCrypt::Password.new(super)
  end

  def is_cc_number?(cc_number)
    self.cc_token == (cc_number)
  end

end
