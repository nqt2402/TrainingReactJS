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
