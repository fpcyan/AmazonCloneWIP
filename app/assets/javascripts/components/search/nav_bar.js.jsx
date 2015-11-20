var NavBar = React.createClass({

  render: function (){
    return (
      <header className="header">

        <div className="nav-search group">
          <nav className="nav-logo">Internet Bazaar</nav>

          <label className="search-form group">
            <button className="search-department">All</button>
            <input className="search-input" type="text" placeholder="Search" />
            <button className="search-submit"><img className="nav-button" src={appImages.magnifyingGlass} alt="Go Search" /></button>
            <a href="#" className="sign-in">Sign in</a>
            <a href="#" className="cart"><img className="nav-button" src={appImages.shoppingCart} alt="Shopping cart" /></a>
          </label>

        </div>

        <div className="header-ribbon">
          <nav className="nav-main"></nav>
        </div>
      </header>
    );
  }

});
