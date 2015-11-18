var FeaturedProductIndex = React.CreateClass({

  getInitialState: function () {
    return ({ products: FeatureProductStore.byFeature(this.state.props.feature)});
  },

  render: function () {
    var products = this.state.products.map(function (product) {
      return <div key={product.id}><FeaturedProductItem item={product} /></div>;
    });

    return (
      <div>
        { products }
      </div>
    );
  }

});
