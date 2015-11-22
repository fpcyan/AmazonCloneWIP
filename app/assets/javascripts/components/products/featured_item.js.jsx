var FeaturedItem = React.createClass({

  render: function () {

    return(
      <li className="carousel-card">
        <a href="#" className="feature-link">
          <img className="feature-image" src={this.props.item.url}/>
          <p className="feature-details-button">More Details</p>
        </a>
      </li>
    );
  }
});
