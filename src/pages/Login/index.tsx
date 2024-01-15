import { useForm } from 'react-hook-form'
import AppButton from 'src/components/AppButton'
import AppInput from 'src/components/AppInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema, schema } from 'src/utils/rules'
import { useMutation } from 'react-query'
import { authService } from 'src/services/auth.service'
import { Link, useNavigate } from 'react-router-dom'
import { isAxiosUnprocessableEntityError, setProfileToLS } from 'src/utils/auth'
import { pathRoutes } from 'src/configs/path.routes'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.contexts'

type FormData = Pick<Schema, 'email' | 'password'>
const LoginSchema = schema.pick(['email', 'password'])

export default function Login() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(LoginSchema)
  })

  const loginMutation = useMutation({ mutationFn: (body: FormData) => authService.login(body) })
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
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
        <h1 className='text-2xl text-greenDark font-semibold mb-6'>Đăng Nhập</h1>
        <AppInput errorMessage={errors.email?.message} placeholder='Email' name='email' register={register} />
        <AppInput
          type='password'
          errorMessage={errors.password?.message}
          placeholder='Password'
          name='password'
          register={register}
        />
        <AppButton type='submit' widthIcon={false} className='w-full rounded-md'>
          ĐĂNG NHẬP
        </AppButton>
        <div className='text-xs mt-4'>
          <span>Bạn chưa có tài khoản?</span>
          <Link to={pathRoutes.register} className='ml-1 font-bold text-greenDark'>
            Đăng ký
          </Link>
        </div>
      </form>
    </div>
  )
}
