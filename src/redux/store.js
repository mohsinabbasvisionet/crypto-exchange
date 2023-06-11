import {configureStore} from "@reduxjs/toolkit";
import selectUserReducer from "./reducers/selectUserReducer";
import coinRateReducer from "./reducers/coinRateReducer";
import usersReducer from "./reducers/usersReducer";
import transferCoinsReducer from "./reducers/transferCoinsReducer";

const store = configureStore({
    reducer: {
        selectUserReducer: selectUserReducer,
        coinRateReducer: coinRateReducer,
        usersReducer: usersReducer,
        transferCoinsReducer: transferCoinsReducer,
    }
});


export default store;