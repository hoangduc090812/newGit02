import React, { Component } from "react";

export default class ItemPhone extends Component {
  render() {
    let { phone, xemCT, spThem} = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <img style={{width:"300px", height:"300px"}}src={phone.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{phone.tenSP}</h5>
            <p className="card-text">{phone.giaBan}</p>
            <button onClick={() => {
                xemCT(phone)
            }} className="btn btn-primary mr-5">
              Xem chi tiết
            </button>
            <button onClick={() => {
                spThem(phone)
            }} className="btn btn-danger" data-toggle="modal"
            data-target="#exampleModal">
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
