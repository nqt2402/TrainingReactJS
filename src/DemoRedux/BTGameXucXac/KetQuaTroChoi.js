import React, { Component } from 'react'
//Thư viện kết nối với store của redux
import { connect } from 'react-redux';
//export default 
class KetQuaTroChoi extends Component {
    render() {
        let { stateGame } = this.props;
        // this.props.dispatch

        return (
            <div className="container text-center mt-5">
                <div className="display-4">
                    Bạn chọn : <span className="text-success">{stateGame.banChon}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng : <span className="text-warning">{stateGame.soBanThang}</span>
                </div>
                <div className="display-4">
                    số bàn chơi : <span className="text-primary">{stateGame.tongSoBanChoi}</span>
                </div>
                <div className="display-4">
                    <button onClick={() => {
                        //Cách 2: sử dụng this.props.dispatch(action) thay vì dùng mapDispatchToProps
                        //Tạo ra 1 action
                        const action = {
                            type: 'PLAY_GAME'
                        }
                        //Đưa action lên reducer
                        this.props.dispatch(action);
                    }} className="btn btn-success p-5"><span className="w-25 display-4">Play Game</span></button>
                </div>
            </div>
        )
    }
}

//Viết hàm lấy giá trị từ store redux về biến thành props của component
const mapStateToProps = (state) => {//state đại diện cho RootReducer, param chuẩn mới là state, chuẩn cũ là rootReducer

    //return ra props
    return {
        stateGame: state.baiTapGameReducer,
        // banChon:rootReducer.baiTapGameReducer.banChon,
    }

}
//Dùng this.props.dispatch(action) thay vì dùng mapDispatchToProps
export default connect(mapStateToProps)(KetQuaTroChoi)