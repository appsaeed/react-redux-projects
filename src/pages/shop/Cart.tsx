import settings from "../../app/settings"
import useHead from "../../hooks/useHead"
import Billing from "./components/Billing"
import CartItems from "./components/CartList"

export default function Cart() {
    useHead({
        title: ['Cart', 'Shop', settings.name].join(' | '),
    })
    return (
        <>
            <main className="py-16">
                <div className="container 2xl:px-8 px-2 mx-auto">
                    <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div className="cartListContainer">
                        <CartItems />
                        <Billing />
                    </div>
                </div>
            </main>
        </>

    )
}
