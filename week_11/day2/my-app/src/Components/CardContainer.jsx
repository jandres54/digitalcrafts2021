import React, { Component } from "react";
import Card from "./Card";
import "./cardContainer.css";

class CardContainer extends Component {
  state = {
    searchCriteria: "",
    carList: [],
    carName: "",
    hp: "",
  };

 componentDidMount() {
    this.setState({
      carList: this.props.carData[0].car,
    });
  }

  searchCriteria = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState({
      searchCriteria: search,
    });
  };

  sendCarToData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  onSubmit = (event, filteredData) => {
    event.preventDefault();
    const newCar = {
      name: this.state.carName,
      hp: this.state.hp,
      
    };
    
    const newCarList = [newCar,...this.state.carList]
    this.setState({
      carList: newCarList,
    });
  };

  render() {
    const {carList} = this.state
    const filteredData = carList.filter((car) =>
      car.name.includes(this.state.searchCriteria)
    )
      ? carList.filter((car) =>
          car.name.includes(this.state.searchCriteria)
        )
      : carList

    return (
      <div className="main-card-container">
        <div>
          <input
            name="carName"
            className="search-field"
            onChange={(e) => this.searchCriteria(e)}
            type="text"
            placeholder="Search for a car"
          />
        </div>
        {/* form */}
        <div>
          
          <form onSubmit={(e) => this.onSubmit(e, filteredData)}>
            <input
              name="carName"
              className="create-field"
              type="text"
              placeholder="Enter a Name"
              value={this.state.carName}
              onChange={(e) => this.sendCarToData(e)}
            />
            <input
              name="hp"
              className="create-field"
              type="text"
              placeholder="Enter a HP"
              value={this.state.hp}
              onChange={(e) => this.sendCarToData(e)}
            />
            <input
              name="frontUrl"
              className="create-field"
              type="text"
              placeholder="Enter front URL"
              value={this.state.frontUrl}
              onChange={(e) => this.sendCarToData(e)}
            />
            <input
              name="backUrl"
              className="create-field"
              type="text"
              placeholder="Enter back URL"
              value={this.state.backUrl}
              onChange={(e) => this.sendCarToData(e)}
            />
            <input className="create-field" type="submit" value="Submit" />
          </form>
        </div>
        <div className="card-container">
          {filteredData.map((singleCar, index) => (
            <Card key={singleCar.name} car={singleCar} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardContainer;