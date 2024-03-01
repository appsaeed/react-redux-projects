
//create actions types
export const PRODUCT_INSERT = 'shop/product_insert';
export const PRODUCT_UPDATE = 'shop/product_update';
export const PRODUCT_DELETE = 'shop/product_delete';
export const PRODUCT_QUANTITY_INCREMENT = 'shop/product_quantity_increment';
export const PRODUCT_QUANTITY_DECREMENT = 'shop/product_quantity_decrement';

export const CART_INSERT = 'shop/cart_insert';
export const CART_UPDATE = 'shop/cart_update';
export const CART_DELETE = 'shop/cart_deelte';

export const CART_QT_INCRMENT = 'shop/cart_quintity_incrment';
export const CART_QT_DCREMENT = 'shop/cart_quintity_dcrement';


/**
 * =================================================
 * create actions
 * =================================================
 * 
 * 
 */

//product quantity increment
export function pqtIncrement(product_id: number) {
    return {
        type: PRODUCT_QUANTITY_INCREMENT,
        payload: product_id
    }
}
//product quantity increment
export function pqtDerement(product_id: number) {
    return {
        type: PRODUCT_QUANTITY_DECREMENT,
        payload: product_id
    }
}

//cart quantity increment
export function cqtIncrement(cart_id: number) {
    return {
        type: CART_QT_INCRMENT,
        payload: cart_id
    }
}

//cart quantity decrement
export function cqtDecrement(cart_id: number) {
    return {
        type: CART_QT_DCREMENT,
        payload: cart_id
    }
}

//add to cart
export function cartAdd(product_id: number) {
    pqtDerement(product_id)
    return {
        type: CART_INSERT,
        payload: product_id
    }
}
CART_UPDATE


//update cart 
export function cartUpdate(cart_id: string | number, key: string, value: unknown) {
    return {
        type: CART_UPDATE,
        payload: {
            cart_id,
            key,
            value,
        },

    }
}

//delete cart
export function cartDelete(cart_id: string | number) {
    return {
        type: CART_DELETE,
        payload: cart_id
    }
}



//add product to shop page
export function productAdd<T>(data: T) {
    return {
        type: PRODUCT_INSERT,
        payload: data
    }
}

//update product
export function productUpdate(product_id: string, key: string, value: unknown) {
    return {
        type: PRODUCT_UPDATE,
        payload: {
            product_id,
            key,
            value
        }
    }
}

//delete product from
export function productDelete(product_id: number) {
    return {
        type: PRODUCT_DELETE,
        payload: product_id
    }
}
