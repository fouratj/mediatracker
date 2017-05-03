import Redux from 'redux';
import { connect } from 'react-redux';
import Chart from '../components/chart';

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

export let chartWrapper = connect(
    mapStateToProps,
    null
)(Chart)