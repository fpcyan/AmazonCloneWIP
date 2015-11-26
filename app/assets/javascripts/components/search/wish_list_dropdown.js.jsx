var WishListDropdown = React.createClass({

  ComponentWillReceiveProps: function (nextProps) {

  },

  render: function () {
    var wishList;

    if (this.props.userName) {
      wishList = ([
        <div key="sign-in-wl-1" className="nav-wish drop-item">Last item added:</div>,
        <div key="sign-in-wl-3" className="nav-wish drop-item"> <a href="#/wish_list" key="small-button-2" className="small-button">See your wish list.</a></div>,
      ]);
    } else {
      wishList = ([
        <div key="sign-out-wl-1" className="nav-sign-tag drop-item">Sign in to see your wish list.</div>,
        <div key="sign-out-wl-2" className="nav-sign-in drop-item"> <a href="#/sign_in" className="small-button"> Sign in!</a> </div>
      ]);
    }
    
    return (
      <div key="wish-list-nav-1" className="nav-drop">
        <div>
          <a href="#" className="wish-list nav-drop-link">
            <small>Your</small>
            <strong>Wish list</strong>
          </a>
        </div>
          <div className="nav-drop-box">
            <div className="drop-box-inner">
              { wishList }
            </div>
          </div>
      </div>
    );

  }

});
