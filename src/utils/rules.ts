import * as yup from 'yup'

const handleConfirmPasswordYup = (refString: string) => {
  return yup
    .string()
    .required('Confirm password là bắt buộc')
    .oneOf([yup.ref(refString)], 'Nhập lại password không khớp')
}

function testPriceMinMax(this: yup.TestContext<yup.AnyObject>) {
  const { price_min, price_max } = this.parent as { price_min: string; price_max: string }
  if (price_min !== '' && price_max !== '') {
    return Number(price_max) >= Number(price_min)
  }
  return price_min !== '' || price_max !== ''
}

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .max(160, 'Độ dài từ 5 - 160 kí tự')
    .min(5, 'Độ dài từ 5 - 160 kí tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .max(160, 'Độ dài từ 5 - 160 kí tự')
    .min(6, 'Độ dài từ 5 - 160 kí tự'),
  confirm_password: handleConfirmPasswordYup('password'),
  price_min: yup.string().test({
    name: 'price-not-allowed',
    message: 'Vui lòng điền khoảng giá phù hợp',
    test: testPriceMinMax
  }),
  price_max: yup.string().typeError('Số lượng phải là một số').test({
    name: 'price-not-allowed',
    message: 'Vui lòng điền khoảng giá phù hợp',
    test: testPriceMinMax
  }),
  name: yup.string().trim().required('Tên sản phẩm là bắt buộc')
})

export type Schema = yup.InferType<typeof schema>
