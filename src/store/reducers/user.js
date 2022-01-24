import { SET_USERS } from "../constants/user";

export const initialState = [];

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    default:
      return state;
  }
}

export default userReducer;
