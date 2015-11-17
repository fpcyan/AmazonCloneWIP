class Department < ActiveRecord::Base
  validates :title, presence: true
  validates :title, uniqueness: true

  validates :sub_departments, uniqueness: { scope: :parent_department,
    message: "Parent department already contains this department" }



  ## validate that parent departments do NOT have categories


  # f_0
  belongs_to :parent_department, inverse_of: :sub_departments
  has_many :categories, inverse_of: :sub_department
  has_many :sub_departments, inverse_of: :parent_department

  # f_1
  has_many :categories, through: :sub_department, source: :categories

  # f_2
  has_many :products, through: :categories, source: :products

end
