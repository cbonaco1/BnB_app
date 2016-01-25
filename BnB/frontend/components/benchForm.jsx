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
    // debugger
    var lat = "";
    var lng = "";

    if (this.props.location.query) {
      lat = parseFloat(this.props.location.query.lat);
      lng = parseFloat(this.props.location.query.lng);
    }


    return(
      <form className="new-bench-form" onSubmit={this.sendNewBench}>
        <label>Latitude:
          <input className="new-bench-field" type="text" onChange={this.handleChange.bind(this, "lat")}
                  value={lat}/>
        </label>

        <label>Longitude:
          <input className="new-bench-field" type="text" onChange={this.handleChange.bind(this, "lng")}
                  value={lng}/>
        </label>

        <label>Description:
          <textarea className="new-bench-field" onChange={this.handleChange.bind(this, "description")}>
          </textarea>
        </label>

        <button>Add Bench</button>
      </form>
    );
  }
});

module.exports = BenchForm;
