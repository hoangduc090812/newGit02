import React, { Component } from 'react'
import './BTGameXucXac.css'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'


export default class BTGameXucXac extends Component {
    render() {
        return (
            <div className='bg-game'>
                <h3 className='text-center display-3 p-5'>GAME ĐỔ XÚC XẮC</h3>
                <XucXac/>
                <KetQuaTroChoi/>
            </div>
        )
    }
}
