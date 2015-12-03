require 'byebug'

class Api::CheckoutsController < Api::ApiController

  def create
    @order = params[:token]
    debugger
  end

end
