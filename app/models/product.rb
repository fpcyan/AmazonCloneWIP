class Product < ActiveRecord::Base

  attr_accessor :stock

  validates :product_name, :price, :description, :specs,
    :quantity, presence: true
  validates :product_name, uniqueness: true

  has_many :products_categories, inverse_of: :product
  has_many :categories, through: :products_categories, source: :category

  has_many :sub_departments, through: :categories, source: :sub_department
  has_many :parent_departments, through: :sub_departments, source: :parent_department

  has_many :images, inverse_of: :product


  def self.featured_products ## finds the 2 subdepartments with the most products
    Department.featured_products
  end

  def in_stock?
    if self.quantity === 0
      self.stock = false
    elsif self.quantity < 15
      self.stock = @product.quantity
    else
      self.stock = true
    end
    return self
  end

end
