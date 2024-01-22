import { http } from 'src/utils/http'

const URL = 'categories'

export const categoryService = {
  getCategories() {
    return http.get<SuccessResponse<Category[]>>(URL)
  }
}
