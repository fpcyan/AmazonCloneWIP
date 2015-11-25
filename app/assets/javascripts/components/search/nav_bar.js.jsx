var NavBar = React.createClass({

  getInitialState: function () {
    return({ signedIn: false, username: null });
  },

  onLucky: function (e) {
    var randNum = Math.floor(Math.random() * 19) + 1;
    return "#/products/" + randNum;
  },

  render: function (){
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
          <a className="nav-dept nav-drop-button">Shop by <strong>Department</strong></a>
          <small className="dem-links-wrapper">
            <a href={this.onLucky()} className="nav-bar-link">I'm Feeling Lucky</a>
            <a className="nav-bar-link">Adopt a Cat</a>
            <a className="nav-bar-link">About</a>
          </small>

          <div className="right-hand-wrapper">
            <a href="#" className="sign-in nav-drop-button">Sign in</a>
            <a href="#" className="wish-list nav-drop-button">Wish list</a>
            <a href="#" className="cart nav-drop-button"><img className="nav-button" src={appImages.shoppingCart} alt="Shopping cart" /></a>
          </div>
        </div>
      </header>
    );
  }

});
