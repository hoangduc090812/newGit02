import React, { Component } from "react";
import ChiTietSP from "./ChiTietSP";
import DSSanPham from "./DSSanPham";
import GioHang from "./GioHang";
import {connect} from "react-redux";

class BTGioHang extends Component {
    dataPhone = [
        {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: "AMOLED, 6.2, Full HD+",
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./img/vsphone.jpg",
        },
        {
            maSP: 2,
            tenSP: "Meizu 16Xs",
            manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
            heDieuHanh: "Android 9.0 (Pie); Flyme",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 7600000,
            hinhAnh: "./img/meizuphone.jpg",
        },
        {
            maSP: 3,
            tenSP: "Iphone XS Max",
            manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
            heDieuHanh: "iOS 12",
            cameraSau: "Chính 12 MP & Phụ 12 MP",
            cameraTruoc: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 27000000,
            hinhAnh: "./img/applephone.jpg",
        },
    ];

    tongSL = () => {
        let {ghTong} = this.props;
        return ghTong.reduce((sum, item, index) => {
            return sum += item.soLuong;
        },0);
    }
    
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h3 style={{ color: "green" }} className="font-weight-bold">
                        Bài tập giỏ hàng
                    </h3>
                </div>
                <div className="row justify-content-end">
                    <h5 className="text-danger">Giỏ hàng ({this.tongSL()})</h5>
                </div>
                <DSSanPham dataPhone={this.dataPhone}/>
                <ChiTietSP/>
                <GioHang/>
                
            </div>
    );
    }
}
const mapToStateProps = (rootReducer) => {
    return {
        ghTong : rootReducer.gioHangStore
    }
}

const ComponentBTGioHang = connect(mapToStateProps)(BTGioHang);
export default ComponentBTGioHang;