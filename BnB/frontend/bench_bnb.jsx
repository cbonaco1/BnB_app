var ReactDOM = require('react-dom');
var React = require('react');
var ApiUtils = require('./util/api_util');
var BenchStore = require('./stores/bench');
var Search = require('./components/search');
var Map = require('./components/map');

document.addEventListener("DOMContentLoaded", function (e) {
  ReactDOM.render(<Map />, document.getElementById("content"));
});
