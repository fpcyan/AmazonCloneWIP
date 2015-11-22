json.extract!( @product, :id, :product_name, :price, :description, :specs, :stock )
json.images do
  json.array! @product.images do |image|
    if image.main_image
      json.partial! "image", image: image, res: [:medium, :thumb]
    else
      json.partial! "image", image: image, res: [:thumb]
    end
  end
end
