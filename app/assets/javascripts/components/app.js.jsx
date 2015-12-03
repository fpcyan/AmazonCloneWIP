var App = React.createClass({

  _onCartChange: function () {
    if (this.state.id) {
      this.setState({ cart: CartStore.all() });
    } else {
      // _updateCookieCartItems(CartStore.all());
    }
  },

  _onSignIn: function () {
    if (CurrentUserStore.signedIn()) {
      var user = CurrentUserStore.currentUser();
      this.setState({ id: user.id, full_name: user.full_name, cart: CartStore.all() });
    } else {
      this.setState({ id: null, full_name: "", cart: [] });
    }
  },

  getInitialState: function () {
    return ({ id: null, full_name: "", cart: [] });
  },

  totalPrice: function () {
    sum = 0;
    this.state.cart.forEach(function (item) {
      sum += (item.quantity * item.product.price);
    });
    return sum;
  },

  componentDidMount: function () {
    UserApiUtil.fetchCurrentUser();
    CurrentUserStore.addChangeListener(this._onSignIn);
    CartStore.addChangeListener(this._onCartChange);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this.onSignIn);
    CartStore.removeChangeListener(this._onCartChange);
  },

  render: function () {
    var newChildren = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, { cart: this.state.cart, userId: this.state.id, subtotal: this.totalPrice() });
    }.bind(this));
    return (
      <main>
        <NavBar userName={this.state.full_name} cart={this.state.cart} subtotal={this.totalPrice()}/>
        { newChildren }
      </main>
    );
  }
});
