
class Department < ActiveRecord::Base
  validates :title, presence: true
  validates :title, uniqueness: true


  belongs_to :parent_department, inverse_of: :sub_departments, class_name: "Department", foreign_key: :parent_dept_id
  has_many :sub_departments, inverse_of: :parent_department, class_name: "Department", foreign_key: :parent_dept_id

  has_many :categories, inverse_of: :sub_department, class_name: "Category", foreign_key: :department_id
  has_many :products, through: :categories, source: :products


  def self.featured_products ## finds the 2 subdepartments with the most products
    Department
      .joins(categories: { products_categories: :product })
      .group("departments.id")
      .order("COUNT(products.id) DESC")
      .limit(2)
      .includes(:products)
  end

  def self.products_by_department(id) ## DRY this up
    product_hash = {}
    product_hash[dept] = Department.find(id)
    if product_hash[dept].parent_dept_id.nil?
      product_hash[sub_depts] = Department.where(parent_dept_id: id)
      product_hash[categories] = Category.joins(:sub_department).where("departments.parent_dept_id = ?", id)
      product_hash[products] = Product.joins(categories: :sub_department).where("departments.parent_dept_id = ?", id)

    else
      product_hash[categories] = Category.where(department_id: id)
      product_hash[products] = Product.joins(:categories).where("categories.department_id = ?", id)
    end
    return product_hash
  end
end
