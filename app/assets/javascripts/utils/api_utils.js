

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
  }
  // format: { features: [departments.name], department.name: [products] . . . }

};
