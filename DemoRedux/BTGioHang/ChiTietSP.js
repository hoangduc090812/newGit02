import React, { Component } from 'react'
import {connect} from 'react-redux';


class ChiTietSP extends Component {   
    render() {
        // console.log(this.props);
        let {phone} = this.props;
        console.log(phone);
        return (
        
            <div className="row mt-5">
                    <div className="col-4">
                        <h3 className="text-center">{phone.tenSP}</h3>
                        <img style={{ width: "400px" }} src={phone.hinhAnh} alt="..." />
                    </div>
                    <div className="col-8">
                        <h3 className="text-center">Thông số kỹ thuật</h3>
                        <table className="table ml-5">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{phone.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{phone.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{phone.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{phone.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{phone.ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{phone.rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}

const mapStateToProps= (rootReducer) => {
    return {
        phone: rootReducer.chiTietPhone
    }
}

const ComponentChiTietSP = connect(mapStateToProps)(ChiTietSP);
export default ComponentChiTietSP;