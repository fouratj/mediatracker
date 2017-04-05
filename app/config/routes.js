var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Home = require('../pages/home');
var Movies = require("../pages/movies");
var TVShows = require('../pages/tvshows');
var Books = require('../pages/books');
var Stats = require('../pages/stats');
var Modal = require('../components/modal')
var movieList = require('../pages/movieList')

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Home}>
            <Route path='/movies' component={movieList} />
            <Route path='/tvshows' component={TVShows} />
            <Route path='/books' component={Books} />
            <Route path='/stats' component={Stats} />
        </Route>
    </Router>
);

module.exports = routes;