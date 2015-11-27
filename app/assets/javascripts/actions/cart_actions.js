

var CartActions = {

  receiveCart: function (data) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_RECEIVED,
      products: data
    });
  },

  addProduct: function (product) {
    AppDispatcher.dispatch({
      actionType: CartConstants.PRODUCT_ADDED,
      product: product
    });
  },

  receiveCartWithImages: function (data) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_WITH_IMAGES_RECEIVED,
      products: data
    });
  }
};
