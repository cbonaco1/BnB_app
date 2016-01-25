var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtils = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  getBenches: function() {
    this.setState({ benches: BenchStore.all() });
  },

  componentWillMount: function() {
    this.listenerToken = BenchStore.addListener(this.getBenches);
    // ApiUtils.fetchBenches();
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  render: function() {
    var benches = this.state.benches.map(function(bench){
        return <li key={bench.id}>{bench.description}</li>;
    });

    return(
      <ul className="bench-index">
        { benches }
      </ul>
    );
  }
});

module.exports = Index;
