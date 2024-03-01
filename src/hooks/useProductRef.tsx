import useProducts from './useProducts'

export default function useProductRef() {
    const products = useProducts()
    return (product_id: number) => products.find(item => item.id === product_id)
}
