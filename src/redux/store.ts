import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { saveShopeStorage } from '../pages/shop/redux/shopMiddleware';
import { fetchTodos, saveTodoStorage } from '../pages/todos/redux/todoMiddleware';
import reducer from './reducer';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const store = createStore(reducer, applyMiddleware(saveShopeStorage, saveTodoStorage, fetchTodos));

store.dispatch({
    type: 'hidden-action',
    payload: []
})

export default store;