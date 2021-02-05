import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class DemoProps extends Component {

    mangSinhVien = [
        { ma: 'sv01', ten: 'A', tuoi: 20 },
        { ma: 'sv02', ten: 'B', tuoi: 18 },
        { ma: 'sv03', ten: 'C', tuoi: 16 }
    ]

    renderSinhVien = () => {
        const result = this.mangSinhVien.map((sv, index) => {
            return <div className="col-4" key={index}>
                <ThongTinSinhVien sinhVien={sv} />
            </div>
        })
    }

    //Cách truyền động
    render() {
        return (
            <div>
                <h3 className="text-center display-4">Thông tin sinh viên</h3>
                <div className="row">
                    <div className="col-4">
                        <ThongTinSinhVien sinhVien={this.mangSinhVien[0]} />
                    </div>
                    <div className="col-4">
                        <ThongTinSinhVien sinhVien={this.mangSinhVien[1]} />
                    </div>
                    <div className="col-4">
                        <ThongTinSinhVien bgColor="red" sinhVien={this.mangSinhVien[2]} />
                    </div>
                </div>
            </div>
        )
    }

    // Cach truyền tĩnh
    // render() {
    //     return (
    //         <div>
    //             <h3 className="text-center display-4">Thông tin sinh viên</h3>
    //             <div className="row">
    //                 <div className="col-4">
    //                     <ThongTinSinhVien sinhVien={this.mangSinhVien[0]} />
    //                 </div>
    //                 <div className="col-4">
    //                     <ThongTinSinhVien sinhVien={this.mangSinhVien[1]} />
    //                 </div>
    //                 <div className="col-4">
    //                     <ThongTinSinhVien bgColor="red" sinhVien={this.mangSinhVien[2]} />
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    //CACH CU
    // render() {
    //     return (
    //         <div>
    //             <h3 className="text-center display-4">Thông tin sinh viên</h3>
    //             <div className="row">
    //                 <div className="col-4">
    //                     <ThongTinSinhVien maSV={this.mangSinhVien[0].ma} tenSV={this.mangSinhVien[0].ten} />
    //                 </div>
    //                 <div className="col-4">
    //                     <ThongTinSinhVien maSV={this.mangSinhVien[1].ma} tenSV={this.mangSinhVien[1].ten} />
    //                 </div>
    //                 <div className="col-4">
    //                     <ThongTinSinhVien maSV={this.mangSinhVien[2].ma} tenSV={this.mangSinhVien[2].ten} />
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}
