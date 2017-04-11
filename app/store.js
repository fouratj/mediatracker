// var Redux = require('redux');
// var ReactRedux = require('react-redux');
// var connect = ReactRedux.connect;
// var createStore = Redux.createStore;
// var Movies = require('./components/movies');

import {Redux, createStore } from 'redux';
import { ReactRedux, connect } from 'react-redux';


const ADD_MOVIE = "ADD_MOVIE";
const DEL_MOVIE = "DEL_MOVIE";
const ADD_TVSHOW = "ADD_TVSHOW";
const DEL_TVSHOW = "DEL_TVSHOW";
const ADD_BOOK = "ADD_BOOK";
const DEL_BOOK = "DEL_BOOK";
const ADD_SEARCH = "ADD_SEARCH";

const initialState = {
  movies: [],
  tvshows: [],
  books: [],
  search: []
}

export function addMovie (film) {
    return { type: ADD_MOVIE, film }
}

export function delMovie (film) {
    return {type: DEL_MOVIE, film}
}

export function addTVShow (tvshow) {
    return { type: ADD_TVSHOW, tvshow }
}

export function delTVShow (tvshow) {
    return { type: DEL_TVSHOW, tvshow }
}

export function addBook (book) {
    return { type: ADD_BOOK, book }
}

export function delBook (book) {
    return { type: DEL_BOOK, book }
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

export function mylifeapp (state = initialState, actions) {

    return {
        movies: movies(state.movies, actions),
        tvshows: tvshows(state.tvshows, actions),
        books: books(state.books, actions),
        search: search(state.results, actions)
    }
}

export let store = createStore(mylifeapp);