var ProductMgmtForm = React.createClass({

  render: function () {

    return (
      <div className="mgmt-box-inner">
        <form className="mgmt-form">
          <label className="quantity-dropdown">
            Qty:
            <select className="dropdown">
            </select>
          </label>

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
