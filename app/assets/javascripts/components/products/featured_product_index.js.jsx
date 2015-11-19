var FeaturedProductIndex = React.createClass({

  getInitialState: function () {
    return ({ products: FeaturedProductStore.byFeature(this.props.feature)});
  },

  render: function () {
    var products = this.state.products.map(function (product) {
      return <div key={product.id}><FeaturedProductItem item={product} /></div>;
    });

    return (
      <div className="featured">
        <ul className="carousel group">
            { products }
        </ul>
      </div>
    );
  }

});
