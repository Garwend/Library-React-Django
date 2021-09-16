import { SET_BOOKS } from "../actions/bookActions";

const defaultState = {
    isBooksSet: false,
    books: []
}

const bookReducer = (state = defaultState, action) => {
    switch (action.type) {
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