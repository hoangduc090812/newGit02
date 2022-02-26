import React, { Component } from "react";

export default class Cart extends Component {
    renderGioHang = () => {
        let { carts, deleteSP, sLTG } = this.props;
        return carts.map((cart, index) => {
            return <tr key={index}>
            <th scope="row">{cart.maSP}</th>
            <td>
                <img style={{width:"100px"}}className="img-fluid" src={cart.hinhAnh} alt="..." />
            </td>
            <td>{cart.tenSP}</td>
            <td>
                <button className="btn btn-info" onClick={() => {
                    sLTG(cart.maSP, 1)
                }}>+</button>
                <span>{cart.soLuong}</span>
                <button className="btn btn-info" onClick={() => {
                    sLTG(cart.maSP, -1)
                }}>-</button>
            </td>
            <td>{cart.giaBan}</td>
            <td>{(cart.giaBan*cart.soLuong).toLocaleString('de-De')}</td>
            <td>
                <button onClick={() => {
                    deleteSP(cart.maSP)
                }} className="btn btn-danger">Xóa</button>
            </td>
          </tr>
        })
    }
    
  render() {
    
    // console.log(carts);
    return (
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
                Giỏ Hàng
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
                  {this.renderGioHang()}
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
    );
  }
}
