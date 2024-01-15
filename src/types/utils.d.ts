interface SuccessResponse<D> {
  message: string
  data: D
}

interface ErrorResponse<D> {
  message: string
  data?: D
}
