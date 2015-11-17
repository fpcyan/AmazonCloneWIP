class Category < ActiveRecord::Base
  validates :section, :department_id, presence: true
  validates :section, uniqueness: true

  validates :department_id, absence: true # if the department is a parent_department

  belongs_to :sub_department, inverse_of: :categories
  has_many :products_categories, inverse_of: :category
  has_many :products, through: :products_categories, source: :product



  private

    def must_belong_to_a_subdepartment
      if !!Department.find(self.department_id).parent_department
        errors.add(:department_id, "can't belong to a parent department")
      end
    end
end
