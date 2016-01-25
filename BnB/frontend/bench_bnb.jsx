var ReactDOM = require('react-dom');
var React = require('react');
var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
// var HashHistory = ReactRouter.History;
var Search = require('./components/search');
var BenchForm = require('./components/benchForm');


var App = React.createClass({
  render: function() {
    return(
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search} />
    <Route path="benches/new" component={BenchForm} />
  </Route>
);


document.addEventListener("DOMContentLoaded", function (e) {
  var root = document.getElementById("content");
  ReactDOM.render(<Router>{routes}</Router>, root);
});
