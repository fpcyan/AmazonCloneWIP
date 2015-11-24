class Api::ShoppingCartsController < ApplicationController

  def index
    @shopping_cart_items = current_user.shopping_cart_items
    render :index
  end
end
