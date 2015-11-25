
json.user do
  json.extract!( current_user, :id, :full_name )
end


json.cart do
  json.array! current_user.shopping_cart_items do |shopping_cart_item|
    json.partial! "api/shopping_cart_item", shopping_cart_item: shopping_cart_item
  end
end
