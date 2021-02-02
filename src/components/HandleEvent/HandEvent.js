import React, { Component } from 'react'

export default class HandEvent extends Component {

    handleClick = () => {
        alert('hello BC01');
    }

    showMessage = (name) => { alert('hello ' + name); }

    render() {



        return (
            <div>
                {/* Cách 1 truyền callback trực tiếp - Cách cũ khi chưa có ES6 */}
                {/* <button id="btnClickMe" className="btn btn-success" onClick={this.handleClick}>Click Me!</button> */}
                {/* Dùng bind(this,"a") */}
                {/* <button id="btnClickMe" className="btn btn-success" onClick={this.showMessage.bind(this, 'A')}>Show Message!</button> */}

                {/* Cách 2 truyền hàm nặc danh - khi có ES6 dùng arrow function*/}
                <button onClick={(event) => { 
                    this.showMessage("XYZ")
                    //this.handleCLick();
                }}>Show mess</button>

            </div>
        )
    }
}
