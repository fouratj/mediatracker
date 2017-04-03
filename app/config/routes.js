var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Home = require('../pages/home');
var Movies = require("../pages/movies");

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Home}>
            <Route path='/movies' component={Movies} />
        </Route>
    </Router>
);

module.exports = routes;