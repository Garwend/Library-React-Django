import { SET_USER, REMOVE_BOOK } from "../actions/userActions";

const defaultState = {
    userData: {}
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                userData: action.payload,
            }
        case REMOVE_BOOK:
            return {
                userData: {
                    ...state.userData,
                    borrowed_books: state.userData.borrowed_books.filter(book => book.id !== action.payload)
                }
            }    
        default:
            return state;
    }
}

export default userReducer;