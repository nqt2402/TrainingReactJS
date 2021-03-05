import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BTGameXucXac.css';
import KetQuaTroChoi from './KetQuaTroChoi';
import XucXac from './XucXac';

class BTGameXucXac extends Component {

    renderKetQua = () => {
        let { tongDiem, ketQua } = this.props;
        return (
            <div className="text-center display-4">
                <p>TONG DIEM : {tongDiem}</p>
                <p>KET QUA : {ketQua}</p>
            </div>
        )
    }
    render() {
        return (
            <div className="bgGameXucXac">
                <h1 className="text-center">BÀI TẬP GAME XÚC XẮC</h1>
                <XucXac />
                {this.renderKetQua()}
                <KetQuaTroChoi />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let mangXucXac = state.baiTapGameReducer.mangXucXac;

    let tongDiem = mangXucXac.reduce((tongDiem, xucXac) => {
        return tongDiem += xucXac.diem;
    }, 0)

    let ketQua = tongDiem > 11 ? 'Tài' : 'Xỉu';

    return {
        tongDiem: tongDiem,
        ketQua: ketQua
    }
}

export default connect(mapStateToProps, null)(BTGameXucXac)