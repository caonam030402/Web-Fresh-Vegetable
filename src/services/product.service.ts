import { http } from 'src/utils/http'
import { ProductSchema } from 'src/utils/rules'

const URL = 'products'

export const productService = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccessResponse<ProductList>>(URL, { params })
  },
  getProductDetail(id: string) {
    return http.get<SuccessResponse<Product>>(`${URL}/${id}`)
  },
  getAProduct(id: string) {
    return http.get<SuccessResponse<Product>>(`${URL}/${id}`)
  },
  deleteProduct(id: string) {
    return http.delete(`${URL}/delete-product/${id}`)
  },
  addProduct(body: ProductSchema) {
    return http.post<SuccessResponse<Product>>(`${URL}/add-product`, body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  upLoadImageProducts(body: FormData) {
    return http.post<SuccessResponse<string>>('product/upload-image', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  updateProduct(body: ProductSchema) {
    return http.put(`${URL}/update-product`, body)
  }
}
