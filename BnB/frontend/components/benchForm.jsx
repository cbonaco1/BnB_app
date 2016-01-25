var React = require('react');
var ApiUtil = require('../util/api_util');
var BenchStore = require('../stores/bench');

var BenchForm = React.createClass({

  getInitialState: function() {
    var lat = "";
    var lng = "";

    if ((this.props.location.query.lat) && (this.props.location.query.lng) ) {
      lat = parseFloat(this.props.location.query.lat);
      lng = parseFloat(this.props.location.query.lng);
    }

    return {lat: lat, lng: lng, description: ""};
  },

  componentDidMount: function() {
    this.listenerToken = BenchStore.addListener(this.newBench);
  },

  newBench: function () {
    this.props.history.pushState(null, '/', {});
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
      <form className="new-bench-form" onSubmit={this.sendNewBench}>
        <label>Latitude:
          <input className="new-bench-field" type="text" onChange={this.handleChange.bind(this, "lat")}
                  value={this.state.lat}/>
        </label>

        <label>Longitude:
          <input className="new-bench-field" type="text" onChange={this.handleChange.bind(this, "lng")}
                  value={this.state.lng}/>
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
