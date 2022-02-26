import React, { Component } from 'react'

export default class ItemPractice extends Component {
    render() {
        let{phone, xemChiTiet, themGioHang} = this.props;
        return (
            <div className="col-4">
            <div className="card">
              <img
                style={{ width: "250px", height:'300px', textAlign:'center' }}
                src={phone.hinhAnh}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{phone.tenSP}</h5>
                <p className="card-text">{phone.giaBan.toLocaleString()}</p>
                <div className="row">
                  <a onClick={() => {
                      xemChiTiet(phone)
                  }} className="btn btn-primary">Xem chi tiết</a>
                  <a onClick={() => {
                      themGioHang(phone)
                  }}
                    className="btn btn-danger ml-5"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Thêm giỏ hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
