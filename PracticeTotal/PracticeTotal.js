import React, { Component } from "react";
import CartPractice from "./CartPractice";
import ListPractice from "./ListPractice";
import ModalPractice from "./ModalPractice";

export default class PracticeTotal extends Component {
  products = [
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

  state={
    detailProduct: {
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
    addProduct:[]
    }
  xemCT = (phone) => {
    this.setState({
      detailProduct:phone
    })
  }

  themGioHang = (cart) => {
    // console.log(cart);
    let{addProduct} = this.state;
    let spGioHang= {...cart, soLuong :1};
    

    let gioHangUpdate=[...addProduct];
    
    let spTrungLap= gioHangUpdate.find((spTL) => {
      return spTL.maSP === cart.maSP;
    })
    if(spTrungLap){
      // console.log(spTrungLap);
      spTrungLap.soLuong += 1;
    }else{
      gioHangUpdate.push(spGioHang);
      console.log(gioHangUpdate);
    }
    this.setState({
      addProduct: gioHangUpdate
    })
  }

  sLuongTG = (sl, soLuong) => {
    // console.log(sl);
    let{addProduct} = this.state;
    let spTangGiam= addProduct.find((sltg) => {
      return sltg.maSP === sl;
    })
    if(spTangGiam){
      spTangGiam.soLuong += soLuong;
      if(spTangGiam.soLuong < 1){
        alert("Số lượng không hợp lệ");
        spTangGiam.soLuong -= soLuong;
      }
    }
    this.setState({
      addProduct: addProduct
    })
  }
  
  xoaSP = (sp) => {
    let{addProduct} = this.state;
    let deleteSP = addProduct.findIndex((spx) => {
      return spx.maSP === sp; 
    })
    if(deleteSP !== -1){
      addProduct.splice(deleteSP, 1)
    }
    this.setState({
      addProduct: addProduct
    })
  }
  
  tongSP = () => {
    let{addProduct} = this.state;
    let sumSP = addProduct.reduce((sum, item, index) => {
      return sum += item.soLuong;
    },0)

    return sumSP;
  }
   
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h3 style={{ color: "green" }}>Bài tập giỏ hàng</h3>
        </div>
        <div className="row justify-content-end">
          <p style={{ color: "red" }}>Giỏ hàng ({this.tongSP()})</p>
        </div>

        <ListPractice themGioHang={this.themGioHang} myProducts={this.products} seeDetail={this.xemCT}/>
        <ModalPractice detailPhone={this.state.detailProduct} />
        <CartPractice xoaSP={this.xoaSP} sLuongTG={this.sLuongTG} addPhone={this.state.addProduct}/>
      </div>
    );
  }
}
