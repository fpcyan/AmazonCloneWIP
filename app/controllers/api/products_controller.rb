class Api::ProductsController < ApplicationController

  def index
    if params[:home]
      @feature_products = Product.featured_products.load
      @products
    else
      @feature_products
      @products = Product.all
    end
    render :index
  end


  def show
    @product = Product.find(params[:id]).includes(:images).in_stock?
    render :show
  end

end
