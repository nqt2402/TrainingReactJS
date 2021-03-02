import React, { Component } from 'react'
//Kết nối react component với redux store
import { connect } from "react-redux";

//export default
class GioHangRedux extends Component {
    render() {
        console.log(this.props.gioHang, 'gioHang');
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gioHang.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.maSP}</td>
                                <td>{item.tenSP}</td>
                                <td>
                                    <img style={{ width: 50, height: 50 }} src={item.hinhAnh} />
                                </td>
                                <td>
                                    <button onClick={() => {
                                        this.props.thayDoiSoLuong(item.maSP, -1)
                                    }} className="btn btn-primary mr-2">-</button>
                                    {item.soLuong.toLocaleString()}
                                    <button onClick={() => {
                                        this.props.thayDoiSoLuong(item.maSP, 1)
                                    }} className="btn btn-primary ml-2">+</button>
                                </td>
                                <td>{item.giaBan.toLocaleString()}</td>
                                <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
                                <td><button onClick={() => {
                                    this.props.xoaSanPham(item.maSP)
                                }} className="btn btn-danger">Xóa</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

//Hàm chuyển state trên redux trở thành props của component
//State đại diện cho rootReducer
const mapStateToProps = (state) => {

    //Tạo props từ state redux
    return {
        gioHang: state.gioHangReducer.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        thayDoiSoLuong: (maSP, soLuong) => {
            console.log('object456', maSP, soLuong);

            //Tạo action
            const action = {
                type: 'THAY_DOI_SO_LUONG',
                maSP: maSP,
                soLuong: soLuong,
            }

            //Đưa action lên reducer
            dispatch(action);
        },

        xoaSanPham: (maSP) => {
            console.log('object678', maSP);


            //Tạo ra action
            const action = {
                type: "XOA_SAN_PHAM",
                maSP: maSP
            }

            //Đưa action lên reducer
            dispatch(action);
        }
    }
}

//Kết nối giữa component và redux
//C.1:
// export default connect(mapStateToProps)(GioHangRedux)
//C:2:
const gioHangConnectRedux = connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
export default gioHangConnectRedux;
