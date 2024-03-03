/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MiddlewareAPI } from "redux";
import cartReducer from "./cartReduce";
import productReducer from "./productReducer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Store = MiddlewareAPI<any, any>;
type Next = (action: unknown) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveShopeStorage = (store: Store) => (next: Next) => (action: any) => {

    //get prevous state
    const state_products = store.getState()['products'];
    const state_carts = store.getState()['carts'];

    //get next state 
    const updatedProducts = [action].reduce(productReducer, state_products);
    const updatedCarts = [action].reduce(cartReducer, state_carts)

    localStorage.setItem('products', JSON.stringify(updatedProducts))
    localStorage.setItem('carts', JSON.stringify(updatedCarts))

    //pass next middleware
    return next(action)

}
