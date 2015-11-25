class Api::ShoppingCartsController < ApplicationController

  def index
    @shopping_cart_items = current_user.shopping_cart_items.includes(:products)
    render "api/shopping_cart_items"
  end

  def create

  end

  def update

  end

  def destroy

  end
end
