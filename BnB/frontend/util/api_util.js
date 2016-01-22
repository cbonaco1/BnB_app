var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchBenches: function(bounds) {
    //make AJAX call to fetch all benches
    $.ajax({
      type: "GET",
      url: "/api/benches",
      data: bounds,
      dataType: "json",
      success: function(data) {
        ApiActions.receiveAll(data);
      },
      error: function(data) {
        alert("Error in fetchBenches");
      }
    });

  }
};

module.exports = ApiUtil;
