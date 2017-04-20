import Redux from 'redux';
import { connect } from 'react-redux';

import { updateTitle } from '../store';
import NavBar from '../components/navbar';

const getTitle = (state) => {
    return state.title;
}

const mapStateToProps = (state) => {
  return {
    title: getTitle(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export let NavWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)