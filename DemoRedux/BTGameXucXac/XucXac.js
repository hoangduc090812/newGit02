import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {
    render() {
        let {mangXucXac} = this.props.storeXucXac;
        console.log(mangXucXac);
        return (
            <div className='row text-center'>
                    <div className='col-3'>
                        <div className='btn'>
                            <button onClick={() => {
                                const action={
                                    type: "CHON_LUA",
                                    chon: true
                                }
                                this.props.dispatch(action);
                            }} className='bg-danger display-4 text-white p-5'>
                                TÀI
                            </button>
                        </div>
                    </div>
                    <div className='col-6'>
                        {mangXucXac.map((item, index) => {
                            return  <img src={item.hinhAnh} width='50' height='50' alt="..."/>
                        })}
                        {/* <img src="./imgGameXucXac/1.png" width='50' height='50' alt="..."/>
                        <img src="./imgGameXucXac/1.png" width='50' height='50' alt="..."/>
                        <img src="./imgGameXucXac/1.png" width='50' height='50' alt="..."/> */}
                    </div>
                    <div className='col-3'>
                        <div className='btn'>
                            <button onClick={() => {
                                const action={
                                    type: "CHON_LUA",
                                    chon: false
                                }
                                this.props.dispatch(action);
                            }} className='bg-dark display-4 text-white p-5'>
                                XỈU
                            </button>
                        </div>
                    </div>
                </div>
        )
    }
}
const mapStateToProps= (rootReducer) => {
    return {storeXucXac: rootReducer.BaiTapGameReducer
    }
}

export default  connect(mapStateToProps)(XucXac);