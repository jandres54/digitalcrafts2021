import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../actions/userNameAct";
import { getEmail } from "../actions/emailAct";
import { getUsersInfo } from "../actions/infoAct";

export default function UserLogin() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userName);
  const email = useSelector((state) => state.email);
  return (
    <div>
      <h1>Hello! Welcome to my App!</h1>
      <h3>Input your desired UserName and E-mail below!</h3>
      <form type="submit">
        <input type="text" placeholder="Name"  onChange={(e) => getUserName(dispatch, e.target.value)}/>
        <input type="text" placeholder="Email" onChange={(e) => getEmail(dispatch, e.target.value)}/>
        <button onClick={(e) => getUsersInfo(dispatch, userName, email )}>Sign Up</button>
      </form>
    </div>
  );
}
