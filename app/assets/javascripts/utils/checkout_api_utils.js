var CheckoutApiUtils = {

  fetchShippingAddresses: function () {
    $.ajax({
      url: "api/shipping_addresses",
      type: "get",
      dataType: "json",
      success: function (data) {
        debugger
        CheckoutActions.receiveShippingAddresses(data);
      }
    });

  }

};
