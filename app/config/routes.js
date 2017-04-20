import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from '../pages/home';
import { tvshowsList } from '../pages/tvshowsList';
import { booksList } from '../pages/booksList';
import { moviesList } from '../pages/movieList';
import { statsList } from '../pages/statsList';

export let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Home}>
            <Route path='/movies' component={moviesList}>
                <Route path='/list' />
                <Route path='/chart' />
            </Route>
            <Route path='/tvshows' component={tvshowsList} />
            <Route path='/books' component={booksList} />
            <Route path='/stats' component={statsList} />
        </Route>
    </Router>
);