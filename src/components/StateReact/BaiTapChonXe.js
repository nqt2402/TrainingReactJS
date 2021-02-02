import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgSrc: './img/car/products/black-car.jpg',
    }

    changeColor = (color) => {
        //Thay đổi giá trị hình dựa vào biến màu
        this.setState({
            imgSrc: `./img/car/products/${color}-car.jpg`,
        })
        //Hàm setState thay đổi biến this.state.imgSrc => Đồng thời gọi render lại giao diện
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5 bg-secondary">
                    <div className="col-6">
                        <img className="w-100" src={this.state.imgSrc} />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <button className="btn btn-danger" onClick={(event) => {
                                    this.changeColor('red')
                                }}>Red Car</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-light" onClick={(event) => {
                                    this.changeColor('silver')
                                }}>Silver Car</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark" onClick={(event) => {
                                    this.changeColor('black')
                                }}>Black Car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
