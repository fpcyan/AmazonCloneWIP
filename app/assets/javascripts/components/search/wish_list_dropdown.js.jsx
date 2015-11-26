var WishListDropdown = React.createClass({

  ComponentWillReceiveProps: function (nextProps) {

  },

  render: function () {
    var wishList;

    if (this.props.userName) {
      wishList = ([
        <div key="sign-in-wl-1" className="nav-all drop-item">Last item added:</div>,
        <div key="sign-in-wl-3" className="nav-all drop-item"> <a href="#/wish_list" key="small-button-2" className="small-button">See your wish list.</a></div>,
      ]);
    } else {
      wishList = ([
        <div key="sign-out-wl-1" className="nav-all drop-item">Sign in to see your wish list.</div>,
        <div key="sign-out-wl-2" className="nav-all drop-item"> <a href="#/sign_in" className="small-button"> Sign in!</a> </div>
      ]);
    }
    return (
      <div key="wish-list-nav-1" className="nav-drop">
        <div className="nav-all wish-list">
          <a href="#" className="nav-drop-link">
            <small>Your</small>
            <strong>Wish list</strong>
          </a>

          <div key="wl-dropdown-box-1" className="nav-drop-box">
            <div key="wl-dropdown-box-2" className="drop-box-inner">
              { wishList }
            </div>
          </div>
        </div>
      </div>
    );

  }

});
