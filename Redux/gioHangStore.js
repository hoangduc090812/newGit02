

const phoneStore= {
    phoneDetail : {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg"
    },
    gioHang :[]
}

export const gioHangStore = (state= phoneStore.gioHang, action ) => {
    // console.log(action);
    switch (action.type){
        case "THEM_SAN_PHAM":{
            let spGioHang= {...action.sp, soLuong :1};
            let gioHangCapNhat = [...state];

            let sptk = gioHangCapNhat.find((item) => {
                return spGioHang.maSP === item.maSP;
            })
            if(sptk){
                sptk.soLuong += 1;
            }else{
                gioHangCapNhat.push(spGioHang);
            }
            return gioHangCapNhat;
        }
        case "XOA_SAN_PHAM":{
            let gioHangCapNhat = [...state];
            return gioHangCapNhat.filter((item) => {
                return item.maSP !== action.sp;
            })
        }
        case "TANG_SAN_PHAM":{
            let gioHangCapNhat = [...state];
            let sptk = gioHangCapNhat.find((sp) => {
                return sp.maSP === action.sp;
            })
            if(sptk){
                sptk.soLuong += action.soLuong;
                if(sptk.soLuong < 1){
                    alert("Số lượng không hợp lệ !!!");
                    sptk.soLuong -= -1;
                }
            }
            return gioHangCapNhat;
        }
        // case "GIAM_SAN_PHAM":{
        //     let gioHangCapNhat = [...state];
        //     let sptk = gioHangCapNhat.find((sp) => {
        //         return sp.maSP === action.sp;
        //     })
        //     if(sptk){
        //         sptk.soLuong -= 1;
        //         if(sptk.soLuong < 1){
        //             alert("Số lượng không hợp lệ !!!");
        //             sptk.soLuong -= -1;
        //         }
        //     }
        //     return gioHangCapNhat;
        // }
        default: return state;
    }
   
}
