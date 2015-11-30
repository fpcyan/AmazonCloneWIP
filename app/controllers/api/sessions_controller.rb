class Api::SessionsController < Api::ApiController
  before_action :ensure_signed_in, only: [:show]

  def show
    if current_user
    @user = current_user
    @user.shopping_cart_items.includes(product: :images).load
    render "api/session/show"
    else
    #   debugger
      @user = User.new(id: nil, full_name: nil, shopping_cart_items: [])
    #   render json: {}, status: 499
    render "api/session/show"
    end
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
      render json: { errors: @user.errors.full_messages}, status: 401
    end
  end

  def destroy
    sign_out!
    render json: {}
  end

end
