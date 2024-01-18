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

export const userSchema = yup.object({
  name: yup.string().required('Vui lòng nhập tên').max(50, 'Độ dài tối đa 50 kí tự').min(5, 'Độ tối thiểu 5 kí tự'),
  phone: yup
    .string()
    .required('Vui lòng nhập số điện thoại')
    .max(20, 'Độ dài tối đa 20 kí tự')
    .min(5, 'Độ tối thiểu 5 kí tự'),
  address: yup
    .string()
    .required('Vui lòng nhập địa chỉ')
    .max(160, 'Độ dài tối đa 160 kí tự')
    .min(20, 'Độ tối thiểu 20 kí tự'),
  avatar: yup.string().max(1000, 'Độ dài tối đa 1000 kí tự'),
  date_of_birth: yup.date().max(new Date(), 'Hãy chọn một ngày trong quá khứ'),
  password: schema.fields['password'] as yup.StringSchema<string | undefined>,
  new_password: schema.fields['password'] as yup.StringSchema<string | undefined>,
  confirm_password: handleConfirmPasswordYup('new_password')
})

// Schema definition to validate the values provided in input fields of signup form
export type UserSchema = yup.InferType<typeof userSchema>

export type Schema = yup.InferType<typeof schema>
