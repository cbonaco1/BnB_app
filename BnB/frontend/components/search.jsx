var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtils = require('../util/api_util');
var Map = require('./map');
var Index = require('./index');

var Search = React.createClass({

  mapClickHandler: function(coords) {
    //not completely sure how this works
    //Guess is that children inherit props from their parent
    //and since Search is a child of App, and App has History
    this.props.history.pushState(null, 'benches/new', coords);
  },

  render: function() {
    return(
      <div>
        <Index />
        <Map mapClickHandler={this.mapClickHandler}/>
      </div>
    );
  }
});

module.exports = Search;
