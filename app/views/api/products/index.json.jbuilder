json.array! @feature_products do |feature|
  json.id feature.id
  json.feature feature.title
  json.products do
    json.array! feature.products, :id, :product_name, :price
  end
end
