import React, { Component } from "react";

export default class CartPractice extends Component {
    addOnCart = () => {
        let{addPhone, sLuongTG, xoaSP} = this.props;
        return addPhone.map((onCart, index) => {
            return <tr>
            <td>{onCart.maSP}</td>
            <td>
              <img
                style={{ width: "100px" }}
                src={onCart.hinhAnh}
                alt="..."
              />
            </td>
            <td>{onCart.tenSP}</td>
            <td>
              <button onClick={() => {
                  sLuongTG(onCart.maSP, 1)
              }} className="btn btn-info">+</button>
              <span>{onCart.soLuong}</span>
              <button onClick={() => {
                  sLuongTG(onCart.maSP,-1)
              }}className="btn btn-info">-</button>
            </td>
            <td>{onCart.giaBan.toLocaleString()}</td>
            <td>{(onCart.giaBan*onCart.soLuong).toLocaleString()}</td>
            <td>
              <button onClick={() => {
                  xoaSP(onCart.maSP)
              }} className="btn btn-danger">Xóa</button>
            </td>
          </tr>
        })
    }
    
  render() {
    
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Mã sản phẩm</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Đơn giá</th>
                      <th scope="col">Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.addOnCart()}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
