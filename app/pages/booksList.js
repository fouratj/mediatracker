// var Redux = require('redux');
import Redux from 'redux';
// var ReactRedux = require('react-redux');
// var connect = ReactRedux.connect;
import { connect } from 'react-redux';
// var store = require('../store');
import { addBook, addSearch, delBook } from '../store';
// var addBook = store.addBook;
// var addSearch = store.addSearch;
// var delBook = store.delBook;

// var Books = require('../components/books');
import Books from '../components/books';

const getMedia = (state) => {
    return state.books;
}

const getResults = (state) => {
  return state.search;
}

const mapStateToProps = (state) => {
  return {
    books: getMedia(state),
    results: getResults(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => {
        dispatch(addBook(book))
    },
    addSearch: (res) => {
      let results = res.map( book => {
        return {
          title: book.volumeInfo.title,
          id: book.id,
          released: (() => (new Date(book.volumeInfo.publishedDate).getFullYear() ))(),
          poster: (() => {
            if (book.volumeInfo.imageLinks) {
              return book.volumeInfo.imageLinks.smallThumbnail;
            } else {
              return '';
            }
          })()
        }
      });

      dispatch(addSearch(results))
    },
    delBook: (book) => {
      dispatch(delBook(book))
    }
  }
}

export let booksList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Books)

// module.exports = booksList;