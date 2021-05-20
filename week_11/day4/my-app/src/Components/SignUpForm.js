import React, { useState } from "react";
import {
  SignUpButton,
  SignUpFormInput,
  SignUpFormDiv,
} from "./StyledComponents/SignUpFormStyles";

const SignUpForm = (props) => {
  return (
    <div className="sign-up-form-container">
      <h1>Create Account</h1>
      <SignUpFormDiv action="">
        <SignUpFormInput
          onChange={(e) => props.setFirstName(e.target.value)}
          type="text"
          value={props.firstName}
          placeholder="First Name"
        />
        <SignUpFormInput type="text" placeholder="Last Name" />
        <SignUpFormInput type="email" placeholder="Email" />
        <SignUpFormInput type="password" placeholder="Password" />
        <SignUpFormInput type="password" placeholder="Re-Type Password" />
        <SignUpButton>Sign Up</SignUpButton>
      </SignUpFormDiv>
    </div>
  );
};
export default SignUpForm;