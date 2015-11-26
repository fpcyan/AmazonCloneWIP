

json.cart do
  json.array! current_user.shopping_cart_items.includes(:product) do |shopping_cart_item|
    json.partial! "api/shopping_cart_item", shopping_cart_item: shopping_cart_item
  end
end
