import useHead from "../../hooks/useHead";
import './assets/style.css';
import ProductForm from "./components/ProductForm";
import Products from "./components/Products";

export default function Shop() {
    useHead({
        title: 'Shop',
        description: 'My shop description',
        keywords: 'shop description, appsaeed'
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
