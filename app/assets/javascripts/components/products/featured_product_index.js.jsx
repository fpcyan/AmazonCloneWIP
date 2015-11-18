var FeaturedProductIndex = React.CreateClass({

  getInitialState: function () {
    return ({ products: FeatureProductStore.byFeature(this.state.props.feature)});
  },

  render: function () {
    var products = this.state.products.map(function (product) {
      return <li key={product.id}><FeaturedProductItem item={product} /></li>;
    });

    return (
      <div className="featured">
        <ul className="carousel">
          { products }
        </ul>
      </div>
    );
  }

});
