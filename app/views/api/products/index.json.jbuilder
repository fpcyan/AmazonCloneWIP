json.array! @products do |product|

  json.extract!( product, :id, :product_name, :price )

end
