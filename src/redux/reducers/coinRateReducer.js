import {actionTypes} from "../actions/actionTypes";
import coinData from '../../coinData.json';

const initialState = {
    coinRate: coinData,
};

const coinRateReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.COIN_RATE:
            return {
                ...state,
                coinRate: action.payload.coinRate,
            };
        default:
            return state;
    }
};

export default coinRateReducer;