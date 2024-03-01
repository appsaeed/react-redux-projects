import { useSelector } from "react-redux";
import cartReducer from "../pages/shop/redux/cartReduce";
import { CartItemType } from "../pages/shop/shop";
import reducer from "../redux/reducer";

export default function useCarts(): CartItemType[] {

    const carts: ReturnType<typeof cartReducer> = useSelector((state: ReturnType<typeof reducer>) => state.cart);

    return carts;
}
