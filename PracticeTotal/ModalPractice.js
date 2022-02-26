import React, { Component } from "react";

export default class ModalPractice extends Component {
  render() {
    let {detailPhone}=this.props;
    return (
      <div className="row mt-5">
        <div className="col-4">
          <h3 className="text-center">{detailPhone.tenSP}</h3>
          <img
            style={{ width: "300px" }}
            src={detailPhone.hinhAnh}
            alt="..."
          />
        </div>
        <div className="col-8">
          <h3 className="text-center">Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{detailPhone.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{detailPhone.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{detailPhone.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{detailPhone.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{detailPhone.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{detailPhone.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
