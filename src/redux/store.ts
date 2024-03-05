import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { saveShopeStorage } from '../pages/shop/redux/shopMiddleware';
import { saveTodoStorage } from '../pages/todos/redux/todoMiddleware';
import reducer from './reducer';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const store = createStore(reducer, applyMiddleware(saveShopeStorage, saveTodoStorage));

export default store;