/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Action, MiddlewareAPI } from "redux";
import { todolistReducer } from "./todoReducer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Store = MiddlewareAPI<any, any>;
type Next = (action: unknown) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveTodoStorage = (store: Store) => (next: Next) => (action: any) => {

    //get prevous state
    const todos_state = store.getState()['todos'];

    //get next state 
    const updatedTodos = [action].reduce(todolistReducer, todos_state);

    localStorage.setItem('todos', JSON.stringify(updatedTodos))

    //pass next middleware
    return next(action)

}

//fetch todos from api
export const fetchTodos = (store: Store) => (next: Next) => async (action: Action) => {


    if (action.type === 'hidden-action') {

        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();

        if (todos && Array.isArray(todos)) {
            store.dispatch({
                type: 'fetch-todos',
                payload: todos,
            })
            return;
        }


    }

    return next(action)

}