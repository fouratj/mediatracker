import {Redux, createStore } from 'redux';
import { ReactRedux, connect } from 'react-redux';

const ADD_MOVIE = "ADD_MOVIE";
const DEL_MOVIE = "DEL_MOVIE";
const RESET_MOVIES = "RESET_MOVIE";
const MOVIE_INDEX = "MOVIE_INDEX";
const UPDATE_MOVIES_INDEX = "UPDATE_MOVIES_INDEX";

const ADD_TVSHOW = "ADD_TVSHOW";
const DEL_TVSHOW = "DEL_TVSHOW";
const RESET_TVSHOWS = "RESET_TVSHOWS";
const TVSHOWS_INDEX = "TVSHOWS_INDEX";
const UPDATE_TVSHOWS_INDEX = "UPDATE_TVSHOWS_INDEX";

const ADD_BOOK = "ADD_BOOK";
const DEL_BOOK = "DEL_BOOK";
const RESET_BOOKS = "RESET_BOOKS";
const BOOKS_INDEX = "BOOKS_INDEX";
const UPDATE_BOOKS_INDEX = "UPDATE_BOOKS_INDEX";

const ADD_SEARCH = "ADD_SEARCH";
const ADD_SEASONS = "ADD_SEASONS";

const UPDATE_MOVIE_STATS = "UPDATE_MOVIE_STATS";
const UPDATE_BOOK_STATS = "UPDATE_BOOK_STATS";
const UPDATE_TVSHOW_STATS = "UPDATE_TVSHOW_STATS";

const UPDATE_TITLE = "UPDATE_TITLE";

const initialIndices = {
    movies: 0,
    tvshows: 0,
    books: 0
};

const initialStats = {
    movies: {count: 0, total: 0},
    tvshows: {count: 0, total: 0},
    books: {count: 0, total: 0}
};

const initialState = {
  movies: [],
  tvshows: [],
  books: [],
  search: [], //deploys search results
  seasons: [], //deploys additional season search results
  indices: initialIndices,
  stats: initialStats,
  title: ''
};

export function updateTitle (title) {
    return { type: UPDATE_TITLE, title}
}

//MOVIES
export function addMovie (film) {
    return { type: ADD_MOVIE, film }
}

export function delMovie (film) {
    return {type: DEL_MOVIE, film}
}

export function resetMovies () {
    return { type: RESET_MOVIES }
}

export function updateMoviesIndex (index) {
    return { type: UPDATE_MOVIES_INDEX, index }
}
// /MOVIES

// TVSHOWS
export function addTVShow (tvshow) {
    return { type: ADD_TVSHOW, tvshow }
}

export function delTVShow (tvshow) {
    return { type: DEL_TVSHOW, tvshow }
}

export function resetTVshows () {
    return { type: RESET_TVSHOWS}
}

export function updateTVShowsIndex (index) {
    return { type: UPDATE_TVSHOWS_INDEX, index }
}

// BOOKS
export function addBook (book) {
    return { type: ADD_BOOK, book }
}

export function delBook (book) {
    return { type: DEL_BOOK, book }
}

export function resetBooks () {
    return { type: RESET_BOOKS}
}

export function updateBooksIndex (index) {
    return { type: UPDATE_BOOKS_INDEX, index }
}

export function addSearch (results) {
    return { type: ADD_SEARCH, results}
}

export function addSeasons (seasons) {
    return { type: ADD_SEASONS, seasons }
}

export function updateMovieStats (stats) {
    return { type: UPDATE_MOVIE_STATS, stats}
}

export function updateShowStats (stats) {
    return { type: UPDATE_TVSHOW_STATS, stats}
}

export function updateBookStats (stats) {
    return { type: UPDATE_BOOK_STATS, stats}
}

export function indices (state = initialIndices, action) {

    switch(action.type) {
        case UPDATE_MOVIES_INDEX:
            return {
                movies: action.index,
                tvshows: state.tvshows,
                books: state.books
            };
        case UPDATE_TVSHOWS_INDEX:
            return {
                movies: state.movies,
                tvshows: action.index,
                books: state.books
            };
        case UPDATE_BOOKS_INDEX:
            return {
                movies: state.movies,
                tvshows: state.tvshows,
                books: action.index
            };
        default:
            return state;
    }
            
}

export function stats (state = initialStats, action) {
    switch (action.type) {
        case UPDATE_MOVIE_STATS:
            return {
                movies: action.stats.movies,
                tvshows: state.tvshows,
                books: state.books
            }
        case UPDATE_TVSHOW_STATS:
            return {
                movies: state.movies,
                tvshows: action.stats.tvshows,
                books: state.books
            }
        case UPDATE_BOOK_STATS:
            return {
                movies: state.movies,
                tvshows: state.tvshows,
                books: action.stats.books
            }
        default:
            return state;
    }
}

// ACTIONS
export function movies (state = [], action) {
    switch (action.type) {
        case ADD_MOVIE:
            return [
                {
                    title: action.film.title,
                    poster: action.film.poster,
                    released: action.film.released,
                    id: action.film.id,
                    dateAdded: action.film.dateAdded,
                    count: action.film.count,
                    key: action.film.key,
                    runtime: action.film.runtime,
                    synopsis: action.film.synopsis
                }, 
                ...state
            ]
        case DEL_MOVIE:
            return state.filter( item => item.title != action.film.title);
        case RESET_MOVIES:
            return [];
        default:
            return state;
    }
}

export function tvshows (state = [], action) {
    switch (action.type) {
        case ADD_TVSHOW: 
            return [
                {
                    key: action.tvshow.key,
                    title: action.tvshow.title,
                    count: action.tvshow.count,
                    id: action.tvshow.id,
                    episodes: action.tvshow.episodes,
                    runtime: action.tvshow.runtime,
                    released: action.tvshow.released,
                    poster: action.tvshow.poster
                },
                ...state
            ]
        case DEL_TVSHOW:
            return state.filter(item => {
                if (item.title == action.tvshow.title && item.released == action.tvshow.released) {
                    return false;
                }
                return true;
            });
        case RESET_TVSHOWS:
            return [];
        default:
            return state;
    }
}

export function books (state = [], action) {
    switch (action.type) {
        case ADD_BOOK: 
            return [
                {
                    title: action.book.title,
                    poster: action.book.poster,
                    released: action.book.released,
                    id: action.book.id
                },
                ...state
            ]
        case DEL_BOOK:
            return state
                        .filter(item => ( item.title != action.book.title ))
                        .filter(item => ( item.id != action.book.id ));
        case RESET_BOOKS:
            return [];
        default:
            return state;
    }
}

export function search (state = [], action) {
    
    switch (action.type) {
        case ADD_SEARCH:
            return [
                ...action.results
            ];
        default:
            return state;
    }
    
}

export function seasons (state = [], action) {
    switch(action.type) {
        case ADD_SEASONS:
            return [
                ...action.seasons
            ];
        default:
            return state;   
    }
        
}

export function title (state = '', action ) {
    switch(action.type) {
        case UPDATE_TITLE:
            return action.title;
        default:
            return state;
    }
}
// /ACTIONS

export function resetStateOnSignOut () {
    store.dispatch(resetMovies());
    store.dispatch(resetTVshows());
    store.dispatch(resetBooks());
}

export function mylifeapp (state = initialState, actions) {
    return {
        movies: movies(state.movies, actions),
        tvshows: tvshows(state.tvshows, actions),
        books: books(state.books, actions),
        search: search(state.search, actions),
        seasons: seasons(state.seasons, actions),
        indices: indices(state.indices, actions),
        stats: stats(state.stats, actions),
        title: title(state.title, actions)
    }
}

export let store = createStore(mylifeapp);