var Redux = require('redux');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;
var createStore = Redux.createStore;
var Movies = require('./components/movies');

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
    switch (action.type) {
        case ADD_MOVIE:
            return [
                ...state, 
                {
                    title: action.film,
                    imageURL: 'https://image.tmdb.org/t/p/w300/45Y1G5FEgttPAwjTYic6czC9xCn.jpg',
                    release: '2017'
                }   
            ]
        case DEL_MOVIE:
            console.log(DEL_MOVIE)
            return state.filter( item => item.title != action.film)
        default:
            return state
    }
}

function tvshows (state = [], action) {
    console.log('tvshowState: ', state)
    switch (action.type) {
        case ADD_TVSHOW: 
            console.log('ADD_TVSHOW')
            return [
                ...state, 
                {
                    title: action.tvshow,
                    imageURL: 'https://image.tmdb.org/t/p/w300/45Y1G5FEgttPAwjTYic6czC9xCn.jpg',
                    release: '2017'
                }
            ]
        case DEL_TVSHOW:
            return state;
        default:
            return state;
    }
}

function books (state = [], action) {
    switch (action.type) {
        case ADD_BOOK: 
        return [
            ...state, {
                title: action.book,
                imageURL: 'https://image.tmdb.org/t/p/w300/45Y1G5FEgttPAwjTYic6czC9xCn.jpg',
                release: '2017'
            }
        ]
            return state;
        case DEL_BOOK:
            return state;
        default:
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
    delMovie,
    addTVShow,
    delTVShow,
    addBook,
    delBook
}