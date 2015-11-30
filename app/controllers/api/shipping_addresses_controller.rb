class Api::ShippingAddresses < Api::ApiController

  def index
    @shipping_addresses = current_user.shipping_addresses.load
    render "api/users/" + current_user.id + "/shipping_addresses"
  end

  def create
  end

  def destroy
  end


end
