var Home = React.createClass({

  getInitialState: function () {
    return ({ features: FeaturedProductStore.allFeatures() });
  },

  componentDidMount: function () {
    ApiUtil.fetchFeaturedProducts();
    FeaturedProductStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    FeaturedProductStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    return this.setState({ features: FeaturedProductStore.allFeatures() });
  },

  render: function () {
    var features;
    features = this.state.features.map(function (feature) {
      return <div key={feature.id}><FeaturedProductIndex feature={feature} /></div>;
    });
    return(
      <div>
        <NavBar />
        <section className="product-home group">
          { features }
        </section>
      </div>
    );
  }

});
