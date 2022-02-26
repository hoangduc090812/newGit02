import React, { Component } from 'react'
import {connect} from 'react-redux'


class KetQuaTroChoi extends Component {
    render() {
        let{banChon, soBanThang, tongBanThang} = this.props.ketQua;
        // console.log(banChon);
        return (
            <div className='container text-center'>
                    <div className='display-4'>
                        Bạn chọn: <span className='text-danger'>{banChon? "Tài": "Xỉu"}</span>
                    </div>
                    <div className='display-4'>
                        Số bàn thắng: <span className='text-success'>{soBanThang}</span>
                    </div>
                    <div className='display-4'>
                        Tổng số bàn chơi: <span className='text-warning'>{tongBanThang}</span>
                    </div>
                    <div onClick={() => {
                        const action = {
                            type: "PLAYGAME"
                        }
                        this.props.dispatch(action);
                    }} className='display-4 text-center'>
                        <button className='btn btn-success'>PLAY GAME</button>
                    </div>
                    
                </div>
        )
    }
}

const mapStateToProps= (rootReducer) => {
    return{
        ketQua : rootReducer.BaiTapGameReducer
    }
}
export default connect(mapStateToProps)(KetQuaTroChoi);