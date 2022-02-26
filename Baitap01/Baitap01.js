import React, { Component } from "react";
import ListCars from "./ListCars";
import Modal from "./Modal";

export default class Baitap01 extends Component {
  products = [
    {
      id: 1,
      name: "black car",
      img: "./images/products/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./images/products/red-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./images/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "Steel car",
      img: "./images/products/steel-car.jpg",
      price: 4000,
    },
  ];
  state= {
      cars:{
        id: 4,
        name: "red car",
        img: "./images/products/red-car.jpg",
        price: 2000,
      }
  }
  xemChiTiet = (sp) => {
      this.setState({
          cars: sp
      })
  }
  
  render() {
    return (
      <div className="container">
        <ListCars arrProduct={this.products} xemSP={this.xemChiTiet}/>
        <Modal carState={this.state.cars}/>
      </div>
    );
  }
}
