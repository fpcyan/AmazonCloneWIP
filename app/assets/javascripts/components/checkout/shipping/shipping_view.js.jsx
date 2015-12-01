var ShippingView = React.createClass({


  render: function () {

    return (
      <div>
         <ShippingMain address={this.state.shippingAddresses[0]} shipClick={this.shippingClick} />
         <Shipping addresses={this.state.shippingAddresses} />
         <ShippingForm />
      </div>
    );

  }

});
