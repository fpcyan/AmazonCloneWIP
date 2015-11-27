
var CartApiUtils = {

  updateRemoteCartItems: function (cart) {
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
      }
    });
  },


};
