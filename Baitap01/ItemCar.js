import React, { Component } from "react";

export default class ItemCar extends Component {
  render() {
    let { car, xemSP } = this.props;
    return (
      <div className="col-3">
        <div className="card">
          <img src={car.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{car.name}</h5>
            <p className="card-text">{car.price}</p>
            <a
              href="#"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => {
                  xemSP(car)
              }}
            >
              Xem chi tiết
            </a>
          </div>
        </div>
      </div>
    );
  }
}
