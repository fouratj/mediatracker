// var Redux = require('redux');
import Redux from 'redux';
// var ReactRedux = require('react-redux');
// var connect = ReactRedux.connect;
import { connect } from 'react-redux';
// var store = require('../store');
// var addTVShow = store.addTVShow;
// var delTVShow = store.delTVShow;
// var addSearch = store.addSearch;

import { addTVShow, delTVShow, addSearch } from '../store';
import tvshows from '../components/tvshows';
// var tvshows = require('../components/tvshows');


const getMedia = (state) => {
    return state.tvshows;
}

const getResults = (state) => {
    return state.search;
}

const mapStateToProps = (state) => {
  return {
    tvshows: getMedia(state),
    results: getResults(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTVShow: (tvshow) => {
        dispatch(addTVShow(tvshow))
    },
    addSearch: (res) => {
      let posterPath = "https://image.tmdb.org/t/p/w300";
      let results = res.map(tvshow => {
        return {
          title: tvshow.name,
          id: tvshow.id,
          poster: (() => (posterPath + tvshow.poster_path))(),
          released: (() => ( new Date(tvshow.first_air_date).getFullYear() ))()
        }
      });
      dispatch(addSearch(results))
    },
    delTVShow: (tvshow) => {
      dispatch(delTVShow(tvshow))
    }
  }
}

export let tvshowsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(tvshows)

// module.exports = tvshowsList;