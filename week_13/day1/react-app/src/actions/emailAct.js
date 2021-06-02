import { GET_EMAIL } from "../action_types/emailAT";

export const getEmail = (dispatch, inputValue) => {
  return dispatch({ type: GET_EMAIL, payload: inputValue });
};