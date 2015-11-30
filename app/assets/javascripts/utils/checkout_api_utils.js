var CheckoutApiUtils = {

  fetchShippingAddresses: function (userId) {
    $.ajax({
      url: "api/users/" + userId + "/shipping_addresses",
      type: "get",
      dataType: "json",
      success: function (data) {
        CheckoutActions.receiveShippingAddresses(data);
      }
    });

  }

};
