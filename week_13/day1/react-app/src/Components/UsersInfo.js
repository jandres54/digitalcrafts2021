import React from "react";
import { useSelector } from "react-redux";

export default function UsersInfo() {
  const info = useSelector((state) => state.info);
  return (
    <div>
      <h1>User Information</h1>
      <p>{info.userName}</p>
      <p>{info.email}</p>
    </div>
  );
}
