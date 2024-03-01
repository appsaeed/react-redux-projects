import { useDispatch } from "react-redux";
import { formatPrice } from '../../../app/utils';
import useProduct from "../../../hooks/useProduct";
import { cartDelete, cqtDecrement, cqtIncrement, pqtDerement, pqtIncrement } from "../redux/shopActions";
import { CartItemType } from "../shop";


export default function CartItem({ product_id, quantity, id }: CartItemType) {

    const product = useProduct(product_id)

    const dispatch = useDispatch();

    if (!product) return 'Loading...';

    const incrementQuantity = () => {
        dispatch(cqtIncrement(id))
        dispatch(pqtDerement(product_id))
    }
    const decrementQuantity = () => {
        dispatch(cqtDecrement(id))
        dispatch(pqtIncrement(product_id))
    }

    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
                {/* cart image */}
                <img
                    className="lws-cartImage"
                    src={product.image_url}
                    alt={product.name}
                />
                {/* cart item info */}
                <div className="space-y-2">
                    <h4 className="lws-cartName">
                        {product.name}
                    </h4>
                    <p className="lws-cartCategory">{product.category}</p>
                    <p>
                        <span className="lws-cartPrice">{formatPrice(product.price)}</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* amount buttons */}
                <div className="flex items-center space-x-4">
                    <button disabled={product.quantity < 1} onClick={incrementQuantity} className="lws-incrementQuantity disabled:cursor-not-allowed">
                        <i className="text-lg fa-solid fa-plus" />
                    </button>
                    <span className="lws-cartQuantity">{quantity}</span>
                    <button onClick={decrementQuantity} className="lws-decrementQuantity">
                        <i className="text-lg fa-solid fa-minus" />
                    </button>
                </div>
                {/* price */}
                <p className="text-lg font-bold">
                    <span className="lws-calculatedPrice">{formatPrice(product.price * quantity)}</span>
                </p>
            </div>
            {/* delete button */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button onClick={() => dispatch(cartDelete(id))} className="lws-removeFromCart">
                    <i className="text-lg text-red-400 fa-solid fa-trash" />
                </button>
            </div>
        </div>
    )
}
