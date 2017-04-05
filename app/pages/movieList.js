var Redux = require('redux');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;
var store = require('../store');
var addMovie = store.addMovie;

var Movies = require('./movies');

const getMedia = (state) => {
    return state.movies;
}

const mapStateToProps = (state) => {
  return {
    movies: getMedia(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (movie) => {
        console.log('mapDispatch')
        console.log(movie)
        dispatch(addMovie(movie))
    }
  }
}

const moviesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies)

module.exports = moviesList;