(function (root) {
  var _featuredProducts, FeaturedProductStore, CHANGE_EVENT;

  CHANGE_EVENT = "change event";

  _featuredProducts = { features: null };

  function _resetProducts(newProducts) {
    _featuredProducts = newProducts || { features: null };
  }

  FeaturedProductStore = root.FeaturedProductStore = $.extend({}, EventEmitter.prototype, {


    allFeatures: function () {
      return _featuredProducts.features;
    },

    byFeature: function (feature) {
      return _featuredProducts[feature].slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case ProductConstants.PRODUCTS_RECEIVED:
          _resetProducts(payload.products);
          FeaturedProductStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
