import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from '../pages/home';
import { tvshowsList } from '../pages/tvshowsList';
import { booksList } from '../pages/booksList';
import { moviesList } from '../pages/movieList';
import { Stats } from '../pages/stats';

export let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Home}>
            <IndexRoute />
            <Route path='/movies' component={moviesList} />
            <Route path='/tvshows' component={tvshowsList} />
            <Route path='/books' component={booksList} />
            <Route path='/stats' component={Stats} />
        </Route>
    </Router>
);