import { http } from 'src/utils/http'

const URL = 'products'

export const productService = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccessResponse<ProductList>>(URL, { params })
  },
  getProductDetail(id: string) {
    return http.get<SuccessResponse<Product>>(`${URL}/${id}`)
  }
}
