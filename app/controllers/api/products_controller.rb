class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render :index
  end


  def show
    @product = Product.find(params[:id]).in_stock?
    render :show
  end

end
