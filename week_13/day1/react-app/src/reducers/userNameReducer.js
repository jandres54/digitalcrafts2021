import { GET_USERNAME } from "../action_types/usernameAT";

const initialState = "";

const userName = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERNAME:
      return (state = action.payload);
    default:
      return state;
  }
};

export default userName;