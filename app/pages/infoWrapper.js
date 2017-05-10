import React from 'react';
import { connect } from 'react-redux';
import Info from '../components/info';

const getMovies = (state) => {
    return state.movies;
}

const getTVShows = (state) => {
    return state.tvshows;
}

const getBooks = (state) => {
    return state.books;
}

const mapStateToProps = (state) => {
    return {
        movies: getMovies(state),
        tvshows: getTVShows(state),
        books: getBooks (state)
    }
}

export let infoWrapper = connect(
    mapStateToProps,
    null
)(Info)