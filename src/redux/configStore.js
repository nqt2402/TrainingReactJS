import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/GioHangReducer";




const rootReducer = combineReducers({

    gioHangReducer: gioHangReducer,//Vế phải là tách thành 1 component riêng
    //state theo từng nghiệp vụ
});

export const store = createStore(rootReducer);