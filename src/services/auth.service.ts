import { pathRoutes } from 'src/constants/path.routes'
import { http } from 'src/utils/http'

export const authService = {
  register(body: { email: string; password: string }) {
    return http.post<AuthResponse>(pathRoutes.register, body)
  },
  login(body: { email: string; password: string }) {
    return http.post<AuthResponse>(pathRoutes.login, body)
  },
  logout() {
    return http.post(pathRoutes.logout)
  },
  getPayment(_id: string) {
    return http.get<SuccessResponse<{ isAdmin: boolean }>>(`/is-admin/${_id}`)
  }
}
