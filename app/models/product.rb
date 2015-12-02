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


  has_many :shopping_cart_items, inverse_of: :product, dependent: :destroy
  has_many :users, through: :shopping_cart_items, source: :user

  def self.featured_products ## finds the 2 subdepartments with the most products
    Department.featured_products
  end

  def already_exists(category)
    product = Product.find_by(product_name: self.product_name)
    if category.products.include?(product)
      return nil
    else
      category.products << product
      return product
    end
  end

  def create_image(main, image_file)
    image = self.images.create(
      alt: self.product_name,
      main_image: main,
      image: image_file
    )
    image.already_exists(self) unless image.errors.empty?
  end

  def in_stock?
    if self.quantity === 0
      self.stock = false
    elsif self.quantity < 15
      self.stock = self.quantity
    else
      self.stock = true
    end
  end

end
