import React, { Component } from "react";
import Cart from "./Cart";
import ListPhone from "./ListPhone";
import Modal from "./Modal";

export default class Baitap02 extends Component {
  dataPhone = [  
      { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
      { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
      { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" } 
  ];
  state= {
      phoneState: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
      carts:[]
  }
  chiTietPhone = (sp) => {
      this.setState({
          phoneState: sp     
      })
  }
  
  themSanPham = (sp) => {
    let{carts} = this.state;
    // console.log(sp);
    let spGioHang ={...sp, "soLuong": 1};

    let gioHangUpdate = [...carts];

    let spTK = gioHangUpdate.find((spTL) => {
      return spGioHang.maSP === spTL.maSP;
    })
    // console.log(spTK);
    if(spTK){
      spTK.soLuong += 1;
    }
    else{
      gioHangUpdate.push(spGioHang);
    }

    this.setState({
      carts: gioHangUpdate
    })
  }
  xoaSP = (sp) => {
    let{carts}= this.state;
    let spXoa = carts.findIndex((spIndex) => {
      return sp === spIndex.maSP;
    })
    if(spXoa !== -1){
      carts.splice(spXoa, 1);
    }

    this.setState({
      carts: carts
    })
  }
  
  tangGiamSL = (sl, ts) => {
    // console.log(sl);
    let{carts} = this.state;
    let spTG= carts.find((sp) => {
      return sp.maSP === sl;
    })
    if(spTG){
      spTG.soLuong += ts;
      if(spTG.soLuong < 1){
        alert("Số lượng không hợp lệ...");
        spTG.soLuong -= ts;
      }
    }
    this.setState({
      carts: carts
    })
  }
  tongSL = () => {
    let{carts} = this.state;
    let tong = carts.reduce((sum, item, index) => {
      return sum += item.soLuong;
    },0)
    return tong;
  }
  

  render() {
    return (
      <div className="container">
        <div className="row justify-content-end">
            <div className= "col-4">
               <p style={{background:"green", color:"white"}}>Giỏ hàng ({this.tongSL()})</p>
            </div>
        </div>
        <ListPhone themSP={this.themSanPham} chiTiet={this.chiTietPhone} phones={this.dataPhone}/>
        <Modal phoneModal={this.state.phoneState}/>
        <Cart sLTG={this.tangGiamSL} deleteSP={this.xoaSP} carts={this.state.carts}/>
      </div>
    );
  }
}
