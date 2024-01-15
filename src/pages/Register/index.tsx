import { useForm } from 'react-hook-form'
import AppButton from 'src/components/AppButton'
import AppInput from 'src/components/AppInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema, schema } from 'src/utils/rules'
import { useMutation } from 'react-query'
import { authService } from 'src/services/auth.service'
import { Link, useNavigate } from 'react-router-dom'
import { isAxiosUnprocessableEntityError, profileLS } from 'src/utils/auth'
import { pathRoutes } from 'src/configs/path.routes'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
const RegisterSchema = schema.pick(['email', 'password', 'confirm_password'])

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(RegisterSchema)
  })

  const registerMutation = useMutation({ mutationFn: (body: FormData) => authService.register(body) })
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    registerMutation.mutate(data, {
      onSuccess: (data) => {
        profileLS.setProfileToLS(data.data.data.user)
        navigate('/')
      },
      onError: (errors) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(errors)) {
          const formError = errors.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData]
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='mx-auto bg-primary py-[80px] text-center'>
      <form onSubmit={onSubmit} className='w-[60vh] mx-auto bg-white p-8 rounded-md shadow-md'>
        <h1 className='text-2xl text-greenDark font-semibold mb-6'>Đăng Ký</h1>
        <AppInput errorMessage={errors.email?.message} placeholder='Email' name='email' register={register} />
        <AppInput errorMessage={errors.password?.message} placeholder='Password' name='password' register={register} />
        <AppInput
          errorMessage={errors.confirm_password?.message}
          placeholder='Comfirm Password'
          name='confirm_password'
          register={register}
        />
        <AppButton type='submit' widthIcon={false} className='w-full rounded-md'>
          ĐĂNG KÝ
        </AppButton>
        <div className='text-xs mt-4'>
          <span>Bạn đã có tài khoản?</span>
          <Link to={pathRoutes.login} className='ml-1 font-bold text-greenDark'>
            Đăng ký
          </Link>
        </div>
      </form>
    </div>
  )
}
