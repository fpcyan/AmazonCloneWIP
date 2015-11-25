class Api::UsersController < ApplicationController

  def show
    render :show
  end


  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render :show
    else

      render json: { errors: @user.errors.full_messages, status: 422 }
    end
  end

  private

    def user_params
      params.require(:user).permit(
        :first_name,
        :last_name,
        :email,
        :password,
        :password_confirmation
        )
    end

end
