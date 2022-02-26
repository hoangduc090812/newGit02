import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { phoneModal } = this.props;
    return (
      <div className="row pt-5">
        <div className="col-4">
          <h3>{phoneModal.tenSP}</h3>
          <img className="img-fluid" src={phoneModal.hinhAnh} alt="..." />
        </div>
        <div className="col-8">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{phoneModal.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{phoneModal.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{phoneModal.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{phoneModal.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{phoneModal.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{phoneModal.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
