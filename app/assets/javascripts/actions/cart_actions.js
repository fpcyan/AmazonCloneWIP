

var CartActions = {
  mergeCartWithCookie: function (data) {

  },

  receiveCart: function (data) {
    AppDispatcher.dispatch({
      actionType: CartConstants.CART_RECEIVED,
      cart: data
    });
  },
};
