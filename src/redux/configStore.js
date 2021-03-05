import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/GioHangReducer";
import { baiTapGameReducer } from "./reducers/BTGameXucXacReducer"

const rootReducer = combineReducers({

    gioHangReducer: gioHangReducer,//Vế phải là tách thành 1 component riêng
    //state theo từng nghiệp vụ

    baiTapGameReducer, //trong file BTGameXucXacReducer.js

});

export const store = createStore(rootReducer);