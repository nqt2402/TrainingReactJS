import React, { Component } from 'react'

import { connect } from 'react-redux';
//export default 
class XucXac extends Component {
    //CSS
    buttonCSS = { border: 'none',outLine:'none', width: 250, height: 250, fontSize: 50, borderRadius: "50%" };

    render() {
        let { mangXucXac } = this.props;

        const renderXucXac = () => {
            return mangXucXac.map((item, index) => {
                return <img key={index} src={item.hinhAnh} alt={item.hinhAnh} width="50" />

            })
        }

        return (
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-4">
                        <button onClick={() => {
                            this.props.chonTaiXiu('Tài')
                        }} style={this.buttonCSS} className="bg-danger">TÀI</button>
                        {/* <div style={{ fontSize: 50 }} className="p-5 bg-danger text-white w-100 h-100">
                        </div> */}
                    </div>

                    <div className="col-4">
                        {renderXucXac()}
                        {/* duyệt mảng động thay vì để từng thẻ img */}
                        {/* <img src={mangXucXac[0].hinhAnh} width="50" />
                        <img src={mangXucXac[1].hinhAnh} width="50" />
                        <img src={mangXucXac[2].hinhAnh} width="50" /> */}
                    </div>

                    <div className="col-4">
                        <button onClick={() => {
                            this.props.chonTaiXiu('Xỉu')
                        }} style={this.buttonCSS} className="bg-primary">XỈU</button>
                        {/* <div style={{ fontSize: 50 }} className="p-5 bg-dark text-white w-100 h-100"></div> */}
                    </div>
                </div>
            </div>
        )
    }
}

//Cách viết 1:
// const mapStateToProps = (state) => {//state là rootReducer

//     return {
//         mangXucXac: state.baiTapGameReducer.mangXucXac,
//     }
// }

//Cách viết 2: arrow func => return về object sẽ là return {} = ({})
const mapStateToProps = (state) => ({//state là rootReducer
    mangXucXac: state.baiTapGameReducer.mangXucXac,
})

const mapDispatchToProps = (dispatch) => {

    return {
        chonTaiXiu: (giaTri) => {

            console.log(giaTri);

            //Gửi giá trị được chọn lên redux
            const action={
                type:'CHON_TAI_XIU',
                giaTri //dùng tên cùng với param cho code ngắn gọn
            }

            //Gửi lên redux
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(XucXac)