import {createStore} from 'redux';
import {movies, tvshows, books} from './reducers'

function mylifeapp (state = {}, actions) {
    return {
        movies: movies(state, actions),
        tvshows: tvshows(state, actions),
        books: books(state, actions)
    }
}

export let store = createStore(mylifeapp);