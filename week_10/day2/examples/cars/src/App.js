import "../src/App.css";


import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      cars: [
        {
          make: "Mustang",
        },
        {
          model: "Shelby GT 350R",
        },
      ],




  render() {
    return (
      <div>
         <h1>Cars and Coffee</h1>
      </div>
    )
  }
};