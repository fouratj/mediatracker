import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Home from '../pages/home';
import { tvshowsList } from '../pages/tvshowsList';
import { booksList } from '../pages/booksList';
import { moviesList } from '../pages/movieList';
import { statsList } from '../pages/statsList';
import { titleWrapper } from '../pages/titleWrapper';

export let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Home}>
            <Route path='/movies' component={titleWrapper} />>
            <Route path='/movies/cards' component={moviesList} />
            <Route path='/movies/list' component={moviesList} />
            <Route path='/movies/chart' />

            <Route path='/tvshows' component={titleWrapper} />
            <Route path='/tvshows/cards' component={tvshowsList} />
            <Route path='/tvshows/list' component={tvshowsList} />

            <Route path='/books' component={titleWrapper} />
            <Route path='/books/cards' component={booksList} />
            <Route path='/books/list' component={booksList} />

            <Route path='/stats' component={statsList} />
        </Route>
    </Router>
)