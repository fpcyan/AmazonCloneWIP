class UsersController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      flash[:notice] = "Welcome, #{@user.first_name}!"
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = current_user
  end

  def update #this could be ajax easily
    if current_user.save(user_params)
      flash[:notice] = "Changes saved!"
      redirect_to :edit
    else
      flash.now[:errors] = current_user.errors.full_messages
      render :edit
    end
  end

  private

    def user_params
      params.require(:user).permit(
        :first_name,
        :last_name,
        :email,
        :password)
    end

end
