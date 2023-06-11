import {actionTypes} from "./actionTypes";

export const initUsers = (users) => {
  return {
      type: actionTypes.USERS,
      payload: {users},
  }
};