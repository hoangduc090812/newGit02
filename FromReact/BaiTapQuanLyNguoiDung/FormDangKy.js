import React, { Component } from 'react'
import {connect} from 'react-redux'

class FormDangKy extends Component {

    constructor(props){
        super(props);
        this.state = {
            taiKhoan:'',
            matKhau:'',
            email:'',
            hoTen:'',
            soDienThoai:'',
            maLoaiNguoiDung:'NguoiDung'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log('submit');
        const action= {
            type: "DANG_KY",
            nguoiDung: this.state
        }
        this.props.dispatch(action);
        console.log('submit');
    }
    handleChangeInput = (event) => {
        // let value = event.target.value;
        // let name = event.target.name;
        let{name, value} = event.target;
        this.setState({
            [name]: value
        },() => {
           console.log('state', this.state); 
        })
    }
    

    render() {
        let{taiKhoan, matKhau, hoTen, email, soDienThoai, maLoaiNguoiDung} = this.props.nguoiDungChinhSua;
        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-white'>
                    Form Đăng Ký
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Tài khoản</p>
                                <input value={taiKhoan}className='form-control' name="taiKhoan" onChange={this.handleChangeInput}></input>
                            </div>
                            <div className='form-group'>
                                <p>Mật khẩu</p>
                                <input value={matKhau}className='form-control' name='matKhau' onChange={this.handleChangeInput}></input>
                            </div>
                            <div className='form-group'>
                                <p>Email</p>
                                <input value={email}className='form-control' name='email' onChange={this.handleChangeInput}></input>
                            </div>            
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Họ tên</p>
                                <input value={hoTen}className='form-control' name='hoTen' onChange={this.handleChangeInput}></input>
                            </div>
                            <div className='form-group'>
                                <p>Số điện thoại</p>
                                <input value={soDienThoai}className='form-control' name='soDienThoai' onChange={this.handleChangeInput}></input>
                            </div>
                            <div className='form-group' >
                                <p>Mã loại người dùng</p>
                                <select value={maLoaiNguoiDung}className='form-control'name='maLoaiNguoiDung' onChange={this.handleChangeInput}>
                                    <option value='NguoiDung'>Người dùng</option>
                                    <option value='QuanTri'>Quản trị</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <button className='btn btn-success ml-3' type='submit'>Đăng ký</button>
                        <button className='btn btn-danger ml-3'type='submit'>Cập nhật</button>
                     </div>
                </div>
                
            </form>
        )
    }
}

const mapStateToProps= (rootReducer) => {
    return{
        nguoiDungChinhSua : rootReducer.BaiTapQuanLyNguoiDungReducer.nguoiDungChinhSua
    }
}
export default connect(mapStateToProps)(FormDangKy);