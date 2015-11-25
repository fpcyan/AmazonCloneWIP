
json.user do
  json.extract!( current_user, :id, :full_name )
end


json.cart do
  json.array! current_user.shopping_cart_items do |product|
    json.partial! "shopping_cart_item", product: product
  end
end
