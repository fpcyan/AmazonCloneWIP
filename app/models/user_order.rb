class UserOrder < ActiveRecord::Base
  validates :user_id, :order_id, presence: true

  belongs_to :user, inverse_of: :user_orders
  has_many :orders, inverse_of: :user_order
end
