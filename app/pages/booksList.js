var Redux = require('redux');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;
var store = require('../store');
var addBook = store.addBook;

var Books = require('./books');

const getMedia = (state) => {
    return state.books;
}

const mapStateToProps = (state) => {
  return {
    books: getMedia(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => {
        console.log('mapDispatch')
        console.log(book)
        dispatch(addBook(book))
    }
  }
}

const booksList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Books)

module.exports = booksList;