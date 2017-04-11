// var Redux = require('redux');
// var ReactRedux = require('react-redux');
// var connect = ReactRedux.connect;
// var createStore = Redux.createStore;
// var Movies = require('./components/movies');

import {Redux, createStore } from 'redux';
import { ReactRedux, connect } from 'react-redux';


const ADD_MOVIE = "ADD_MOVIE";
const DEL_MOVIE = "DEL_MOVIE";
const RESET_MOVIES = "RESET_MOVIE";
const MOVIE_INDEX = "MOVIE_INDEX";
const UPDATE_MOVIE_INDEX = "UPDATE_MOVIE_INDEX";
const ADD_TVSHOW = "ADD_TVSHOW";
const DEL_TVSHOW = "DEL_TVSHOW";
const RESET_TVSHOWS = "RESET_TVSHOWS";

const ADD_BOOK = "ADD_BOOK";
const DEL_BOOK = "DEL_BOOK";
const RESET_BOOKS = "RESET_BOOKS"

const ADD_SEARCH = "ADD_SEARCH";

const initialState = {
  movies: [],
  tvshows: [],
  books: [],
  search: [],
  movieIndex: 0,
  tvshowsIndex: 0,
  booksIndex: 0
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

export function returnMovieIndex () {
    return { type: MOVIE_INDEX}
}

export function updateMovieIndex (index) {
    return { type: UPDATE_MOVIE_INDEX, index }
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

export function addBook (book) {
    return { type: ADD_BOOK, book }
}

export function delBook (book) {
    return { type: DEL_BOOK, book }
}

export function resetBooks () {
    return { type: RESET_BOOKS}
}

export function addSearch (results) {
    return { type: ADD_SEARCH, results}
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
                    id: action.film.id
                }, 
                ...state
            ]
        case DEL_MOVIE:
            return state.filter( item => item.title != action.film.title);
        case RESET_MOVIES:
            return [];
        case UPDATE_MOVIE_INDEX:
            return action.index;
        default:
            return state;
    }
}

export function tvshows (state = [], action) {
    switch (action.type) {
        case ADD_TVSHOW: 
            console.log('ADD_TVSHOW')
            return [
                {
                    title: action.tvshow.title,
                    poster: action.tvshow.poster,
                    released: action.tvshow.released,
                    id: action.tvshow.id
                },
                ...state
            ]
        case DEL_TVSHOW:
            return state.filter(item => (item.title != action.tvshow.title));
        case RESET_TVSHOWS:
            return [];
        default:
            return state;
    }
}

export function books (state, action) {
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
            return state;
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
            ]
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
        search: search(state.results, actions)
    }
}

export let store = createStore(mylifeapp);