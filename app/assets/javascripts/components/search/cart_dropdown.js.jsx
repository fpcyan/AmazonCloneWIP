var CartDropdown = React.createClass({

  ComponentWillReceiveProps: function (nextProps) {

  },

  render: function () {
    var cartPreviewList, totalPrice;

    if (this.props.cart.length) {
      totalPrice = 0;
      cartPreviewList = this.props.cart.map(function (item) {
        totalPrice += item.product.price;
        return (
          <div key={item.product.name} className="nav-cart drop-item">
            <img className="thumb-preview" src={appImages.loadingGif} />
            <span className="thumb-prev-text"> Sample product name!</span>
          </div>
        );
      });
      cartPreviewList.push(<div key="full-ct-1" className="nav-all emphasis drop-item">Order Total: ${(totalPrice / 100).toFixed(2)}</div>);
      cartPreviewList.push(<div key="full-ct-2" className="nav-all drop-item"><a href="#/cart" className="small-button">See your cart.</a></div>);
    } else {

      cartPreviewList = ([
        <div key="empty-ct-1" className="nav-all drop-item">Nothing in your cart!</div>,
        <div key="empty-ct-2" className="nav-all drop-item">Click "Add to Cart" on a product to get started.</div>
      ]);

    }

    return (
      <div className="nav-drop-box">
        <div className="drop-box-inner">
          { cartPreviewList }
        </div>
      </div>
    );

  }

});
