var WishListDropdown = React.createClass({

  ComponentWillReceiveProps: function (nextProps) {

  },

  render: function () {
    var wishList;
    
    if (this.props.userName) {
      wishList = ([
        <li key="sign-in-wl-1" className="nav-wish drop-item">Last item added:</li>,
        (<li key="sign-in-wl-2" className="nav-wish drop-item">
          <img className="thumb-preview" src={appImages.loadingGif} />
          <span className="thumb-prev-text"> Sample product name!</span>
        </li>),
        <li key="sign-in-wl-3" className="nav-wish drop-item"> <a href="#/wish_list" key="small-button-2" className="small-button">See your wish list.</a></li>,
      ]);
    } else {
      wishList = ([
        <li key="sign-out-wl-1" className="nav-sign-tag drop-item">Sign in to see your wish list.</li>,
        <li key="sign-out-wl-2" className="nav-sign-in drop-item"> <a href="#/sign_in" className="small-button"> Sign in!</a> </li>
      ]);
    }

    return (
      <div className="nav-drop-box">
        <div className="drop-box-inner">
          { wishList }
        </div>
      </div>
    );

  }

});
