import Redux from 'redux';
import { connect } from 'react-redux';
import { addMovie, delMovie, addSearch, updateMoviesIndex } from '../store';
import Movies from '../components/movies';
import { addMovieToDB, delMovieFromDB } from '../firebase.js';

const getMedia = (state) => {
    return state.movies;
}

const getResults = (state) => {
  return state.search;
}

const getIndex = (state) => {
  return state.indices.movies;
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: getMedia(state),
    results: getResults(state),
    index: getIndex(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addMovie: (res) => {
        let posterPath = "https://image.tmdb.org/t/p/w300";

        let movie = {
            id: res.id,
            poster: posterPath + res.poster_path,
            released: res.release_date,
            title: res.title,
            runtime: res.runtime,
            synopsis: res.overview,
            count: 1,
            createdBy: '',
            dateAdded: Date.now()
        };

        addMovieToDB(movie);
    },
    addSearch: (res) => {
      let posterPath = "https://image.tmdb.org/t/p/w300";
      let results = res.map(movie => {
        return {
          title: movie.title,
          id: movie.id,
          released: (() => (new Date(movie.release_date).getFullYear()))(),
          poster: posterPath + movie.poster_path
        }
      });
      dispatch(addSearch(results));
    },
    delMovie: (movie) => {
      delMovieFromDB(movie);
    },
    updateIndex: (newIndex) => {
      dispatch(updateMoviesIndex(newIndex))
    }
  }
}

export let moviesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies)