

var CartActions = {
  mergeCartWithCookie: function (cart) {
    var newCart = cart.concat(CartStore.all());
    CartActions.receiveCart(newCart);
  },

  receiveCart: function (data) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_RECEIVED,
      cart: data
    });
  },
};
