var SessionForm = React.createClass({

  onSubmit: function (e) {
    e.preventDefault();
    var path = this.props.location.pathname;
    if (path === "/signin" || path === "/signup") {
      path = "/";
    }
    var credentials = $(e.currentTarget).serializeJSON();
    debugger
    UserApiUtil.signIn(credentials, function () {
      this.history.pushState(null, path);
      debugger
    }.bind(this));
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
            <input className="email-input form-input" type="email" name="email" tabIndex="2"></input>

            <label id="sign-in-password" className="password-label form-label">
              Password
            </label>
            <input className="password-input form-input" type="password" name="password" tabIndex="4"></input>

            <button className="form-button">Create your Bazaar account</button>
          </form>
          <div className="divider-section">
            <div className="divider"></div>

            <p className="border-overlay">New here?</p>
            <button className="create-account-button">Create an account</button>
          </div>

        </fieldset>
      </section>
    );

  }


});
