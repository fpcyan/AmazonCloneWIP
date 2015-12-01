var ShippingMain = React.createClass({

  componentWillReceiveProps: function (nextProps) {

  },

  render: function () {

    return (
      <div className="shipping-address expand-box group">
        <div className="left-col"><h3>1</h3> </div>
        <div className="left-col"><h3>Shipping address</h3></div>
        <div className="left-col">
          <ul className="display-info">
            <li className="small-line-item">
              <p className="left-text">Fiona Conn</p>
            </li>
            <li className="small-line-item">
              <p className="left-text">3755 77th st Apt 2J</p>
            </li>
            <li className="small-line-item">
              <p className="left-text">Jackson Heights, NY, 11372</p>
          </li>
          </ul>
        </div>
        <div className="left-col">
          <button className="clear-button">
            <p>Change</p>
          </button>
        </div>
      </div>
    );

  }

});
