json.extract!( @product, :id, :product_name, :price, :description, :specs, :stock )
json.images do
  json.array! @product.images do |image|
      json.partial! "image", image: image, res: [:medium, :thumb]

  end
end
