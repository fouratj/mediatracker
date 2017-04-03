const ADD_MOVIE = "ADD_MOVIE";
const DEL_MOVIE = "DEL_MOVIE";
const ADD_TVSHOW = "ADD_TVSHOW";
const DEL_TVSHOW = "DEL_TVSHOW";
const ADD_BOOK = "ADD_BOOK";
const DEL_BOOK = "DEL_BOOK";

export function movies (state, action) {
    switch (action.type) {
        case ADD_MOVIE: 
            return state;
        case DEL_MOVIE:
            return state;
    }
}

export function tvshows (state, action) {
    switch (action.type) {
        case ADD_TVSHOW: 
            return state;
        case DEL_TVSHOW:
            return state;
    }
}

export function books (state, action) {
    switch (action.type) {
        case ADD_BOOK: 
            return state;
        case DEL_BOOK:
            return state;
    }
}