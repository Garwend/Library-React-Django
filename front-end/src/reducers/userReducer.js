import { SET_USER } from "../actions/userActions";

const defaultState = {
    userData: {}
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                userData: action.payload,
            }
        default:
            return state;
    }
}

export default userReducer;