var Redux = require('redux');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;
var Movies = require('pages/movies');

const getMedia = (state) => {
    return state.movies;
}

const mapStateToProps = (state) => {
  return {
    movies: getMedia(state)
  }
}

const Movies = connect(
    mapStateToProps
)(Movies)

module.exports = moviesList;