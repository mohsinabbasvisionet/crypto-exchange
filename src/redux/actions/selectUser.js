import {actionTypes} from "./actionTypes";

export const selectUser = (user) => {
  return {
      type: actionTypes.SELECT_USER,
      payload: user,
  }
};