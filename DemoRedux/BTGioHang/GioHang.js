import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
    renderGioHang = () => {
        let { ghPhone } = this.props;
        return ghPhone.map((phone, index) => {
            return (
                <tr>
                    <td>{phone.maSP}</td>
                    <td>
                        <img style={{ width: "100px" }} src={phone.hinhAnh} alt="..." />
                    </td>
                    <td>{phone.tenSP}</td>
                    <td>
                        <button onClick={() => {
                            const action={
                                type: "TANG_SAN_PHAM",
                                sp : phone.maSP,
                                soLuong : 1
                            }
                            this.props.dispatch(action);
                        }} className="btn btn-info">+</button>
                        <span>{phone.soLuong}</span>
                        <button onClick={() => {
                            const action={
                                type: "TANG_SAN_PHAM",
                                sp : phone.maSP,
                                soLuong : -1
                            }
                            this.props.dispatch(action);
                        }} className="btn btn-info">-</button>
                    </td>
                    <td>{phone.giaBan}</td>
                    <td>{(phone.giaBan*phone.soLuong)}</td>
                    <td>
                        <button onClick={() => {
                            const action={
                                type:"XOA_SAN_PHAM",
                                sp: phone.maSP
                            }
                            this.props.dispatch(action);
                        }} className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            );
        });
    };

    render() {
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
                                    {this.renderGioHang()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        ghPhone: rootReducer.gioHangStore,
    };
};

const ComponentGioHang = connect(mapStateToProps)(GioHang);
export default ComponentGioHang;
