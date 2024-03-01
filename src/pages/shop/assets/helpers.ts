import { CartItemType, ProductType } from '../shop';
//get cart initalization state
export function cartInitState(): CartItemType[] {

    try {

        const data = JSON.parse(localStorage.getItem('carts') || '');

        if (typeof data === 'object' || Array.isArray(data)) {
            return data;
        }

        return []

    } catch (error) {

        return []
    }
}


//get products initalization state
export function productInitState(): ProductType[] {
    try {

        const data = JSON.parse(localStorage.getItem('products') || '');

        if (typeof data === 'object' || Array.isArray(data)) {
            return data;
        }

        return []

    } catch (error) {

        return []
    }
}