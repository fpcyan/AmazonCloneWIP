(function (root) {
  var _featuredProducts, FeaturedProductStore, CHANGE_EVENT;

  CHANGE_EVENT = "change event";

  _featuredProducts = [];

  function _resetProducts(newProducts) {
    _featuredProducts = newProducts;
  }

  FeaturedProductStore = root.FeaturedProductStore = $.extend({}, EventEmitter.prototype, {


    allFeatures: function () {
      return _featuredProducts.slice();
    },

    byFeature: function (feature) {
      var target = _featuredProducts.filter(function (dept) {
        return dept.id === feature.id;
      });
      return target[0].products.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case ProductConstants.FEATURED_PRODUCTS_RECEIVED:
          _resetProducts(payload.products);
          FeaturedProductStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
