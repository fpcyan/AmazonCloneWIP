var App = React.createClass({

  _onProductAddedToCart: function () {
    if (this.state.id) {
    }
  },

  _onSignIn: function () {
    if (CurrentUserStore.signedIn()) {
      var user = CurrentUserStore.currentUser();
      this.setState({ id: user.id, full_name: user.full_name });
    } else {
      this.setState({ id: null, full_name: "", cart: [] });
    }
  },

  getInitialState: function () {
    return ({ id: null, full_name: "", cart: [] });
  },

  componentDidMount: function () {
    UserApiUtil.fetchCurrentUser();
    CurrentUserStore.addChangeListener(this._onSignIn);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this.onSignIn);
  },

  render: function () {

    return (
      <main>
        <NavBar userName={this.state.full_name} />
        { this.props.children }
      </main>
    );
  }
});
