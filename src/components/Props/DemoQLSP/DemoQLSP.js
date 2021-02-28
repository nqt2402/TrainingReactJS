import React, { Component } from 'react'
import GioHang from './GioHang'
import SanPhamDemo from './SanPhamDemo'

export default class DemoQLSP extends Component {
    dataPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2\", Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" },
    ]

    state = {
        spChiTiet: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2\", Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        gioHang: [
            { maSP: 0, hinhAnh: './img/applephone.jpg', tenSP: 'iPhone', gia: 1000, soLuong: 1 },
        ]
    }

    renderSanPham = () => {
        return this.dataPhone.map((item, index) => {
            return <div className="col-4" key={index}>
                {/* dùng props cho func truyền vào SanPhamDemo */}
                <SanPhamDemo product={item} xemCT={this.xemChiTiet} themGioHang={this.themGioHang} />

                {/* <div className="card text-white bg-primary">
                        <img className="card-img-top" style={{ height: 300 }} src={item.hinhAnh} alt={item.hinhAnh} />
                        <div className="card-body">
                            <h4 className="card-title">{item.tenSP}</h4>
                            <p className="card-text">{item.giaBan}</p>
                            <button onClick={() => {
                                this.xemChiTiet(item);
                            }} className="btn btn-success">Xem chi tiết</button>
                        </div>
                    </div> */}
            </div >
        })
    }

    //Hàm xử lí làm thay đổi state sẽ được đặt tại component chứa state
    themGioHang = (sanPhamClick) => {
        console.log(sanPhamClick);
        //Sau khi click thì tạo ra 1 object trong giỏ hàng
        let spGH = {
            maSP: sanPhamClick.maSP,
            tenSP: sanPhamClick.tenSP,
            gia: sanPhamClick.giaBan,
            soLuong: 1,
            hinhAnh: sanPhamClick.hinhAnh,
        }

        let gioHangUpdate = [...this.state.gioHang];

        let indexSPGH = gioHangUpdate.findIndex(
            (spTrongGH) => spTrongGH.maSP === sanPhamClick.maSP
        );

        if (indexSPGH !== -1) {//Tìm thấy vị trí index
            gioHangUpdate[indexSPGH].soLuong += 1;
        } else {
            gioHangUpdate.push(spGH);
        }

        //xử lí kiểm tra state giỏ hàng có chứa dữ liệu sản phẩm đó khi click hay chưa => Nếu có thì tăng số lượng, không có thì thêm vào
        // let gioHangUpdate = [...this.state.gioHang, spGH];

        // this.state.gioHang.push(spGH);

        console.log(sanPhamClick);
        this.setState({
            gioHang: gioHangUpdate

            // gioHang: this.state.gioHang
            //gioHang: giỏ hàng mới
        })
    }

    xemChiTiet = (sanPhamClick) => {
        console.log(sanPhamClick);
        this.setState({ spChiTiet: (sanPhamClick) })
    }

    xoaSP = (maSP) => {
        console.log(maSP);
        // let spGH = {
        //     maSP: sanPhamClick.maSP,
        //     tenSP: sanPhamClick.tenSP,
        //     gia: sanPhamClick.giaBan,
        //     soLuong: 1,
        //     hinhAnh: sanPhamClick.hinhAnh,
        // }
        let gioHangUpdate = [...this.state.gioHang]
        //Cách 1: dùng splice
        // let indexSPGH = gioHangUpdate.findIndex(
        //     (spTrongGH) => spTrongGH.maSP === maSP
        // );
        // console.log(indexSPGH);
        // gioHangUpdate.splice(indexSPGH, 1);

        //Cách 2: dùng filter
        gioHangUpdate = gioHangUpdate.filter(spGH => spGH.maSP !== maSP);

        this.setState({ gioHang: gioHangUpdate })
    }

    tangGiamSL = (maSP, soLuongTangGiam) => {
        let gioHangUpdate = [...this.state.gioHang];
        //b1: Tìm ra sản phẩm trong giỏ hàng dựa vào mã sản phẩm
        let index = gioHangUpdate.findIndex(
            spGH => spGH.maSP === maSP
        );
        //b2: Tăng, Giảm số lượng

        if (index !== -1) {
            //cach a.Khai
            gioHangUpdate[index].soLuong += soLuongTangGiam;
            if (gioHangUpdate[index].soLuong <= 0) {
                gioHangUpdate[index].soLuong -= soLuongTangGiam;
                return;
            }

            //cach minh
            // if (gioHangUpdate[index].soLuong >= 1) {

            //     if (soLuongTangGiam == -1) {
            //         if (gioHangUpdate[index].soLuong == 1) { return }
            //     }
            //     gioHangUpdate[index].soLuong += soLuongTangGiam;
            // }
        };

        //b3:setState cho gioHang
        this.setState({ gioHang: gioHangUpdate });
    }

    render() {
        let { tenSP, hinhAnh, manHinh, heDieuHanh, ram, rom, cameraTruoc, cameraSau } = this.state.spChiTiet;
        return (
            <div className="container">
                <h1 className="">Giỏ hàng</h1>
                <GioHang addItem={this.tangGiamSL} gioHang={this.state.gioHang} removeOutOfCart={this.xoaSP} />
                <h3 className="text-center display-4">Danh Sách Sản Phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>

                <div className="row mt-5">
                    <div className="col-4">
                        <h3>{tenSP}</h3>
                        <img className="card-img-top" style={{ height: 300 }} src={hinhAnh} alt />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kĩ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{rom}</td>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
