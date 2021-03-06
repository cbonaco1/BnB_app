var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtils = require('../util/api_util');
// var History = require('react-router').History;

var Map = React.createClass({

  componentDidMount: function() {
    this.listenerToken = BenchStore.addListener(this.makeMarks);
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    //After map has moved, get bounds of final moved location
    this.map.addListener('idle', function(e){
      var bounds = this.map.getBounds();
      var northEast = bounds.getNorthEast();
      var southWest = bounds.getSouthWest();

      ApiUtils.fetchBenches({"bounds": {
        "northEast": {"lat": northEast.lat(), "lng": northEast.lng()} ,
        "southWest": {"lat": southWest.lat(), "lng": southWest.lng()}
      }});
    }.bind(this));

    //Call clickHanlder passed as prop from Search parent
    this.map.addListener('click', function(e){
      // console.log(e.latLng.lat());
      // console.log(e.latLng.lng());
      var coords = {lat: e.latLng.lat(), lng: e.latLng.lng() };
      this.props.mapClickHandler(coords);
    }.bind(this));

  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  makeMarks: function() {
    var benches = BenchStore.all();
    benches.forEach(function(bench){
      var pos = new google.maps.LatLng(bench.lat, bench.lng);
      var marker = new google.maps.Marker({
        position: pos,
        map: this.map
      });
    }.bind(this));
  },


  render: function() {
    return(
      <div className="map" ref="map">
      </div>
    );
  }
});

module.exports = Map;
