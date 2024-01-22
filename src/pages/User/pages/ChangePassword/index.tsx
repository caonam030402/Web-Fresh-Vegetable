import { useForm } from 'react-hook-form'
import { UserSchema, userSchema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import omit from 'lodash/omit'
import { isAxiosUnprocessableEntityError } from 'src/utils/auth'
import { useMutation } from 'react-query'
import { userService } from 'src/services/user.service'
import Input from 'src/components/atoms/Input'
import Button from 'src/components/atoms/Button'

type FormData = Pick<UserSchema, 'password' | 'confirm_password' | 'new_password'>
const profileSchema = userSchema.pick(['confirm_password', 'password', 'new_password'])

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    watch
  } = useForm<FormData>({
    defaultValues: {
      confirm_password: '',
      new_password: '',
      password: ''
    },
    resolver: yupResolver(profileSchema)
  })

  const updateProfileMutation = useMutation(userService.updateProfile)

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await updateProfileMutation.mutateAsync(omit(data, ['confirm_password']))
      toast.success(res.data.message)
      reset()
    } catch (error) {
      const isError = isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)
      if (isError) {
        const formError = error.response?.data.data
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof FormData, {
              message: formError[key as keyof FormData],
              type: 'Server'
            })
          })
        }
      }
    }
  })

  const checkInputEmpty = () => {
    const valueInput = watch('password') && watch('confirm_password') && watch('new_password')
    if (valueInput !== '') {
      return false
    }
    return true
  }

  return (
    <div className=' text-gray-700 shadow-sm'>
      <div className='mb-1 text-xl capitalize'>Đổi mật khẩu</div>
      <div>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</div>
      <div className='my-4 h-[1px] w-full bg-slate-100 md:my-8'></div>
      <div className='grid grid-cols-12 md:gap-9'>
        <form className='col-span-12 gap-8 md:col-span-8' action='' onSubmit={onSubmit}>
          <table className='w-full'>
            <tbody>
              <tr className=''>
                <td className='pr-[20px] text-right'>Mật Khẩu Cũ</td>
                <td className='w-full md:w-[75%]'>
                  <div className='align-items 2px h-[40px] w-full'>
                    <Input
                      register={register}
                      errorMessage={errors.password?.message}
                      name='password'
                      placeholder='Mật Khẩu Cũ'
                      type='password'
                    />
                  </div>
                </td>
              </tr>
              <tr className=''>
                <td className='pr-[20px] text-right'>Mật Khẩu Mới</td>
                <td className='w-[75%]'>
                  <div className='align-items 2px h-[40px] w-full'>
                    <Input
                      errorMessage={errors.new_password?.message}
                      register={register}
                      name='new_password'
                      placeholder='Mật Khẩu Mới'
                      type='password'
                    />
                  </div>
                </td>
              </tr>
              <tr className=''>
                <td className='pr-[20px] text-right'>Xác Nhận Mật Khẩu</td>
                <td className='w-[75%]'>
                  <div className='align-items 2px h-[40px] w-full'>
                    <Input
                      errorMessage={errors.confirm_password?.message}
                      register={register}
                      name='confirm_password'
                      type='password'
                      placeholder='Xác Nhận Mật Khẩu'
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className='hidden md:block'></td>
                <td className='p-0'>
                  <Button
                    widthIcon={false}
                    disabled={updateProfileMutation.isLoading || checkInputEmpty()}
                    type='submit'
                    className='rounded-sm bg-primaryColor px-5 py-2 text-white'
                  >
                    Lưu
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className='col-span-4 hidden md:block'></div>
      </div>
    </div>
  )
}
