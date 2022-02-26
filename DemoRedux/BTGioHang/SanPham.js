import React, { Component } from "react";
import {connect} from 'react-redux';


class SanPham extends Component {
  render() {
    let {phone} = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <img style={{width:"300px", height:"350px"}} src={phone.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{phone.tenSP}</h5>
            <p className="card-text">{phone.giaBan}</p>
            <button onClick={() => {
                const action={
                    type: "CHI_TIET",
                    sp: phone
                }
                this.props.dispatch(action);
            }} className="btn btn-primary">
              Xem chi tiết
            </button>
            <button onClick={() => {
                const action= {
                    type: "THEM_SAN_PHAM",
                    sp: phone
                }
                this.props.dispatch(action);
            }}
              className="btn btn-danger ml-5"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(SanPham);