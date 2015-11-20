var FeaturedIndex = React.createClass({

  getInitialState: function () {
    return ({ products: FeaturedStore.byFeature(this.props.feature)});
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
              { products }
          </ul>
        </div>
    );
  }

});
