import { GET_USERINFO } from "../action_types/userInfoAT";

export const getInfo = (dispatch, username, email) => {
  return dispatch({ type: GET_USERINFO, payload: { username, email } });
};