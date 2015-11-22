var FeaturedIndex = React.createClass({

  getInitialState: function () {
    return ({ products: FeaturedStore.byFeature(this.props.feature) });
  },

  render: function () {
    var images = this.state.products.map(function (product) {
      return (
        <div key={product.id}>
          <FeaturedItem
            item={product.image[0]}
            capture={this.handleClickProduct} />
        </div>
      );
    });
    return (
        <div className="desktop-wrapper">
          <div className="featured">
            <h2 className="featured-dept"><a href="#" className="dept-link">{this.props.feature.title}</a></h2>

            <button className="arrow-button slide-left" onClickCapture={this.handleButtonClick}>
              <img src={appImages.leftArrow} alt="left arrow" />
            </button>
            <button className="arrow-button slide-right" onClickCapture={this.handleButtonClick} >
              <img src={appImages.rightArrow} alt="right arrow" />
            </button>

            <div className="carousel">
              <ul className="carousel-viewport" onMouseEnter={this.handleHover} onMouseLeave={this.handleStopHover}>
                { images }
              </ul>
            </div>
          </div>
        </div>
    );
  },

  handleHover: function (e) {

  },

  handleStopHover: function (e) {

  },

  handleButtonClick: function (e) {
    e.preventDefault();
  },

  handleProductClick: function (e) {

  },

});
