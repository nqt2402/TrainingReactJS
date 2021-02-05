import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {
    render() {
        //this.props là thuộc tính có sẵn của react component

        // this.state != this.props
        //GIỐNG NHAU: dùng để binding dữ liệu lên giao diện va đều là thuộc tính có sẵn của react component
        //KHÁC NHAU:
        //this.state quản lí các trạng thái của biến làm giao diện thay đổi
        //this.props nhận giá trị từ component cha truyền vào
        //this.state (=> gọi phương thức set.State) có thể gán lại giá trị được nhưng this.props thì KHÔNG cho phép gán lại giá trị

        // let { ten, tuoi, ma } = this.props.sinhVien;//cach 1
        let { sinhVien } = this.props;//cach 2

        return (
            <div style={{ backgroundSize: this.props.bgColor }} className="card text-white bg-primary">
                <img width="100" height="200" className="card-img-top" src="https://picsum.photos/100/180/" alt="abc" />
                <div className="card-body">
                    {/* Để dấu? là optional */}
                    <h4 className="card-title">{sinhVien?.ten}</h4>
                    <p className="card-text">{sinhVien?.tuoi}</p>
                </div>
            </div>
        )

        //CACH CU
        // return (
        //     <div>
        //         <div className="card text-white bg-primary">
        //             <img width="100" height="200" className="card-img-top" src="https://picsum.photos/100/180/" alt="abc" />
        //             <div className="card-body">
        //                 <h4 className="card-title">{this.props.maSV}</h4>
        //                 <p className="card-text">{this.props.tenSV}</p>
        //             </div>
        //         </div>
        //     </div>
        // )
    }
}
