

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
        hinhAnh: "./img/vsphone.jpg",
    }
}

export const chiTietPhone =(state= phoneStore.phoneDetail, action) => {
    //    console.log(action);       
    //    switch (action.type){
    //         case "CHI_TIET":{
    //             let gioHangCapNhat= state;
    //             gioHangCapNhat= action.sp;
    //             return gioHangCapNhat;
    //         }
    //         default: return state;
    //    }
        if(action.type === "CHI_TIET"){
            let gioHangCapNhat= state;
                gioHangCapNhat= action.sp;
                return gioHangCapNhat;
        }

        return state;
    }
