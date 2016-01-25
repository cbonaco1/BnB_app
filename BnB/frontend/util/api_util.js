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
  },

  createBench: function (bench) {
    $.ajax({
      type: "POST",
      url: "/api/benches",
      dataType: "json",
      data: bench,
      success: function(data) {
        console.log(data);
      },
      error: function(data) {
        alert("Error in createBench");
      }
    });
  }


};

module.exports = ApiUtil;
