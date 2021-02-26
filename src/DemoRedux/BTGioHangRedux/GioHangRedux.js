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
                                    <img style={width = "30", height = "30"} src={item.hinhAnh} />
                                </td>
                                <td>{item.soLuong}</td>
                                <td>{item.gia}</td>
                                <td>{item.gia * item.soLuong}</td>
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


//Kết nối giữa component và redux
export default connect(mapStateToProps)(GioHangRedux)