/* eslint-disable no-case-declarations */
import { productInitState } from "../assets/helpers";
import { ProductType } from "../shop";
import { PRODUCT_DELETE, PRODUCT_INSERT, PRODUCT_QUANTITY_DECREMENT, PRODUCT_QUANTITY_INCREMENT, PRODUCT_UPDATE, productUpdate } from "./shopActions";

export function nextId(products: ProductType[] = []) {
    return products.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function productReducer(state: ProductType[] = productInitState(), action: { type: any; payload: any; }): ProductType[] {

    switch (action.type) {

        case PRODUCT_INSERT:

            return [
                ...state,
                {
                    ...action.payload,
                    id: nextId(state)
                }
            ] as ProductType[];

        case PRODUCT_UPDATE:

            const { payload }: ReturnType<typeof productUpdate> = action;

            return state.map((product) => {
                if (product.id.toString() === payload.product_id.toString()) {
                    return {
                        ...product,
                        [payload.key]: payload.value
                    }
                }
                return product;
            }) as ProductType[]

        case PRODUCT_DELETE:

            return state.filter((product) => product.id.toString() !== action.payload.toString()) as ProductType[]

        case PRODUCT_QUANTITY_INCREMENT:

            return state.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            }) as ProductType[]

        case PRODUCT_QUANTITY_DECREMENT:

            return state.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item;
            }) as ProductType[]

        default:
            return state as ProductType[];
    }

}
