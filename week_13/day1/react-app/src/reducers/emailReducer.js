import { GET_EMAIL } from "../action_types/emailAT";

const initialState = "";

const email = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMAIL:
      return (state = action.payload);
    default:
      return state;
  }
};

export default email;