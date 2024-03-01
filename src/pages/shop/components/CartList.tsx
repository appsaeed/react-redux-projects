import useCarts from "../../../hooks/useCarts";
import { CartItemType } from "../shop";
import CartItem from "./CartItem";

export default function CartItems() {
    const cart_items = useCarts();
    return (
        <div className="space-y-6">
            {
                cart_items.map((item: CartItemType) =>
                    <CartItem key={item.id} {...item} />)
            }
        </div>
    )
}
