class Image < ActiveRecord::Base
  validates :alt, :product, presence: true
  has_attached_file :image,
    styles: {
      large: ["x900", :jpg],
      medium: ["x500>", :jpg],
      thumb: ["x200>", :jpg],
      carousel: ["x250>", :jpg]
      carousel_test: ["180x240#"]
    },
    default_url: "./assets/images/default/kitten-looking-up1.jpg"

  validates_attachment_content_type :image,
    content_type: /\Aimage\/.*\Z/

  belongs_to :product, inverse_of: :images
end
