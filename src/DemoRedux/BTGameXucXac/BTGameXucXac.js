import React, { Component } from 'react';
import './BTGameXucXac.css';
import KetQuaTroChoi from './KetQuaTroChoi';
import XucXac from './XucXac';


export default class BTGameXucXac extends Component {
    render() {
        return (
            <div className="bgGameXucXac">
                <h1 className="text-center">BÀI TẬP GAME XÚC XẮC</h1>

                <XucXac />

                <KetQuaTroChoi />
            </div>
        )
    }
}
