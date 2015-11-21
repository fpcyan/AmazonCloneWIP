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
        <div className="featured">
          <h2 className="featured-dept"><a href="#" className="dept-link">{this.props.feature.title}</a></h2>

          <button className="slide-left" onClickCapture={this.handleButtonClick}>
            <img src={appImages.leftArrow} alt="left arrow" />
          </button>
          <button className="slide-right" onClickCapture={this.handleButtonClick} >
            <img src={appImages.rightArrow} alt="right arrow" />
          </button>

          <ul className="carousel group" onMouseEnter={this.handleHover} onMouseLeave={this.handleStopHover}>
            { images }
          </ul>

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
