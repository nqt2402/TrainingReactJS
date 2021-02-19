import React, { Component } from 'react'
import BTProductItem from './BTProductItem'

export default class BTProductList extends Component {
  mangSanPham = [
    { maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/sp_blackberry.png', gia: 1000 },
    { maSP: 2, tenSP: 'Iphone X', hinhAnh: './img/sp_iphoneX.png', gia: 2000 },
    { maSP: 3, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 3000 },
    { maSP: 4, tenSP: 'Vivo 850', hinhAnh: './img/sp_vivo850.png', gia: 3000 },
  ]

  renderSanPham = () => {
    //Hiển thị giao diện div các sản phẩm dựa vào this.mangSanPham
    const arrayDiv = this.mangSanPham.map((item, index) => {
      return <div key={index} className="col-3">
        < BTProductItem sanPham={item} />
      </div>
    })
    return arrayDiv;
  }

  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
        <h1 className="text-dark text-center">BEST SMARTPHONE</h1>
        <div className="row">
          {this.renderSanPham()}
          {/* <BTProductItem />
          <BTProductItem />
          <BTProductItem />
          <BTProductItem /> */}
        </div>
      </section>
    )
  }
}
