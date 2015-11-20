var NavBar = React.createClass({

  render: function (){
    return (
      <header className="header">

        <div className="nav-search group">
          <nav className="nav-logo">Bazaar</nav>

          <label className="search-form group">
            <button className="search-department">All</button>
            <input className="search-input" type="text" placeholder="Search" />
            <button className="search-submit"><img className="search-submit-img" src={appImages.magnifyingGlass} alt="Go Search" /></button>
          </label>
        </div>

        <div className="nav-main group">
          <a className="nav-dept">Shop by Deparment</a>
          <a className="feeling-lucky">I'm feeling lucky"</a>

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
