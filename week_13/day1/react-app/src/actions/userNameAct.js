import { GET_USERNAME} from "../action_types/usernameAT";

export const getUserName = (dispatch, inputValue) => {
  return dispatch({ type: GET_USERNAME, payload: inputValue });
};