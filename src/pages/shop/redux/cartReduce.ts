/* eslint-disable no-case-declarations */
import { cartInitState } from "../assets/helpers";
import { CartItemType } from "../shop";
import { CART_DELETE, CART_INSERT, CART_QT_DCREMENT, CART_QT_INCRMENT, CART_UPDATE, cartUpdate } from "./shopActions";


export function nextId(carts: CartItemType[] = []) {
    return carts.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Action = { type: any; payload: any; };

export default function cartReducer(state = cartInitState(), action: Action): CartItemType[] {

    switch (action.type) {

        case CART_INSERT:

            return [
                ...state,
                {
                    id: nextId(state),
                    product_id: action.payload,
                    quantity: 1,
                },
            ];

        case CART_UPDATE:
            const _action: ReturnType<typeof cartUpdate> = action;
            return state.map((cart) => {
                if (cart.id.toString() === _action.payload.cart_id) {
                    return {
                        ...cart,
                        [_action.payload.key]: _action.payload.value
                    }
                }
                return cart;
            })

        case CART_DELETE:

            return state.filter((cart) => cart.id.toString() !== action.payload.toString())

        case CART_QT_INCRMENT:

            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            });

        case CART_QT_DCREMENT:

            return state.map(item => {
                if (item.id === action.payload) {
                    const decrement = item.quantity <= 1 ? 1 : item.quantity - 1;
                    return {
                        ...item,
                        quantity: decrement
                    }
                }
                return item;
            });

        default:
            return state;
    }

}
