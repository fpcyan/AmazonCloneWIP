var NavBar = React.createClass({

  componentWillReceiveProps: function (nextProps) {
  },

  feelingLucky: function () {
    var randNum = Math.floor(Math.random() * 19) + 1;
    return "#/products/" + randNum;
  },

  render: function (){
    var departmentList, cartSize;

    departmentList = ["Jewelry", "Kittens for Adoption", "Luxury Items", "Electronics"].map( function(dept) {
      return (
        <div key={dept + 219} className="nav-dept nav-all drop-item">
          {dept}
        </div>
      );
    });
    cartSize = (this.props.cart.length) ? <p className="cart-qty">{this.props.cart.length}</p> : null;

    return (
      <header className="header">

        <section className="nav-search group">
          <nav className="nav-logo"><a href="#/">Bazaar</a></nav>

          <label className="search-form group">
            <button className="search-department">All</button>
            <input className="search-input" type="text" placeholder="Search" />
            <button className="search-submit"><img className="search-submit-img" src={appImages.magnifyingGlass} alt="Go Search" /></button>
          </label>
        </section>

        <section className="nav-main group">

          <div key="dept-nav-1" className="nav-drop">
            <div className="nav-dept nav-all">
              <a href="#" className="nav-drop-link">
                <small>Shop by</small>
                <strong>Department</strong>
              </a>
                <div className="nav-drop-box">
                  <div className="drop-box-inner">
                    { departmentList }
                  </div>
                </div>
            </div>
          </div>

          <small className="dem-links-wrapper">
            <a href={this.feelingLucky()} className="nav-bar-link">I'm Feeling Lucky</a>
          </small>

          <div className="right-hand-wrapper">
            <SignInDropdown userName={this.props.userName} />

            <WishListDropdown userName={this.props.userName} />

            <div key="cart-prev-nav-1" className="nav-drop">
              <div className="cart nav-all">
                <a href="#/cart" className="nav-drop-link">
                  {cartSize}
                <img className="cart-button-image" src={appImages.shoppingCart} alt="Shopping cart" />
                </a>
                <CartDropdown cart={this.props.cart} subtotal={this.props.subtotal}/>
              </div>
            </div>

          </div>


        </section>
      </header>
    );
  }

});
