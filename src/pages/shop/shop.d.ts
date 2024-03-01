export type ProductType = {
    id: number;
    name: string;
    category: string;
    image_url: string;
    price: number;
    quantity: number;
    currency?: string;
}

export type CartItemType = {
    id: number
    product_id: number,
    quantity: number
}