import Redux from 'redux';
import { connect } from 'react-redux';
import Title from '../components/title';
import { updateTitle } from '../store';

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
    updateTitle: (title) => {
      dispatch(updateTitle(title));
    }
  }
}

export let titleWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Title)