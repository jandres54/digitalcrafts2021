import "./App.css";
// import ClassBased from "./components/ClassBased";
import React, { useState } from "react";
import { AppStyle } from "./Components/StyledComponents/AppStyles";
import SignUpForm from "./Components/SignUpForm";
import UserDetails from "./Components/UserDetails";

function App() {
  const [firstName, setFirstName] = useState("Joe");
  return (
    <AppStyle className="App">
      {/* <ClassBased /> */}
      <SignUpForm firstName={firstName} setFirstName={setFirstName} />
      <UserDetails />
    </AppStyle>
  );
}

export default App;

