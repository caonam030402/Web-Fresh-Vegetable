interface SuccessResponse<D> {
  message: string
  data: D
}

interface ErrorResponse<D> {
  message: string
  data?: D
}

type NoUndefineField<T> = {
  [P in keyof T]-?: NoUndefineField<NonNullable<T[P]>>
}
