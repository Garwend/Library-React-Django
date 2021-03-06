import { ADD_BOOK,SET_BOOKS, DELETE_BOOK } from "../actions/bookActions";

const defaultState = {
    isBooksSet: false,
    books: []
}

const bookReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                isBooksSet: state.isBooksSet,
                books: [...state.books, action.payload]
            }
        case DELETE_BOOK:
            return {
                isBooksSet:true,
                books: state.books.filter(book => book.id !== action.payload),
            }
        case SET_BOOKS:
            return {
                isBooksSet: true,
                books: action.payload,
            }
    
        default:
            return state;
    }
}

export default bookReducer;