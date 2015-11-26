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
          <li key={item.product.name} className="nav-cart drop-item">
            <img className="thumb-preview" src={appImages.loadingGif} />
            <span className="thumb-prev-text"> Sample product name!</span>
          </li>
        );
      });
      cartPreviewList.push(<li key="full-ct-1" className="nav-emphasis drop-item">Order Total: ${(totalPrice / 100).toFixed(2)}</li>);
      cartPreviewList.push(<li key="full-ct-2" className="nav-cart drop-item"><a href="#/cart" className="small-button">See your cart.</a></li>);
    } else {

      cartPreviewList = ([
        <li key="empty-ct-1" className="nav-cart drop-item">Nothing in your cart!</li>,
        <li key="empty-ct-2" className="nav-cart drop-item">Click "Add to Cart" on a product to get started.</li>
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
