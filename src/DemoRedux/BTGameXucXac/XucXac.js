import React, { Component } from 'react'

export default class XucXac extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-4">
                        <button style={{ border: 'none' }} className="bg-danger"></button>
                        <div style={{ fontSize: 50 }} className="p-5 bg-danger text-white w-100 h-100">TÀI</div>
                    </div>

                    <div className="col-4">
                        <img src="./img/1.png" width="50" />
                        <img src="./img/2.png" width="50" />
                        <img src="./img/3.png" width="50" />
                    </div>

                    <div className="col-4">
                        <button style={{ border: 'none' }} className="bg-dark"></button>
                        <div style={{ fontSize: 50 }} className="p-5 bg-dark text-white w-100 h-100">XỈU</div>
                    </div>
                </div>
            </div>
        )
    }
}
