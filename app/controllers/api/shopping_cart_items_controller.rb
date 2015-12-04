class Api::ShoppingCartItemsController < Api::ApiController

  def index
    @shopping_cart_items = []
    load_shopping_cart if current_user
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
    current_user.shopping_cart_items.destroy_all
    @shopping_cart_items = []
    render "api/shopping_cart_items/index"
  end

  private

    def load_shopping_cart
      @shopping_cart_items = current_user
        .shopping_cart_items.includes( product: :images ).load
    end

end
