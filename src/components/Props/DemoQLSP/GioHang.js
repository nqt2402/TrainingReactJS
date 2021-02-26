import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        let { gioHang, removeOutOfCart, addItem } = this.props
        return (
            <div className="container">
                <div className="text-right">Giỏ hàng</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình</th>
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
                                    <th>
                                        <button onClick={() => {
                                            addItem(spGH.maSP, -1)
                                        }} className="btn btn-primary">-</button>
                                        {spGH.soLuong}
                                        {/* {spGH.gia * spGH.soLuong} */}
                                        <button onClick={() => {
                                            addItem(spGH.maSP, 1)
                                        }} className="btn btn-primary">+</button>
                                    </th>
                                    <th>

                                    </th>
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
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td>Tổng tiền</td>
                            <td>{this.tinhTongTien()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }

    tinhTongTien = () => {
        let tongTien = this.props.gioHang.reduce((tongTien, spGH, index) => {
            tongTien += spGH.soLuong * spGH.gia;

            return tongTien;
        }, 0);
        return tongTien.toLocaleString();
    }
}

