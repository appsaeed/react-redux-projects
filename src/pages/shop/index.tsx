import settings from "../../app/settings";
import useHead from "../../hooks/useHead";
import './assets/style.css';
import ProductForm from "./components/ProductForm";
import Products from "./components/Products";

export default function Shop() {
    useHead({
        title: 'Shop - ' + settings.name
    });
    return (
        <>
            <main className="py-16">
                <div className="productWrapper">
                    <Products />
                    <ProductForm />
                </div>
            </main>
        </>

    )
}
