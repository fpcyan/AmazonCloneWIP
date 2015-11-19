class Image < ActiveRecord::Base
  validates :alt, :main_image, :product, presence: true

end
