var NavBar = React.createClass({

  mixins: [ReactRouter.History],

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
          <a className="nav-dept">Shop by <strong>Deparment</strong></a>
          <small className="dem-links-wrapper">
            <a href={this.onLucky()} className="feeling-lucky">I'm Feeling Lucky</a>
            <a className="adopt">Adopt a Cat</a>
            <a className="about">About</a>
          </small>

          <div className="right-hand-wrapper">
            <a href="#" className="sign-in">Sign in</a>
            <a href="#" className="wish-list">Wish list</a>
            <a href="#" className="cart"><img className="nav-button" src={appImages.shoppingCart} alt="Shopping cart" /></a>
          </div>
        </div>
      </header>
    );
  }

});
