class Api::ShoppingCartItemsController < Api::ApiController

  def index
    @shopping_cart_items = current_user.shopping_cart_items.includes( product: :images ).load
    @shopping_cart_items.each do |item|
      p item
      p item.product
      p item.product.images[0]
    end
    render "api/shopping_cart_items/index"
  end

  def create
    shopping_cart_items = params[:shopping_cart_items]
    items = JSON.parse(shopping_cart_items)
    current_user.update_shopping_cart(items)
    @shopping_cart_items = current_user.shopping_cart_items.includes( product: :images ).load
    @shopping_cart_items.each do |item|
      p item
    end
    render "api/shopping_cart_items/index"
  end

  def update

  end

  def destroy
    current_user.shopping_cart_items.destroy_all
    @shopping_cart_items = []
    render "api/shopping_cart_items/index"
  end
end
