var CartDropdown = React.createClass({

  _onCartChange: function () {
    if (CurrentUserStore.currentUser().hasOwnProperty("id") && this.state.cart !== CartStore.all_with_images()) {
      console.log(this.state.cart, CartStore.all_with_images());
      this.setState({ cart: CartStore.all_with_images() });
    } else {
      // _updateCookieCartItems(CartStore.all_with_images());
    }
  },

  getInitialState: function () {
    return({ cart: [] });
  },

  componentDidMount: function () {
    CartApiUtils.fetchUserCart();
    CartStore.addChangeListener(this._onCartChange);
  },

  componentWillUnmount: function () {
    CartStore.removeChangeListener(this._onCartChange);
  },

  render: function () {
    var cartPreviewList, totalPrice;

    if (this.state.cart.length > 0) {
      subtotal = 0;
      cartPreviewList = this.state.cart.map(function (item) {
        var price = item.product.price * item.quantity;
        subtotal += price;
        return (
          <div key={"item-sum-" + item.product.product_name} className="nav-cart drop-item">
            <img key={"item-sum-img-" + item.product.product_name} className="thumb-preview" src={item.product.image.thumb_url} />
            <span key={"item-sum-name-" + item.product.product_name} className="thumb-prev-text">{item.product.product_name}</span>
          </div>
          );
        });
        cartPreviewList.push(<div key="full-ct-1" className="nav-all emphasis drop-item">Order Total: ${(subtotal / 100).toFixed(2)}</div>);
        cartPreviewList.push(<div key="full-ct-2" className="nav-all drop-item"><a href="#/cart" className="small-button">See your cart.</a></div>);
    } else {
      cartPreviewList = ([
        <div key="empty-ct-1" className="nav-all drop-item">Nothing in your cart!</div>,
        <div key="empty-ct-2" className="nav-all drop-item">Click "Add to Cart" on a product to get started.</div>
      ]);

    }

    return (
      <div className="nav-drop-box right-box">
        <div className="drop-box-inner right-box-inner">
          { cartPreviewList }
        </div>
      </div>
    );

  }

});
