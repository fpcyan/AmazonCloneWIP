var SessionForm = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    if (this.props.location.query.demoUser) {
      return({ email: "sennacy@appacademyfriends.io", password: "password" });
    }
    return({ email: "", password: "" });
  },

  onSubmit: function (e) {
    e.preventDefault();
    var path = "/" + this.props.location.query.redirect;
    if (path === "/undefined") {
      path = "/";
    }
    var credentials = $(e.currentTarget).serializeJSON();
    UserApiUtil.signIn(credentials, function (cart) {
      var newCart = cart.concat(CartStore.all());
      CartApiUtils.updateRemoteCartItems(newCart);
      reactCookie.remove('cookieCart');
      this.history.pushState(null, path);
    }.bind(this));
  },

  setDemoUser: function (e) {
    e.preventDefault();
    this.setState({ email: "sennacy@appacademyfriends.io", password: "password" });
  },

  handleInput: function(e) {
    var inputType = e.currentTarget.name;
    var input = e.currentTarget.value;
    if (inputType === "email") {
      this.setState({ email: input });
    } else {
      this.setState({ password: input });
    }
  },

  render: function () {
    var klass = "direct-disabled";
    if (this.props.location.pathname === "/sign_in") {
      klass = "direct-enabled";
    }
    return (
      <section className={"direct-route-background " + klass}>
        <nav className="nav-logo"><a href="#/">Bazaar</a></nav>
        <fieldset className="f-box-inner">

          <form className="sign-in rt-form" onSubmit={this.onSubmit}>

            <h2 className="sign-header">Sign in</h2>

            <label id="sign-in-email" className="email-label form-label">
              Email
            </label>
            <input className="email-input form-input"
              type="email" name="email" tabIndex="2"
              onChange={this.handleInput} value={this.state.email}></input>

            <label id="sign-in-password" className="password-label form-label">
              Password
            </label>
            <input className="password-input form-input"
              type="password" name="password" tabIndex="4"
              onChange={this.handleInput} value={this.state.password}></input>

            <button className="form-button">Sign in</button>
          </form>
          <div className="divider-section">

            <p className="border-overlay">New here?</p>
            <button className="create-account-button"><a href="#/sign_up">Create an account</a></button>
          </div>

          <div className="divider-section">
            <p className="border-overlay">Don't feel like putting in your credentials?</p>
            <button onClick={this.setDemoUser} className="form-button">Sign in as Demo User</button>
          </div>

        </fieldset>
      </section>
    );

  }


});
