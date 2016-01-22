var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtils = require('../util/api_util');
var Map = require('./map');
var Index = require('./index');

var Search = React.createClass({
  render: function() {
    return(
      <div>
        // <Index />
        <Map />
      </div>
    );
  }
});
