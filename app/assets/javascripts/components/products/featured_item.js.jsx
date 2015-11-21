var FeaturedItem = React.createClass({

  render: function () {
    var klass = (
      "product-image " +
      this.props.feature
    );
    return(
      <li className="carousel-card">
        <img id={this.props.feature} className={klass} src={this.props.item.url}/>
        <p className="product-details-button">More Details</p>
      </li>
    );
  }
});
