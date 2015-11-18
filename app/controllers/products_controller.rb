class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render :index
  end


  def show
    @product = Product.find(params[:id])

    if @product.quantity === 0
      @stock = false
    elsif @product quantity < 15
      @stock = @product.quantity
    else
      @stock = true
    end

  end

end
