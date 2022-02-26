import {combineReducers, createStore} from 'redux';
import { BaiTapGameReducer } from './BaiTapGameReducer';
import { BaiTapQuanLyNguoiDungReducer } from './BaiTapQuanLyNguoiDungReducer';
import {chiTietPhone} from './detailCart';
import {gioHangStore} from './gioHangStore'



const rootReducer= combineReducers({
    // chiTietPhone,
    // gioHangStore,
    // BaiTapGameReducer,
    BaiTapQuanLyNguoiDungReducer
});
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());