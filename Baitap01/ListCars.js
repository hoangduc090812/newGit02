import React, { Component } from "react";
import ItemCar from "./ItemCar";

export default class ListCars extends Component {
  displayCars = () => {
    let {arrProduct, xemSP } = this.props;
    return arrProduct.map((car, index) => {
      return <ItemCar xemSP={xemSP} car={car} key={index} />;
    });
  };

  render() {
    return <div className="row">{this.displayCars()}</div>;
  }
}
