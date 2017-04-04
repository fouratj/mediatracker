// import {createStore} from 'redux';
var Redux = require('redux');
var createStore = Redux.createStore;

const ADD_MOVIE = "ADD_MOVIE";
const DEL_MOVIE = "DEL_MOVIE";
const ADD_TVSHOW = "ADD_TVSHOW";
const DEL_TVSHOW = "DEL_TVSHOW";
const ADD_BOOK = "ADD_BOOK";
const DEL_BOOK = "DEL_BOOK";

const initialState = {
  movies: [],
  tvshows: [],
  books: []
}

// ACTIONS
function addMovie (film) {
    return { type: ADD_MOVIE, film }
}

function delMovie (film) {
    return {type: DEL_MOVIE, film}
}

function addTVShow (tvshow) {
    return { type: ADD_TVSHOW, tvshow }
}

function delTVShow (tvshow) {
    return { type: DEL_TVSHOW, tvshow }
}

function addBook (book) {
    return { type: ADD_BOOK, book }
}

function delBook (book) {
    return { type: DEL_BOOK, book }
}
// /ACTIONS


// REDUCERS
function movies (state = [], action) {
    console.log(state)
    switch (action.type) {
        case ADD_MOVIE:
            console.log("ADD_MOVIE") 
            return [
                ...state, 
                {
                    title: action.film,
                    imageURL: '',
                    release: ''
                }   
            ]
        case DEL_MOVIE:
            console.log(DEL_MOVIE)
            return state.filter( item => item.title != action.film)
        default:
            return state
    }
}

function tvshows (state, action) {
    switch (action.type) {
        case ADD_TVSHOW: 
            return state;
        case DEL_TVSHOW:
            return state;
    }
}

function books (state, action) {
    switch (action.type) {
        case ADD_BOOK: 
            return state;
        case DEL_BOOK:
            return state;
    }
}

function mylifeapp (state = initialState, actions) {

    return {
        movies: movies(state.movies, actions),
        tvshows: tvshows(state.tvshows, actions),
        books: books(state.books, actions)
    }
}
// /REDUCERS

let store = createStore(mylifeapp);

module.exports = {
    store,
    movies,
    tvshows,
    books,
    addMovie,
    delMovie
}