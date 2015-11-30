class Api::ShoppingCartItemsController < Api::ApiController

  def index
    if current_user
      @shopping_cart_items = current_user.shopping_cart_items.includes( product: :images ).load
    else
      @shopping_cart_items = []
    end
    render "api/shopping_cart_items/index"
  end

  def create
    shopping_cart_items = params[:shopping_cart_items]
    items = JSON.parse(shopping_cart_items)
    current_user.update_shopping_cart(items)
    @shopping_cart_items = current_user.shopping_cart_items.includes( product: :images ).load
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
