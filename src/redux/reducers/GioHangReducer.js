
const stateDefault = {
    gioHang: [{ maSP: 3, tenSP: 'iPhone XS Max', giaBan: 27000000, hinhAnh: './img/applePhone.jpg', soLuong: 1 },]
}

export const gioHangReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            console.log('object123', action);
            //Xử lí thay đổi state.gioHang trên redux
            //B.1:Sao chép giỏ hàng ra array mới
            // const gioHangUpdate = [...state.gioHang, action.spGioHang]; //do chưa tìm index nên lúc nào cũng push vào array
            const gioHangUpdate = [...state.gioHang];
            //B.2: Kiểm tra action.gioHang gửi lên từ component có trong state.gioHang chưa?
            let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            console.log(index);
            if (index !== -1) {
                gioHangUpdate[index].soLuong += 1;
            } else {
                gioHangUpdate.push(action.spGioHang);
            }

            //B.3: Cập nhật lại state.gioHang => bước này giống như this.setState tại component
            state.gioHang = gioHangUpdate; //Gán state.gioHang = giỏ hàng sau khi xử lí

            //BẮT BUỘC return {...state} 
            return { ...state };//Tính bất biến của redux để redux hiểu được sự thay đổi vùng nhớ object
        } break;
        case 'THAY_DOI_SO_LUONG': {
            const gioHangUpdate = [...state.gioHang];

            //Kiểm tra sản phẩm có trong giỏ hàng không?
            let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSP);

            if (index !== -1) {
                gioHangUpdate[index].soLuong += action.soLuong;
                if (gioHangUpdate[index].soLuong <= 0) {
                    gioHangUpdate[index].soLuong -= action.soLuong;
                }
            }

            //Cập nhật lại state
            state.gioHang = gioHangUpdate;

            return { ...state };

        } break;
        case 'XOA_SAN_PHAM': {
            let gioHangUpdate = [...state.gioHang];

            //Xử lí xóa giỏ hàng
            gioHangUpdate = gioHangUpdate.filter((spGH) => spGH.maSP !== action.maSP);

            //Cập nhật lại state giỏ hàng
            state.gioHang = gioHangUpdate;
            
            return {...state};
        }
    }

    return { ...state };
}