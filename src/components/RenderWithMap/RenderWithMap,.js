import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    mangSinhVien = [
        { ma: 1, ten: 'Nguyễn Văn A' },
        { ma: 2, ten: 'Nguyễn Văn B' },
        { ma: 3, ten: 'Nguyễn Văn C' }
    ]

    renderSinhVien = () => {
        //Cách 1:
        // const arrJSX = [];
        // for (let index = 0; index < this.mangSinhVien.length; index++) {
        //     //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên trong mảng this.mangSinhVien
        //     let tagP = <p key={index}>{this.mangSinhVien[index].ten}</p>;
        //     //
        //     arrJSX.push(tagP);//
        // }
        // console.log('arrJSX', arrJSX);
        // return arrJSX;

        //Cách 2:
        const arrJSX = this.mangSinhVien.map((sinhVien, index) => {
            return <li key={index}>
                {sinhVien.ten}
            </li>
        })
        return arrJSX;
    }

    render() {
        return (
            <div className="container">
                <ul>{this.renderSinhVien()}</ul>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma SV</th>
                            <th>Ten SV</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.mangSinhVien.map((sinhVien, index) => {
                            return <tr key={index}>
                                <td>{sinhVien.ma}</td>
                                <td>{sinhVien.ten}</td>
                                <td>
                                    <button className="btn btn-success">Xóa</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>


        )
    }
}
