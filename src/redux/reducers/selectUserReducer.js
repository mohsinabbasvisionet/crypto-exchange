import {actionTypes} from "../actions/actionTypes";

const initialState = {
    selectedUser: {
        "id": 2,
        "name": "John Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
};

const selectUserReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_USER:
            return {
                ...state,
                selectedUser: action.payload,
            };
        default:
            return state;
    }
};

export default selectUserReducer;