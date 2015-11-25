var App = React.createClass({

  getInitialState: function () {
    return ({ user: null, cart: CartStore.all() });
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this._handleSession);
    CartStore.addChangeListener(this._onCartChange);
    ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this._handleSession);
    CartStore.removeChangeListener(this._onCartChange);
  },

  _handleSession: function () {
    if (CurrentUserStore.checkSignedIn) {
      return this.setState({ user: CurrentUserStore.user() });
    } else {
      ApiUtil.saveCurrentCart(CartStore.allProductIds);
      this.setState({ user: CurrentUserStore.user() });
    }
  },

  _onCartChange: function () {
    if (this.state.user && CartStore.all().length > 0) {
      ApiUtil.saveCurrentCart(CartStore.allProductIds);
    } else if (!this.state.user) {
      cookie.save('sessionCart', CartStore.all());
    }

    return this.setState({ cart: CartStore.all() });
  },




  render: function () {

    return (
      <main>
        <NavBar />
        <ShoppingCart />
        { this.props.children }
      </main>
    );
  }
});
