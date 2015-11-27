class Api::ShoppingCartItemsController < Api::ApiController

  def index
    current_user.shopping_cart_items.includes( products: :images )
    render "api/shopping_cart_items/index"
  end

  def create
    shopping_cart_items = params[:shopping_cart_items]
    items = JSON.parse(shopping_cart_items)
    current_user.update_shopping_cart(items)
    render "api/shopping_cart_items/index"
  end

  def update

  end

  def destroy

  end
end
