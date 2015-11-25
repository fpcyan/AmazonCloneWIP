class Api::SessionsController < ApplicationController


  def show
    @user = current_user.shopping_cart_items.includes(:product)
    render "api/session/show"
  end

  def create
    @user = User.find_by_credentials(
      params[:email],
      params[:password]
    )

    if @user
      sign_in(@user)
      render "api/session/show"
    else
      render json: { errors: @user.errors.full_messages, status: 401 }
    end
  end

  def destroy
    sign_out!
    render json: {}
  end

end
