import "../src/App.css";
import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state ={
      counter: 0,
      title: "State Management",
      itIsRainingInHouston: true,
    };


  }

  render() {
    const {counter, title, itIsRainingInHouston}= this.state;

    return (
      <>
        <h1>State Management</h1>
        <p>{title}</p>
        <p>
          is it raining in Houston? {" "}
          {itIsRainingInHouston ?(
            <div>
              <p>yup it's raining ⛈</p>
            </div>
          ) : (
            <div>
              <p>Nope, no raining here. 😎 </p>
            </div>
          )}
        </p>

        <input type="text" onBlur={()=> console.log("howdy carlo")}/>
        <p>Counter {counter}</p>
        {/* <button
          onClick={()=>
            this.setState({
              counter: this.state.counter + 1
            })
          
          
          } */}
      </>
    );
  }
}




