import { useSelector } from "react-redux";
import productReducer from "../pages/shop/redux/productReducer";
import { ProductType } from "../pages/shop/shop";
import reducer from "../redux/reducer";

export default function useProducts(): ProductType[] {
    const products: ReturnType<typeof productReducer> = useSelector(
        (state: ReturnType<typeof reducer>) => state.products
    );
    return products;
}
