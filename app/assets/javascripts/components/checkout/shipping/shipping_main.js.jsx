var ShippingMain = React.createClass({

  componentWillReceiveProps: function (nextProps) {

  },

  render: function () {
    var fullName, twoLines, cityStateZip, hasShippingAddress, hasShippingButton;
    if (this.props.address) {
      fullName = this.props.address.full_name;
      var lineOne = this.props.address.address_one;
        if (this.props.address.address_two) {
          twoLines = lineOne + " " + this.props.address.address_two;
        } else {
          twoLines = lineOne;
        }
      cityStateZip = this.props.address.city + ", ";
      cityStateZip += this.props.address.region + ", ";
      cityStateZip += this.props.address.zip;
      hasShippingAddress = (
        <ul className="display-info">
          <li className="small-line-item">
            <p className="left-text">{fullName}</p>
          </li>
          <li className="small-line-item">
            <p className="left-text">{twoLines}</p>
          </li>
          <li className="small-line-item">
            <p className="left-text">{cityStateZip}</p>
          </li>
        </ul>
      );
      hasShippingButton = (
        <div className="left-col">
          <button className="clear-button">
            <p>Change</p>
          </button>
        </div>
      );
    } else {
      hasShippingAddress = (
        <div className="button-wrapper">
          <h4>You have no shipping addresses saved.</h4>
          <button onClick={this.props.shipClick}className="large-button">
            <p className="some-button-txt">Add shipping address</p>
          </button>
        </div>
      );
    }

    return (
      <div className="shipping-address expand-box group">
        <div className="left-col"><h3>1</h3> </div>
        <div className="left-col"><h3>Shipping address</h3></div>
        <div className="left-col">
          {hasShippingAddress}
        </div>
        {hasShippingButton}
      </div>
    );

  }

});
