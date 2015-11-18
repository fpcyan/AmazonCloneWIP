(function (root) {
  var _featureProducts, FeatureProductStore, CHANGE_EVENT;

  CHANGE_EVENT = "change event";

  _featureProducts = {};

  function _resetProducts(newProducts) {
    _featureProducts = newProducts || {};
  }

  FeatureProductStore = root.ProductStore = $.extend({}, EventEmitter.prototype, {


    allFeatures: function () {
      return _featureProducts[features];
    },

    byFeature: function (feature) {
      return _featureProducts[feature].slice();
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
          ProductStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
