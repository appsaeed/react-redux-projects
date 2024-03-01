import { formatPrice } from "../../../app/utils";
import useCarts from "../../../hooks/useCarts";
import useProductRef from "../../../hooks/useProductRef";

export default function Billing() {
    // const products = useProducts();
    const cart_items = useCarts();
    const getProduct = useProductRef();

    const discount = 0;

    const total_price = cart_items.reduce((total, item) => {
        const product = getProduct(item.product_id);
        const price = product?.price || 0;
        return (price * item.quantity) + total;
    }, 0);

    // const discount_amount = total_price * (discount / 100);
    const vavted_amount = total_price * (0 / 100)

    // const price_with_discount = total_price - discount_amount;

    const price_with_vat = total_price + vavted_amount;

    const full_price = price_with_vat;
    return (
        <div>
            <div className="billDetailsCard">
                <h4 className="mt-2 mb-8 text-xl font-bold text-center">
                    Bill Details
                </h4>
                <div className="space-y-4">
                    {/* sub total */}
                    <div className="flex items-center justify-between">
                        <p>Sub Total</p>
                        <p>
                            <span className="lws-subtotal">{formatPrice(total_price)}</span>
                        </p>
                    </div>
                    {cart_items.map((item) => {
                        const product = getProduct(item.product_id);
                        const price = product?.price || 0;
                        return (
                            <div key={item.id} className="flex items-center justify-between">
                                {product?.name && <p className=" text-sm">{product.name}</p>}
                                <p>
                                    {price} X {item.quantity} ={" "}
                                    <span className="lws-subtotal">
                                        {formatPrice(item.quantity * price)}
                                    </span>
                                </p>
                            </div>
                        );
                    })}
                    {/* Discount */}
                    <div className="flex items-center justify-between">
                        <p>Discount</p>
                        <p>
                            <span className="lws-discount">
                                {formatPrice(discount)}%</span>
                        </p>
                    </div>
                    {/* VAT */}
                    <div className="flex items-center justify-between">
                        <p>VAT</p>
                        <p>
                            <span className="vat">{formatPrice(0)}</span>
                        </p>
                    </div>
                    {/* Total */}
                    <div className="flex items-center justify-between pb-4">
                        <p className="font-bold">TOTAL</p>
                        <p className="font-bold">
                            <span className="lws-total">
                                {formatPrice(full_price)}
                            </span>
                        </p>
                    </div>
                    <button className="placeOrderbtn">place order</button>
                </div>
            </div>
        </div>
    );
}
