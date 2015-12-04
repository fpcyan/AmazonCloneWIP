var Checkout = React.createClass({

  mixins: [ReactRouter.History],

  _onAddressChange: function () {
    this.setState({ shippingAddresses: ShippingAddressStore.all() });
  },

  getInitialState: function () {
    var handler = StripeCheckout.configure({
      key: 'pk_test_2AHgFTRGwryvPz1z1yhnCb4s',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      allowRememberMe: false,
      token: function(token) {
        var that = this;
        CheckoutApiUtils.createFinishedPayment(token, this.props.subtotal, function () {
          that.history.pushState(null, "/");
        });
      }.bind(this)
    });

    return ({ shippingAddresses: [], handler: handler });
  },

  componentDidMount: function () {
    CheckoutApiUtils.fetchShippingAddresses();
    ShippingAddressStore.addChangeListener(this._onAddressChange);
  },

  componentWillUnmount: function () {
    ShippingAddressStore.removeChangeListener(this._onAddressChange);
  },

  shippingClick: function (e) {
    e.preventDefault();
    if (this.state.shippingAddresses.length > 0) {
      this.setState({ showForm: true });
    } else {
      this.setState({ shippingExpand: true });
    }
  },

  handleCheckout: function(e) {
    var numItems = CartStore.all().length;
    var desc = numItems.toString() + " item";
    if (numItems > 1) {
      desc += "s";
    }
    this.state.handler.open({
      name: 'Bazaar',
      email: CurrentUserStore.currentUser().email,
      description: desc,
      amount: this.props.subtotal
    });
    e.preventDefault();
  },

  render: function () {
    var formModal;
    if (this.state.form) {
      formModal = (this.state.showForm === "shipping") ? <ShippingForm /> : "payment form";
    }

    return (
      <section className="checkout-landing group">
        <ul className="order-summary-wrapper">
          <li>
            <ShippingView shippingAddresses={this.state.shippingAddresses} shippingClick={this.shippingClick} expand={this.state.expand}/>
          </li>


          <li className="review static-box">
            <div className="expand-box group">
              <div className="left-col"><h3>2</h3> </div>
              <div className="left-col"><h3>Review items and shipping</h3></div>
              <div className="left-col"></div>
            </div>

            <div className="display-info group">

              <div className="left-col">
                <ul className="cart-review">
                  <li className="cart-review-item">
                  </li>
                </ul>
              </div>
            <div className="left-col">
              <div className="delivery options">
                <h4>Choose a delivery option:</h4>
                <label className="radio-delivery">Choice<input type="radio"></input></label>
                <label className="radio-delivery">Choice<input type="radio"></input></label>
                <label className="radio-delivery">Choice<input type="radio"></input></label>
              </div>
            </div>
            </div>

            <div className="inner-box group">
              <div className="left-col">
                <h3>3</h3>
              </div>
              <div className="left-col">
                <button onClick={this.handleCheckout} className="small-button">Place your order</button>
              </div>
              <div className="left-col">
                <h3 className="red-price">Order total: ${(this.props.subtotal / 100).toFixed(2)}</h3>
              </div>
            </div>
          </li>

        </ul>

        <div id="order-summary" className="side-box">
          <div className="inner-box">
            <ul className="subtotal-summary">
              <li className="small-line-item">
                <p className="left-text">Items:</p>
                <p className="right-text">${(this.props.subtotal / 100).toFixed(2)}</p>
              </li>
              <li className="small-line-item">
                <p className="left-text">Shipping: </p>
                <p className="right-text">$0.00</p>
              </li>
              <li className="small-line-item">
                <p className="left-text red-price">Order total:</p>
                <p className="right-text">${(this.props.subtotal / 100).toFixed(2)}</p>
              </li>
            </ul>

            <button id="order-button" className="some-button" onClick={this.handleCheckout}>
              <p className="some-button-txt" >Place your order</p>
            </button>
          </div>
        </div>
      </section>
    );

  },

  activeShipping: function (e) {
    e.preventDefault();
  }

});
