import useProducts from './useProducts'

export default function useProduct(product_id: number) {
    return useProducts().find(item => item.id === product_id)
}
