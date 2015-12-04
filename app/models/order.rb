class Order < ActiveRecord::Base
  validates :product_id, :price, :quantity, :stripe_charge_id, :refunded, presence: true
  validates :refunded, inclusion: { in: [true, false] }
  validates :quantity, numericality: { greater_than: 0,
    message: "Quantity must be at least one" }

  
end
