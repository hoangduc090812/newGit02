import React, { Component } from 'react'
import ItemPractice from './ItemPractice'

export default class ListPractice extends Component {
    phoneList = () => {
        let {myProducts, seeDetail, themGioHang} = this.props;
        return myProducts.map((myProduct, index) => {
            return <ItemPractice themGioHang={themGioHang} xemChiTiet={seeDetail} phone={myProduct} key={index}/>
        } )
    }
    

    render() {
        
        return (
            <div className="row">
                {this.phoneList()}   
            </div>
        )
    }
}
