var Checkout = React.createClass({

  getInitialState: function () {
    return ({ cart: CartStore.all(), shippingAddresses: [], payments: [] });
  },

  componentDidMount: function () {
    CheckoutApiUtils.fetchShippingAddresses(CurrentUserStore.currentUser().id);
    ShippingAddressStore.addChangeListener(this.onAddressChange);
  },

  componentWillUnmount: function () {
    ShippingAddressStore.removeChangeListener(this.onAddressChange);
  },
  
  render: function () {

    return (
      <div></div>
    );

  }

});
