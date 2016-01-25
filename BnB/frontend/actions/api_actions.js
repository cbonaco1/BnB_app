var Dispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var ApiActions = {
  receiveAll: function(benches) {
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveNewBench: function(bench) {
    Dispatcher.dispatch({
      actionType: BenchConstants.NEW_BENCH_CREATED,
      bench: bench
    });
  }

};


module.exports = ApiActions;
