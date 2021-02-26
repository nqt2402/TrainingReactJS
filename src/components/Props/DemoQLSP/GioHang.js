import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        let { gioHang, removeOutOfCart } = this.props
        return (
            <div className="container">
                <div className="text-right">Giỏ hàng</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {gioHang.map((spGH, index) => {
                            return (
                                <tr key={index}>
                                    <th>{spGH.maSP}</th>
                                    <th>{spGH.tenSP}</th>
                                    <th> <img src={spGH.hinhAnh} width="50" height="50" /> </th>
                                    <th>{spGH.gia}</th>
                                    <th>{spGH.soLuong}</th>
                                    <th>{spGH.soLuong * spGH.gia}</th>
                                    <th>
                                        <button onClick={() => {
                                            removeOutOfCart(spGH.maSP)
                                        }} className="btn btn-danger">Xóa</button></th>
                                </tr>
                            )
                        })}
                        {/* <tr>
                            <th>1</th>
                            <th>iPhone</th>
                            <th> <img src="./img/applephone.jpg" width="50" height="50" /> </th>
                            <th>1000</th>
                            <th>1</th>
                            <th>1000</th>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        )
    }
}
