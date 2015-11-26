var NavBar = React.createClass({

  getInitialState: function () {
    return({ hover: false, dept: null, signIn: null, wishList: null, cart: null });
  },

  componentWillReceiveProps: function (nextProps) {
    console.log(this.props, nextProps);
  },

  feelingLucky: function () {
    var randNum = Math.floor(Math.random() * 19) + 1;
    return "#/products/" + randNum;
  },

  handleDropdown: function (e) {
    console.log("hoVERING");
  },

  render: function (){
    var signInGreeting = this.props.userName ? this.props.userName.split(" ")[0] : "Sign in to";
    var cartSize = this.props.cart.length ? <p className="cart-qty">this.props.cart.length</p> : null;
    console.log("navbar render");
    return (
      <header className="header">

        <div className="nav-search group">
          <nav className="nav-logo"><a href="#/">Bazaar</a></nav>

          <label className="search-form group">
            <button className="search-department">All</button>
            <input className="search-input" type="text" placeholder="Search" />
            <button className="search-submit"><img className="search-submit-img" src={appImages.magnifyingGlass} alt="Go Search" /></button>
          </label>
        </div>

        <div className="nav-main group">
          <ul onMouseEnter={this.handleDropdown}  className="nav-drop">
            <a className="nav-dept nav-drop-link"><small>Shop by</small>
            <strong>Department</strong></a>
          </ul>
          <small className="dem-links-wrapper">
            <a href={this.feelingLucky()} className="nav-bar-link">I'm Feeling Lucky</a>
            <a className="nav-bar-link">Adopt a Cat</a>
            <a className="nav-bar-link">About</a>
          </small>

          <div className="right-hand-wrapper">
            <ul onMouseEnter={this.handleDropdown} className="nav-drop">
              <a href="#/sign_in" className="sign-in-link nav-drop-link">
                <small>{ signInGreeting }</small>
                <strong>Your Account</strong>
              </a>
                { this.state.signIn }
            </ul>
            <ul onMouseEnter={this.handleDropdown}  className="nav-drop">
              <a href="#" className="wish-list nav-drop-link">
                <small>Your</small>
                <strong>Wish list</strong>
              </a>
            </ul>
            <ul onMouseEnter={this.handleDropdown}  className="nav-drop">
              <a href="#" className="cart nav-drop-link">{cartSize}<img className="cart-button-image" src={appImages.shoppingCart} alt="Shopping cart" /></a>
            </ul>
          </div>
        </div>
      </header>
    );
  }

});
