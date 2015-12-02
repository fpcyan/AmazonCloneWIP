class Payment < ActiveRecord::Base
  validates :user_id, :full_name, :expiration, :cc_token, :merchant, presence: true

  belongs_to :user, inverse_of: :payments

  def cc_number
    @cc_number
  end

  def cc_number=(cc_number)
    @cc_number = cc_number

    self.cc_token = BCrypt::Password.create(cc_number)
  end

end
