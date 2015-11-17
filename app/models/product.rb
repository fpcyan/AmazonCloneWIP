class Product < ActiveRecord::Base

  validates :product_name, :price, :description, :specs,
    :quantity, presence: true
  validates :product_name, uniqueness: true

  has_many :products_categories, inverse_of: :product
  has_many :categories, through: :products_categories, source: :category

end
