
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
        console.log("Remote Cart Updated");
        console.log("Remote:", data.length, " items.");
        console.log("Local:", CartStore.all().length, " items.");
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
  }


};
