import useProducts from "../../../hooks/useProducts";
import { ProductType } from "../shop";
import Product from "./Product";

export default function Products() {
    const products = useProducts()
    return (
        <div className="productContainer" id="lws-productContainer">
            {products.map((product: ProductType) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
}
