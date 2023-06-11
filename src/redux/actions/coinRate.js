import {actionTypes} from "./actionTypes";

export const initCoinRate = (coinRate) => {
  return {
      type: actionTypes.COIN_RATE,
      payload: {coinRate},
  }
};