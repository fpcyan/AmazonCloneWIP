
var CartApiUtils = {

  updateRemoteCartItems: function (cart, callback) {
    var parsedCart = [];
    cart.forEach( function(obj) {
      parsedCart.push({ product_id: obj.product.id, quantity: obj.quantity });
    });
    $.ajax({
      url: "api/shopping_cart_items",
      type: "post",
      dataType: "json",
      data: { shopping_cart_items: JSON.stringify(parsedCart) },
      success: function (data) {
        CartActions.receiveCart(data);
        callback && callback();
      }
    });
  },

  fetchUserCart: function () {
    $.ajax({
      url: "api/shopping_cart_items",
      type: "get",
      dataType: "json",
      success: function (data) {
        CartActions.receiveCartWithImages(data);
      }
    });
  },

  deleteCart: function (callback) {
    $.ajax({
      url: "api/shopping_cart_items/1",
      type: "delete",
      dataType: "json",
      success: function (data) {
        CartActions.receiveCart([]);
        callback && callback();
      }
    });
  }


};
