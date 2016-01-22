var Dispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var ApiActions = {
  receiveAll: function(benches) {
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = ApiActions;
