import Redux from 'redux';
import { connect } from 'react-redux';
import { addMovie, delMovie, addSearch } from '../store';
import Movies from '../components/movies';
import {addMovieToDB} from '../firebase.js';

const getMedia = (state) => {
    return state.movies;
}

const getResults = (state) => {
  return state.search;
}

const mapStateToProps = (state, ownProps) => {
  
  return {
    movies: getMedia(state),
    results: getResults(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addMovie: (movie) => {
        //dispatch(addMovie(movie))
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
      dispatch(delMovie(movie))
    }
  }
}

export let moviesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies)