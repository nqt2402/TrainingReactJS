import React, { Component } from 'react'

export default class SanPhamDemo extends Component {
    render() {
        let { product } = this.props;
        return (
            <div>
                <div className="card text-white bg-primary">
                        <img className="card-img-top" style={{ height: 300 }} src={product.hinhAnh} alt={product.hinhAnh} />
                        <div className="card-body">
                            <h4 className="card-title">{product.tenSP}</h4>
                            <p className="card-text">{product.giaBan}</p>
                            <button onClick={()=>{
                                this.props.xemCT(product)
                            }} className="btn btn-success">Xem chi tiết</button>
                        </div>
                    </div>
            </div>
        )
    }
}

/* Các bước khi thực viết 1 chức năng, 1 ứng dụng:

1 - Xác định các chức năng của ứng dụng hoặc task ( hiểu coi ứng dụng đó làm gì ? những hành động của người dùng thao tác với ứng dụng)

2 - Xây dựng giao diện html css (dàn layout hoàn chỉnh) 

3 - Sử dụng data để tạo giao diện ( viết hàm render hay map để tạo ra dữ liệu cho giao diện và dùng databinding để hiển thị nội dung lên giao diện)

4 - Đi vào xử lý hành động của người dùng 
          + Xác định state của ứng dụng (src 1 của hình, đoạn text, thành phần giao diện hiển thị hoặc ẩn đi ... ), tổ chức lưu trữ (dùng object hay chuỗi hay số hay mảng để lưu dữ liệu thay đổi đó)
          + Code xử lý chức năng cho ứng dụng (Click vào nút gì đó làm thay đổi giá trị state => setState ) */