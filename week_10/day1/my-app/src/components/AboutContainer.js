import React, { Component } from "react";
import "../App.css";
import AboutMe from "./AboutMe";
class AboutContainer extends Component {
  render() {
    return (
      <div className="AboutContainer">
        <p>About Container</p>
        <AboutMe />
      </div>
    );
  }
}

export default AboutContainer;