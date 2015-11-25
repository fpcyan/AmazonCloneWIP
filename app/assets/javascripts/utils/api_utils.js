

var ApiUtil = {

  fetchFeaturedProducts: function () {

    $.ajax({
      url: "/api/products",
      type: "get",
      data: { home: true },
      success: function (data) {
        ProductActions.receiveFeaturedProducts(data);
      }
    });
  },

  fetchProducts: function () {
    $.ajax({
      url:"/api/products",
      type: "get",
      success: function (data) {
        ProductActions.receiveProducts(data);
      }
    });
  },

  fetchSingleProduct: function (productId) {
    $.ajax({
      url:"/api/products/" + productId,
      type: "get",
      success: function (data) {
        ShowActions.receiveProduct(data);
      }
    });
  },

  fetchCart: function () {
    $.ajax({
      url: "api/shopping_cart_items",
      type: "get",
      success: function (data) {
        debugger;
        cart = CartActions.mergeCartWithCookie(data);
        CartActions.receiveCart(data);
      },
      error: function (data) {
        debugger
      }
    });
  }


};
