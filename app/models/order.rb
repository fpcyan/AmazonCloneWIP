class Order < ActiveRecord::Base
  validates :product_id, :price, :quantity, :stripe_charge_id, presence: true
end
