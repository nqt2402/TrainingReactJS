import React, { Component } from 'react'

export default class DataBinding extends Component {
    sinhVien = {
        id: 1,
        ten: 'Nguyễn Văn Tèo',
        tuoi: 20
    }

    renderIMG = () => { }
    render() {
        return (
            <div>
                <p>Tên : {this.sinhVien.ten}</p>
                <p>Mã số : {this.sinhVien.id}</p>
                <p>Tuổi : {this.sinhVien.tuoi}</p>
            </div>
        )
    }
}
