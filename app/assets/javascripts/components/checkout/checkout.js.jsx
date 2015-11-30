var Checkout = React.createClass({

  _onAddressChange: function () {
    this.setState({ shippingAddresses: ShippingAddressStore.all() });
  },

  getInitialState: function () {
    return ({ cart: CartStore.all(), shippingAddresses: [], payments: [] });
  },

  componentDidMount: function () {
    CheckoutApiUtils.fetchShippingAddresses();
    ShippingAddressStore.addChangeListener(this._onAddressChange);
  },

  componentWillUnmount: function () {
    ShippingAddressStore.removeChangeListener(this._onAddressChange);
  },

  render: function () {

    return (
      <div></div>
    );

  }

});
