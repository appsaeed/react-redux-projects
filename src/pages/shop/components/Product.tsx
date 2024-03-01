import { useDispatch } from "react-redux";
import { formatPrice } from "../../../app/utils";
import useCarts from "../../../hooks/useCarts";
import { cartAdd, pqtDerement, productDelete } from "../redux/shopActions";
import { ProductType } from "../shop";

export default function Product(props: ProductType & { products?: ProductType[] }) {

    const { name, category, image_url, price, quantity, id } = props;
    const dispatch = useDispatch();

    const isExistCart = useCarts().some(item => item.product_id == id)

    const addToCart = () => {
        dispatch(cartAdd(id))
        dispatch(pqtDerement(id))
    }

    return (
        <div className="lws-productCard h-max relative">
            <button disabled={isExistCart} title={isExistCart ? 'The product alreay exist in cart. Frist need to remove from cart then the product can delete.' : 'Delete product'} onClick={() => dispatch(productDelete(id))} className="lws-removeFromCart absolute right-3 cursor-pointer disabled:cursor-not-allowed">
                <i className="text-sm text-red-200 fa-solid fa-trash" />
            </button>
            <img
                className="lws-productImage max-h-48"
                src={image_url}
                alt={name}

            />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{name}</h4>
                <p className="lws-productCategory">{category}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">
                        <span className="lws-price">{formatPrice(price)}</span>
                    </p>
                    <p className="productQuantity">
                        QTY <span className="lws-quantity">{quantity}</span>
                    </p>
                </div>
                <button disabled={isExistCart} onClick={addToCart} className="lws-btnAddToCart disabled:cursor-not-allowed">Add To Cart</button>
            </div>
        </div>
    )
}
