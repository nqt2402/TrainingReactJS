import React, { Component } from 'react'

//Kết nối redux
import { connect } from "react-redux";
// export default
class SanPhamRedux extends Component {
    render() {
        let { product } = this.props;
        console.log('props123', this.props);
        return (
            <div>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" style={{ height: 300 }} src={product.hinhAnh} alt={product.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <p className="card-text">{product.giaBan.toLocaleString()}</p>
                        <button onClick={() => {
                            this.props.themGioHang(product)
                        }} className="btn btn-danger">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}

//Hàm dùng để lấy state từ redux về tạo thành props của component
const mapStateToProps = (state) => {

    return {

    }
}

//Hàm dùng để tạo ra props là hàm xử lí sự kiện đưa dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPhamClick) => {
            console.log('sp được click', sanPhamClick);

            //Tạo ra spGioHang từ spClick
            const spGioHang = { ...sanPhamClick, soLuong: 1 };

            //Đưa dữ liệu lên redux store
            const action = {
                type: 'THEM_GIO_HANG',//Thuộc tính bắt buộc khi gửi dữ liệu lên redux
                spGioHang: spGioHang,

            }

            //Dùng hàm dispatch đưa dữ liệu lên reducer (redux store)
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);