var CartIndex = React.createClass({

  componentWillReceiveProps: function (nextProps) {

  },

  render: function () {
    var numItems, subtotal, cartItems;

    numItems = this.props.cart.length === 1 ? " item" : " items";
    numItems = this.props.cart.length + numItems;

    subtotal = 0;
    cartItems = this.props.cart.map(function (product) {
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
                <a href="#/checkout"><p className="cart-button-txt">Checkout!</p></a>
              </button>
          </div>
        </section>

      </main>
    );

  }

});
