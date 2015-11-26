(function (root) {
  var _products, CartStore, CHANGE_EVENT;

  CHANGE_EVENT = "change event";

  _products = [];

  function _resetCartProducts(newProducts) {
    _products = newProducts || [];
  }

  function _addProduct(newProduct) {
    for (var i = 0; i < _products.length; i++) {
      if (newProduct.product.id === _products[i].product.id) {
        return _products[i].quantity += newProduct.quantity;
      }
    }
    _products.push(newProduct);
  }

  function _verifyChange(nextProducts) {
    if (nextProducts.length === 0) {
      _resetCartProducts(nextProducts);
    }
    var newCart = nextProducts.filter( function (item) {
      for (var i = 0; i < CartStore.all().length; i++) {
        if (CartStore.all()[i].product.id === item.product.id) {
          return false;
        }
      }
      return true;
    });
    if (newCart.length > 0) {
      var newNewCart = newCart.concat(CartStore.all());
      _resetCartProducts(newNewCart);
      return true;
    }
    return false;
  }

  CartStore = root.CartStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _products.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {

      switch (payload.actionType) {
        case CartConstants.CART_RECEIVED:
          if (_verifyChange(payload.products)) {
            CartStore.emit(CHANGE_EVENT);
          }
          break;
        case CartConstants.PRODUCT_ADDED:
          if (_addProduct(payload.product)) {
            CartStore.emit(CHANGE_EVENT);
          } else {
            debugger;
          }
          break;
      }
    })

  });

})(this);
