var CartIndex = React.createClass({

  mixins: [ReactRouter.History],

  _onCartChange: function () {
    if (CurrentUserStore.currentUser().hasOwnProperty("id") && this.state.cart !== CartStore.all_with_images()) {
      console.log(this.state.cart, CartStore.all_with_images());
      this.setState({ cart: CartStore.all_with_images() });
    } else {
      // _updateCookieCartItems(CartStore.all_with_images());
    }
  },

  getInitialState: function () {
    return({ cart: CartStore.all_with_images() });
  },

  componentDidMount: function () {
    CartStore.addChangeListener(this._onCartChange);
    this.setState({ cart: CartStore.all_with_images() });
  },

  componentWillUnmount: function () {
    CartStore.removeChangeListener(this._onCartChange);
  },

  handlePlus: function(e) {
  },

  handleMinus: function(e) {
  },

  handleCheckout: function (e) {
    CartApiUtils.deleteCart(function () {
      this.history.pushState(null, "/");
    }.bind(this));
  },


  render: function () {
    var numItems, subtotal, cartItems;

    numItems = this.state.cart.length === 1 ? " item" : " items";
    numItems = this.state.cart.length + numItems;

    subtotal = 0;
    cartItems = this.state.cart.map(function (product) {
      subtotal += (product.product.price * product.quantity);
      return (
        <article key={"cart-idx-item-" + product.id}>
          <CartItem qty={product.quantity} upClick={this.handlePlus} downClick={this.handleMinus} product={product.product} />
        </article>
      );
    }.bind(this));

    return (
      <main className="cart-index group">
        <h2>Shopping Cart</h2>

        <section className="cart-items">
          {cartItems}
        </section>

        <section className="checkout-form">
          <div className="box-inner">
            <span className="product-price-summary">Subtotal ({numItems}): ${(subtotal / 100).toFixed(2)}</span>
          </div>

          <div className="cart-wrapper">
              <button className="cart-button">
                <p className={"cart-button-txt"} onClick={this.handleCheckout}>Checkout!</p>
              </button>
          </div>
        </section>

      </main>
    );

  }

});
