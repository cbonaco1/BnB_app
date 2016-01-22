var ReactDOM = require('react-dom');
var React = require('react');
var ApiUtils = require('./util/api_util');
var BenchStore = require('./stores/bench');
var Index = require('./components/index');

ReactDOM.render(<Index />, document.findElementById("content"));
