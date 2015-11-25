

var CartActions = {
  mergeCartWithCookie: function (cart) {
    var newCart = cart.concat(CartStore.all());
    CartActions.receiveCart(newCart);
  },

  receiveCart: function (data) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_RECEIVED,
      products: data
    });
  },

  appProduct: function (product) {
    AppDispatcher.dispatch({
      actionType: CartConstants.PRODUCT_ADDED,
      product: product
    });
  }
};
