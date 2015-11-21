var FeaturedIndex = React.createClass({

  getInitialState: function () {
    return ({ products: FeaturedStore.byFeature(this.props.feature), active: this.activeProducts() });
  },

  activeProducts: function () {
    var defaultActive = 5;
    var defaultWidth = 1400;

    this.
  },

  render: function () {
    debugger;
    var products = this.state.products.map(function (product) {
      return <div key={product.id}><FeaturedItem item={product} /></div>;
    });

    return (
        <div className="featured">
          <h2 className="featured-dept">{this.props.feature.title}</h2>
          <ul className="carousel">
            <button className="carousel-left">
              <img src={appImages.leftArrow} alt="left arrow" />
            </button>
            <button className="carousel-right" on>
              <img src={appImages.rightArrow} alt="right arrow" />
            </button>
            { products }
          </ul>
        </div>
    );
  }

});
