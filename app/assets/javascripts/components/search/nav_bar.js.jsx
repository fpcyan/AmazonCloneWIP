var NavBar = React.createClass({

  getInitialState: function () {
    return({ hover: false, dept: null, signIn: null, wishList: null, cart: null });
  },

  componentWillReceiveProps: function (nextProps) {
  },

  feelingLucky: function () {
    var randNum = Math.floor(Math.random() * 19) + 1;
    return "#/products/" + randNum;
  },

  handleDropdown: function (e) {
  },

  render: function (){
    var departmentList, cartSize;

    departmentList = ["Jewelry", "Kittens for Adoption", "Luxury Items", "Electronics"].map( function(dept) {
      return (
        <li key={dept + 219} className="nav-dept drop-item">
          {dept}
        </li>
      );
    });
    cartSize = (this.props.cart.length) ? <p className="cart-qty">{this.props.cart.length}</p> : null;

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
          <ul key="dept-nav-1" className="nav-drop">
            <a className="nav-dept nav-drop-link">
              <small>Shop by</small>
              <strong>Department</strong>
              <div className="nav-drop-box">
                <div className="drop-box-inner">
                  { departmentList }
                </div>
              </div>
            </a>
          </ul>
          <small className="dem-links-wrapper">
            <a href={this.feelingLucky()} className="nav-bar-link">I'm Feeling Lucky</a>
            <a className="nav-bar-link">Adopt a Cat</a>
            <a className="nav-bar-link">About</a>
          </small>

          <div className="right-hand-wrapper">
            <SignInDropdown userName={this.props.userName} />

            <ul key="wish-list-nav-1" className="nav-drop">
              <a href="#" className="wish-list nav-drop-link">
                <small>Your</small>
                <strong>Wish list</strong>
                <WishListDropdown userName={this.props.userName} />
              </a>
            </ul>

            <ul key="cart-prev-nav-1" className="nav-drop">
              <a href="#" className="cart nav-drop-link">{cartSize}
                <img className="cart-button-image" src={appImages.shoppingCart} alt="Shopping cart" />
                <CartDropdown cart={this.props.cart} />
              </a>
            </ul>
          </div>
        </div>
      </header>
    );
  }

});
