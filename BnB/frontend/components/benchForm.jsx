var React = require('react');
var ApiUtil = require('../util/api_util');

var BenchForm = React.createClass({

  getInitialState: function() {
    return {lat: null, lng: null, description: ""};
  },

  sendNewBench: function(e) {
    e.preventDefault();
    var newLat = parseFloat(this.state.lat);
    var newLng = parseFloat(this.state.lng);
    var newDescription = this.state.description;
    var bench = {bench: {lat: newLat, lng: newLng, description: newDescription} };

    ApiUtil.createBench(bench);
  },

  handleChange: function(field, e) {
    var newState = {};
    newState[field] = e.target.value;
    this.setState(newState);
  },

  render: function() {
    return(
      <form onSubmit={this.sendNewBench}>
        <label>Latitude:
          <input type="text" onChange={this.handleChange.bind(this, "lat")}/>
        </label>

        <label>Longitude:
          <input type="text" onChange={this.handleChange.bind(this, "lng")}/>
        </label>

        <label>Description:
          <textarea onChange={this.handleChange.bind(this, "description")}>
          </textarea>
        </label>

        <input type="submit" value="Add Bench" />
      </form>
    );
  }
});

module.exports = BenchForm;
