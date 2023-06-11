import {actionTypes} from "./actionTypes";

export const currentUserAction = (currentUser, users) => ({
    type: actionTypes.CURRENT_USER,
    payload: { currentUser, users },
});

export const transferCoinsAction = (send_to, coin, coin_count) => {
  return {
      type: actionTypes.TRANSFER_COINS,
      payload: { send_to, coin, coin_count }
  }
};

