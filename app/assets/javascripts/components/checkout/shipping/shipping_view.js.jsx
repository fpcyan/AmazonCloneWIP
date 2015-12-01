var ShippingView = React.createClass({


  render: function () {
    var view;
    if (this.props.expand === "shipping") {
      view = <Shipping addresses={this.props.addresses} />;
    } else {
      view = <ShippingMain address={this.props.addresses[0]} shipClick={this.shippingClick} />;
    }
    return (
      <div>
         {view}
      </div>
    );

  }

});
