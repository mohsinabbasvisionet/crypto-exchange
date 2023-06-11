import {actionTypes} from "../actions/actionTypes";
//import usersData from '../../usersData.json';

const initialState = {
    users: {
        "id": "a",
    },
};

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.USERS:
            return {
                ...state,
                users: action.payload.users,
            };
        default:
            return state;
    }
};

export default usersReducer;