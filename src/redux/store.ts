import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { saveShopeStorage } from '../pages/shop/redux/shopMiddleware';
import reducer from './reducer';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export default createStore(reducer, applyMiddleware(saveShopeStorage));