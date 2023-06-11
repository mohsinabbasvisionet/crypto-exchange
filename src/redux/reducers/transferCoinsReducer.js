import {actionTypes} from "../actions/actionTypes";

const initialState = {
    users: null,
    currentUser: null
};

const transferCoinsReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.CURRENT_USER:
            return {
                ...state,
                users: action.payload.users,
                currentUser: action.payload.currentUser,
            };
        case actionTypes.TRANSFER_COINS:
            const send_to = action.payload.send_to;
            const coin = action.payload.coin;
            const coin_count = parseInt(action.payload.coin_count);

            const allUsers = [...state.users];
            const currentUser = { ...state.currentUser };
            const updatedAllUsers = [...allUsers];
debugger
            //Update sender user information
            const senderUserIndex = allUsers.findIndex(user => user.email === currentUser.email);
            const getUpdatedSenderUser = (user, coinName, coinsToSubtract) => {
                const coinCount = user.coins[coinName];
                const updatedCount = coinCount !== undefined ? coinCount - coinsToSubtract : 0;

                if (updatedCount < 0) {
                    user.coins[coinName] = 0;
                } else {
                    user.coins[coinName] = updatedCount;
                }
                return user;
            };

            if (senderUserIndex !== -1) {
                const senderUser = { ...updatedAllUsers[senderUserIndex] }
                const updatedSenderUser = getUpdatedSenderUser(senderUser, coin, coin_count);

                //All user state updated here
                updatedAllUsers[senderUserIndex] = updatedSenderUser;
            }

            //Update receiver user information
            const receiverUserIndex = allUsers.findIndex(user => user.email === send_to);
            const getUpdatedReceiverUser = (user, coinName, coinsToAdd) => {
                const coinCount = user.coins[coinName];
                const updatedCount = coinCount !== undefined ? coinCount + coinsToAdd : 0;

                if (updatedCount > 0) {
                    user.coins[coinName] = updatedCount;
                } else {
                    user.coins[coinName] = coinsToAdd;
                }
                return user;
            };

            if (receiverUserIndex !== -1) {
                const receiverUser = {...updatedAllUsers[receiverUserIndex]};
                const updatedReceiverUser = getUpdatedReceiverUser(receiverUser, coin, coin_count);

                //All user state updated here after receiving coin by user
                updatedAllUsers[senderUserIndex] = updatedReceiverUser;
            }

            return {
                ...state,
                users: updatedAllUsers,
                currentUser: currentUser,
            };
        default:
            return state;
    }
};

export default transferCoinsReducer;