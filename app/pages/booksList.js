import Redux from 'redux';
import { connect } from 'react-redux';
import { addBook, addSearch, delBook } from '../store';
import { addBookToDB, delBookFromDB } from '../firebase';

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
    addBook: (res) => {
        let images = res.volumeInfo.imageLinks;

        let book = {
          id: res.id,
          title: res.volumeInfo.title,
          pages: res.volumeInfo.pageCount,
          released: res.volumeInfo.publishedDate,
          createdBy: res.volumeInfo.authors[0],
          poster: images.small || images.thumbnail,
          count: 1,
          dateAdded: Date.now()
        };

        addBookToDB(book);
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
      // dispatch(delBook(book))
      delBookFromDB(book);
    }
  }
}

export let booksList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Books)