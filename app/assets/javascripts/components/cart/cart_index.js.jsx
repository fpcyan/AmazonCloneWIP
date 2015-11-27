var CartIndex = React.createClass({

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
    CartApiUtils.fetchUserCart();
    CartStore.addChangeListener(this._onCartChange);
  },

  componentWillUnmount: function () {
    CartStore.removeChangeListener(this._onCartChange);
  },

  handlePlus: function(e) {
    debugger;
  },

  handleMinus: function(e) {
    debugger;
  },


  render: function () {
    var numItems, subtotal, cartItems;

    numItems = this.state.cart.length === 1 ? " item" : " items";
    numItems = this.state.cart.length + numItems;

    subtotal = 0;
    cartItems = this.state.cart.map(function (product) {
      subtotal += (product.product.price * product.quantity);
      return (
        <article key={product.id} className="cart-item-wrapper">
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
        </section>

      </main>
    );

  }

});
