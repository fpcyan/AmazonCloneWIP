class ShoppingCartItem < ActiveRecord::Base
  validates :user_id, :product_id, presence: true

end
