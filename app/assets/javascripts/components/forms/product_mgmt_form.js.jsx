var ProductMgmtForm = React.createClass({

  render: function () {

    return (
      <div className="mgmt-box-inner">
        <form className="mgmt-form">
          <span className="product-price-summary">
            <strong className="product-price">$153.00 {this.props.product.price}</strong>
              <strong className="free-shipping">FREE Shipping! </strong><a href="#" className="shipping-details normal-link">Details</a>
          </span>
          <label className="quantity-dropdown">
            Qty:
            <select className="dropdown">
            </select>
          </label>

          <span className="same-day-delivery"><a href="#">Time Travel Delivery</a></span>
          <button className="cart-button">
            <img className="cart-button-img" />
            <p className="cart-button-txt">Add to Cart</p>
          </button>

          <button className="wish-list-button">Add to Wish List</button>
        </form>
      </div>
    );

  }

});
