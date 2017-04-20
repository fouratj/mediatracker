import Redux from 'redux';
import { connect } from 'react-redux';

import { addTVShow, delTVShow, addSearch, addSeasons } from '../store';
import tvshows from '../components/tvshows';

import { addTVShowToDB, delTVShowFromDB } from '../firebase.js';


const getMedia = (state) => {
    return state.tvshows;
}

const getResults = (state) => {
    return state.search;
}

const getSeasons = (state) => {
    return state.seasons;
}

const mapStateToProps = (state) => {
  return {
    tvshows: getMedia(state),
    results: getResults(state),
    seasons: getSeasons(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTVShow: (res) => {
        let tvshow = {
          count: 1,
          title: res.title,
          episodes: res.episodes,
          id: res.id,
          length: res.length,
          poster: res.poster,
          released: res.released
        };
        addTVShowToDB(tvshow);
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
    addSeasons: (res) => {
      let posterPath = "https://image.tmdb.org/t/p/w300";
      let title = res.name;
      let id = res.id;
      let runtime = res.episode_run_time[0];
      let results = res.seasons.map(season => {
        return {
          title: title,
          poster: posterPath + season.poster_path,
          released: season.season_number,
          id: season.id,
          episodes: season.episode_count,
          length: runtime
        }
      });
      dispatch(addSeasons(results));
    },
    delTVShow: (tvshow) => {
      //dispatch(delTVShow(tvshow))
      delTVShowFromDB(tvshow);
    }
  }
}

export let tvshowsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(tvshows)