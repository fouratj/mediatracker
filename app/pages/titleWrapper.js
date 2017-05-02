import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/title';

const getTitle = (state) => {
    return state.title;
}

const mapStateToProps = (state) => {
  return {
    title: getTitle(state)
  }
}

export let titleWrapper = connect(
    mapStateToProps,
    null
)(Title)