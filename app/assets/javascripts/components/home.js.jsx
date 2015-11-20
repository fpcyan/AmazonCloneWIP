var Home = React.createClass({

  getInitialState: function () {
    return ({ features: FeaturedStore.allFeatures() });
  },

  componentDidMount: function () {
    ApiUtil.fetchFeaturedProducts();
    FeaturedStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    FeaturedStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    return this.setState({ features: FeaturedStore.allFeatures() });
  },

  render: function () {
    var features;
    features = this.state.features.map(function (feature) {
      return <div key={feature.id}><FeaturedIndex feature={feature} /></div>;
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
