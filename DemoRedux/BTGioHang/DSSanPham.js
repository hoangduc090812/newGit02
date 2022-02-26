import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DSSanPham extends Component {
    renderList = () => {
        let{dataPhone} = this.props;
        return dataPhone.map((phone, index) => {
            return <SanPham phone= {phone} key={index}/> 
        })
    }
    
    render() {
        return (
            <div className="row">
                {this.renderList()}
            </div>
        )
    }
}
