var Checkout = React.createClass({

  _onAddressChange: function () {
    this.setState({ shippingAddresses: ShippingAddressStore.all() });
  },

  getInitialState: function () {
    return ({ shippingAddresses: [], shippingExpand: false, showForm: false, payments: [] });
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

  render: function () {
    var shippingView, formModal;
    if (!this.state.shippingExpand) {
      shippingView = <ShippingMain address={this.state.shippingAddresses[0]} shipClick={this.shippingClick} changeActive={this.activeShipping}/>;
    } else {
      shippingView = <Shipping addresses={this.state.shippingAddresses} />;
    }
    if (this.state.showForm) {
      formModal = (this.state.showForm === "shipping") ? <ShippingForm /> : "payment form";
    }

    return (
      <section className="checkout-landing group">
        <ul className="order-summary-wrapper">
          <li>
            { shippingView }
          </li>

          <li className="payment expand-box group">
            <div className="left-col"><h3>2</h3> </div>
            <div className="left-col"><h3>Payment Method</h3></div>
            <div className="left-col">
              <ul className="display-info">
                <li className="small-line-item">
                  <p className="left-text">Amazon Visa ending in 4444</p>
                </li>
                <li className="small-line-item">
                  <p className="left-text">Billing Address: Fiona Conn, 3755 77th st, Apt 2J, Jackson He...</p>
              </li>
              </ul>
            </div>
            <div className="left-col">
              <button className="clear-button">
                <p>Change</p>
              </button>
            </div>
          </li>

          <li className="review static-box">
            <div className="left-col"><h3>3</h3> </div>
            <div className="left-col"><h3>Review items and shipping</h3></div>
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
                <button className="small-button">Place your order</button>
              </div>
              <div className="left-col">
                <h3 className="red-price">Order total: $100.00</h3>
              </div>
            </div>
          </li>

        </ul>

        <div id="order-summary" className="side-box">
          <div className="inner-box">
            <ul className="subtotal-summary">
              <li className="small-line-item">
                <p className="left-text">Items:</p>
                <p className="right-text">$99.99</p>
              </li>
              <li className="small-line-item">
                <p className="left-text">Shipping & Handling:</p>
                <p className="right-text">$9.50</p>
              </li>
              <li className="small-line-item">
                <p className="left-text">Total before tax:</p>
                <p className="right-text">$109.49</p>
              </li>
              <li className="small-line-item">
                <p className="left-text">Estimate tax:</p>
                <p className="right-text">$44.00</p>
              </li>
              <li className="small-line-item">
                <p className="left-text red-price">Order total:</p>
                <p className="right-text">$44.00</p>
              </li>
            </ul>

            <button id="order-button" className="some-button">
              <p className="some-button-txt">Place your order</p>
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
