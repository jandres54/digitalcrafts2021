import { GET_USERINFO } from "../action_types/userInfoAT";

const initialState = {};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERINFO:
      return (state = action.payload);
    default:
      return state;
  }
};

export default userInfo;