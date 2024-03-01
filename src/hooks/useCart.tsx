import { CartItemType } from '../pages/shop/shop'
import useCarts from './useCarts'

export default function useCart(cart_id: number): CartItemType | undefined {
    return useCarts().find(item => item.id === cart_id)
}
