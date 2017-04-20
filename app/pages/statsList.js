import Redux from 'redux';
import { connect } from 'react-redux';

import { Stats } from './stats';

const getStats = (state) => {
    return state.stats;
}


const mapStateToProps = (state) => {
  return {
    stats: getStats(state)
  }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}


export let statsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stats)