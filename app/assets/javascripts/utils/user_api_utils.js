


var UserApiUtil = {

  createUser: function (attrs) {
    $.ajax({
      url: "api/users",
      type: "post",
      dataType: "json",
      data: attrs,
      success: function (user) {
        UserActions.receiveCurrentUser(user);
        // callback??
      }
    });
  },

  signIn: function (credentials, success) {
    $.ajax({
      url: "api/session",
      type: "post",
      dataType: "json",
      data: credentials,
      success: function (user) {
        UserActions.receiveCurrentUser(user);
        // success && success(); ??
      }
    });
  },

  signOut: function () {
    $.ajax({
      url: "api/session",
      type: "delete",
      dataType: "json",
      success: function () {
        UserActions.receiveCurrentUser({});
        // success && success(); ??
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: "api/session",
      type: "get",
      dataType: "json",
      data: credentials,
      success: function (user) {
        UserActions.receiveCurrentUser(user);
        // success && success(); ??
      }
    });
  }



};
