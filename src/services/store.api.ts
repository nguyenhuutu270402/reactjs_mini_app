import { Product } from 'src/types/util.type'
import http from 'src/utils/http'

export const URL_GET_ALL_CATEGORY = '/products/categories'
export const URL_GET_ALL_PRODUCT = '/products'

const storeAPI = {
    getAllCategory: async () => {
        const res = await http.get<string[]>(URL_GET_ALL_CATEGORY, {
        })
        return res.data
    },
    getAllProduct: async () => {
        const res = await http.get<Product[]>(URL_GET_ALL_PRODUCT, {
        })
        return res.data
    },
    getOneProduct: async (id: number) => {
        const res = await http.get<Product>(`/products/${id}`, {
        })
        return res.data
    },

}

export default storeAPI
