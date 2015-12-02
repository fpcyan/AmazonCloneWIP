class Api::PaymentsController < Api::ApiController

  def index
  end

  def create
  end

  def destroy
  end

  private

    def payment_params
      params.require(:payment).permit(:full_name, :expiration, :cc_token, :merchant, :cvc_code)
    end

end
