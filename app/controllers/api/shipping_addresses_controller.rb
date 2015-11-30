class Api::ShippingAddressesController < Api::ApiController

  def index
    @shipping_addresses = current_user.shipping_addresses.load
    render "api/shipping_addresses/index"
  end

  def create
  end

  def destroy
  end


end
