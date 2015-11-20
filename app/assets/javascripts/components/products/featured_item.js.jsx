var FeaturedItem = React.createClass({

  render: function () {
    return(
      <li className="carousel-card">
        <img className="product-item-image" src={this.props.item.image[0].image_url}/>
      </li>
    );
  }
});
