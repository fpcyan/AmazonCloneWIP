var CheckoutApiUtils = {

  fetchShippingAddresses: function () {
    $.ajax({
      url: "api/shipping_addresses",
      type: "get",
      dataType: "json",
      success: function (data) {
        CheckoutActions.receiveShippingAddresses(data);
      }
    });
  },

  createFinishedPayment: function(token, success) {
    debugger;
    $.ajax({
      url: "api/checkout",
      type: "post",
      dataType: "json",
      data: { token: token },
      success: function (data) {
        debugger;
        CheckoutActions.receiveShippingAddresses(data);
        success && success();
      }
    });
  }

};
