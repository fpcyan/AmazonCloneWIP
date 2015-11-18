class Category < ActiveRecord::Base
  validates :section, :department_id, presence: true
  validates :section, uniqueness: true

  validate :must_belong_to_a_subdepartment

  belongs_to :sub_department, inverse_of: :categories, class_name: "Department", foreign_key: :department_id
  has_many :products_categories, inverse_of: :category
  has_many :products, through: :products_categories, source: :product



  private

    def must_belong_to_a_subdepartment
      if !Department.find(self.department_id).parent_department
        errors.add(:department_id, "can't be a parent department")
      end
    end
end
