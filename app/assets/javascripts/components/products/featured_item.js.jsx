var FeaturedItem = React.createClass({



  render: function () {
    return(
      <li className="carousel-card">
        <img className="product-image" src={this.props.item.image[0].image_url}/>
        <p className="product-details-button">More Details</p>
      </li>
    );
  }
});
