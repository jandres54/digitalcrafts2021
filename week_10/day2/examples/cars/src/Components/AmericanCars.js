import React, { Component } from 'react'

export default class AmericanCars extends Component {
    render() {
        const {make, model}= this.prop.american;
        console.log(this.props);
        return (
            <div>
                <p>{make, model}:</p>
            </div>
        );
    }
}
