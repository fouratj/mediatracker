var Redux = require('redux');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;
var store = require('../store');
var addTVShow = store.addTVShow;

var tvshows = require('./tvshows');

const getMedia = (state) => {
    return state.tvshows;
}

const mapStateToProps = (state) => {
    console.log(state)
  return {
    tvshows: getMedia(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTVShow: (tvshow) => {
        console.log('mapDispatch')
        console.log(tvshow)
        dispatch(addTVShow(tvshow))
    }
  }
}

const tvshowsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(tvshows)

module.exports = tvshowsList;