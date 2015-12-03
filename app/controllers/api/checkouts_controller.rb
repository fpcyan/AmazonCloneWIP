class Api::CheckoutsController < Api::ApiController

  def create
    @order = params[:token]

    customer = Stripe::Customer.create(
      email:  @order[:email],
      source: @order[:id]
    )

    charge = Stripe::Charge.create(
      customer:     customer.id,
      amount:       params[:amount].to_i,
      description:  'Rails Stripe customer',
      currency:     'usd'
    )
  end

end
