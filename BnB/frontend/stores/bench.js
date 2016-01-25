var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/bench_constants');

var _benches = [];

BenchStore.all = function() {
  return _benches.slice(0);
};

var resetBenches = function(benches) {
  _benches = benches;
};

var addBench = function(bench) {
  _benches.push(bench);
  // debugger
};

BenchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
    case BenchConstants.NEW_BENCH_CREATED:
      addBench(payload.bench);
      BenchStore.__emitChange();
      break;
  }
};
window.BenchStore = BenchStore;
module.exports = BenchStore;
