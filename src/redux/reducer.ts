
import { combineReducers } from "redux";
import shopReducer from "../pages/shop/redux/shopReducer";


export default combineReducers({
    ...shopReducer
});