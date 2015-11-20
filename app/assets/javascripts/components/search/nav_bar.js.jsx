var NavBar = React.createClass({

  render: function (){
    return (
      <header className="header">

        <div className="nav-search group">
          <nav className="nav-logo">Internet Bazaar</nav>

          <label className="search-form group">
            <button className="search-department">All</button>
            <input className="search-input" type="text" placeholder="Search" />
            <button className="search-submit"><img src={appImages.magnifyingGlass} /></button>
            <a href="#" className="sign-in">Sign in</a>
            <a href="#" className="cart"><img src={appImages.shoppingCart} /></a>
          </label>

        </div>

        <div className="header-ribbon">
          <nav className="nav-main"></nav>
        </div>
      </header>
    );
  }

});
