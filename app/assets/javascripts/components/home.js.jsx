var Home = React.createClass({

  getInitialState: function () {
    return ({ features: FeatureProductStore.allFeatures() });
  },

  componentDidMount: function () {
    ApiUtil.fetchFeaturedProducts();
    FeatureProductStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    FeatureProductStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    return this.setState({ feature: FeatureProductStore.allFeatures() });
  },

  render: function () {
    var features = this.state.features.map(function (feature) {
      return <div key={feature}><FeaturedProductIndex feature={feature} /></div>;
    });
    return(
      <div>
        { this.state.products }
        <NavBar />
      </div>
    );
  }

});
