import { http } from 'src/utils/http'

interface BodyPayment {
  amount: number
  bankCode: string
  language: 'vn' | 'en'
}

export const vnpPaymentService = {
  postPayment(body: BodyPayment) {
    return http.post<SuccessResponse<string>>('payment/create_payment_url', body)
  },
  getPayment(queryParam: string) {
    return http.get(`payment/return_payment/${queryParam}`)
  }
}
