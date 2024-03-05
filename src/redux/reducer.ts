
import { combineReducers } from "redux";
import shopReducer from "../pages/shop/redux/shopReducer";
import todoReducer from "../pages/todos/redux/todoReducer";


export default combineReducers({
    ...shopReducer,
    ...todoReducer
});