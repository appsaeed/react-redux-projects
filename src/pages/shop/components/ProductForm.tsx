import { useState } from "react";
import { useDispatch } from "react-redux";
import { productAdd } from "../redux/shopActions";

export default function ProductForm() {

    const initForm = {
        name: '',
        category: "Men clothes",
        price: 10,
        image_url: '',
        quantity: 10,
    }

    const dispatch = useDispatch();

    const [form, setForm] = useState(initForm)
    const [loading, setLoading] = useState({ imageGenerate: false, form: false })

    const generateImage = async () => {

        setLoading((prev) => ({ ...prev, imageGenerate: true }))

        const request = (await fetch('https://source.unsplash.com/random'));
        if (request?.url) {
            setForm((prev) => {
                return {
                    ...prev,
                    image_url: request.url
                }
            })
        }

        setLoading((prev) => ({ ...prev, imageGenerate: false }))
    }

    async function formSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading((p) => ({ ...p, form: true }))

        dispatch(productAdd(form))
        setForm(initForm);

        setLoading((p) => ({ ...p, form: false }));
        return false;
    }



    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form onSubmit={formSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                {/* product name */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputName">Product Name</label>
                    <input
                        className="addProductInput"
                        id="lws-inputName"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((prev) => {
                            return {
                                ...prev,
                                name: e.target.value
                            }
                        })}
                    />
                </div>
                {/* product category */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputCategory">Category</label>
                    <input
                        className="addProductInput"
                        id="lws-inputCategory"
                        name="category"
                        type="text"
                        required
                        value={form.category}
                        onChange={(e) => setForm((prev) => {
                            return {
                                ...prev,
                                category: e.target.value
                            }
                        })}
                    />
                </div>
                {/* product image url */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input
                        className="addProductInput"
                        id="lws-inputImage"
                        type="text"
                        required
                        name="image_url"
                        value={form.image_url}
                        onChange={(e) => setForm((prev) => {
                            return {
                                ...prev,
                                image_url: e.target.value
                            }
                        })}
                    />
                    <p onClick={generateImage} className={`flex cursor-pointer text-sm justify-end ${!loading.imageGenerate && 'underline'}`}>{loading.imageGenerate ? 'Loading...' : 'Generate image url'}</p>
                </div>
                {/* price & quantity container */}
                <div className="grid grid-cols-2 gap-8 pb-4">
                    {/* price */}
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input
                            className="addProductInput"
                            type="number"
                            id="lws-inputPrice"
                            required
                            name="price"
                            value={form.price}
                            onChange={(e) => setForm((prev) => {
                                return {
                                    ...prev,
                                    price: Number(e.target.value)
                                }
                            })}
                        />
                    </div>
                    {/* quantity */}
                    <div className="space-y-2">
                        <label htmlFor="lws-inputQuantity">Quantity</label>
                        <input
                            className="addProductInput"
                            type="number"
                            id="lws-inputQuantity"
                            required
                            name="quantity"
                            value={form.quantity}
                            onChange={(e) => setForm((prev) => {
                                return {
                                    ...prev,
                                    quantity: Number(e.target.value)
                                }
                            })}
                        />
                    </div>
                </div>
                {/* submit button */}
                <button disabled={loading.form} type="submit" id="lws-inputSubmit" className="submit bg-gray-900">
                    {loading.form ? 'Loading...' : 'Add Product'}
                </button>
            </form>
        </div>
    )
}
