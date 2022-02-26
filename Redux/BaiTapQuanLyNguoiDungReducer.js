


const stateDefault = {
    mangNguoiDung:[{taiKhoan:'a', matKhau:'123', hoTen:'Nguyễn văn A', email:'a@gmail.com', soDienThoai:'000000034', maLoaiNguoiDung:'NguoiDung'},
    {taiKhoan:'b', matKhau:'456', hoTen:'Nguyễn văn B', email:'b@gmail.com', soDienThoai:'012300034', maLoaiNguoiDung:'NguoiDung'}],
    nguoiDungChinhSua:{taiKhoan:'', matKhau:'', hoTen:' văn A', email:'', soDienThoai:'', maLoaiNguoiDung:'NguoiDung'}
}
    


export const BaiTapQuanLyNguoiDungReducer = (state= stateDefault,action) => {
    switch(action.type){
        case "DANG_KY":{
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
            return{...state};
        }
        case "CHINH_SUA":{
            // console.log(action.nguoiDungChinhSua);
            state.nguoiDungChinhSua = action.nguoiDungChinhSua;
            return {...state};
        }
        default: {
            return state;
        }
    }
}