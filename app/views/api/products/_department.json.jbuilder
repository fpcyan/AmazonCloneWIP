
json.extract! feature, :id, :title
json.products do
  json.array! feature.products do |product|

    json.partial! "products", product: product
  end
end
