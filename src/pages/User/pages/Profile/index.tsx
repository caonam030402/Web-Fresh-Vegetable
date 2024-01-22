/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import DateSelect from '../../components/DateSelect'
import { toast } from 'react-toastify'
import { isAxiosUnprocessableEntityError, setProfileToLS } from 'src/utils/auth'
import { getAvatarUrl } from 'src/utils/utils'
import { UserSchema, userSchema } from 'src/utils/rules'
import { AppContext } from 'src/contexts/app.contexts'
import { useMutation, useQuery } from 'react-query'
import { userService } from 'src/services/user.service'
import Input from 'src/components/atoms/Input'
import { InputNumber } from 'src/components/atoms/InputNumber'
import InputFile from 'src/components/atoms/InputFile'
import Button from 'src/components/atoms/Button'

type FormData = Pick<UserSchema, 'name' | 'address' | 'phone' | 'date_of_birth' | 'avatar'>
type FormDataError = Omit<FormData, 'date_of_birth'> & {
  date_of_birth?: string
}
const profileSchema = userSchema.pick(['name', 'address', 'phone', 'date_of_birth', 'avatar'])

export default function Profile() {
  const { setProfile } = useContext(AppContext)
  const [file, setFile] = useState<File>()

  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : ''
  }, [file])

  const { data: profileData, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: userService.getProfile
  })

  const profile = profileData?.data.data
  const updateProfileMutation = useMutation(userService.updateProfile)
  const uploadAvatarMutation = useMutation(userService.uploadAvatar)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    setError,
    watch
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      avatar: '',
      date_of_birth: new Date(1990, 0, 1)
    },
    resolver: yupResolver(profileSchema)
  })

  useEffect(() => {
    if (profile !== undefined) {
      setValue('name', profile.name as string)
      setValue('phone', profile.phone as string)
      setValue('address', profile.address as string)
      setValue('avatar', profile.avatar)
      setValue('date_of_birth', profile.date_of_birth ? new Date(profile.date_of_birth) : new Date(1990, 0, 1))
    }
  }, [profile, setValue])

  const onSubmit = handleSubmit(async (data) => {
    try {
      let avatarName = avatar

      if (file) {
        const form = new FormData()

        form.append('image', file)
        const uploadRes = await uploadAvatarMutation.mutateAsync(form)

        avatarName = uploadRes.data.data
        setValue('avatar', avatarName)
      }

      const res = await updateProfileMutation.mutateAsync({
        ...data,
        date_of_birth: data.date_of_birth?.toISOString(),
        avatar: avatarName
      })
      setProfileToLS(res.data.data)
      setProfile(res.data.data)
      refetch()
      toast.success(res.data.message)
    } catch (error) {
      const isError = isAxiosUnprocessableEntityError<ErrorResponse<FormDataError>>(errors)
      if (isError) {
        const formError = errors.response?.data.data
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof FormDataError, {
              message: formError[key as keyof FormDataError],
              type: 'Server'
            })
          })
        }
      }
    }
  })

  const handleChangeFile = (file?: File) => {
    setFile(file)
  }

  const avatar = watch('avatar')

  return (
    <div className=' text-gray-700'>
      <div className='mb-1 text-xl font-medium'>Hồ sơ của tôi</div>
      <div>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      <div className='my-8 h-[1px] w-full bg-slate-100'></div>
      <div className='grid grid-cols-12 md:gap-9'>
        <form className='order-2 col-span-12 gap-8 lg:order-1 lg:col-span-8' action='' onSubmit={onSubmit}>
          <table className='w-full'>
            <tbody>
              <tr>
                <td className='pr-[20px] text-right'>Email</td>
                <td>{profile?.email}</td>
              </tr>
              <tr className=''>
                <td className='pr-[20px] text-right'>Tên</td>
                <td className='w-[75%]'>
                  <div className='align-items 2px h-[40px] w-full'>
                    <Input
                      register={register}
                      name='name'
                      placeholder='Tên'
                      errorMessage={errors.name?.message}
                      type='text'
                    />
                  </div>
                </td>
              </tr>
              <tr className=''>
                <td className='pr-[20px] text-right'>Số điện thoại</td>
                <td className='w-[75%]'>
                  <div className='align-items 2px flex h-[40px] w-full'>
                    <Controller
                      control={control}
                      name='phone'
                      render={({ field }) => (
                        <InputNumber
                          placeholder='Số Điện Thoại'
                          errorMessage={errors.phone?.message}
                          {...field}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </div>
                </td>
              </tr>
              <tr className=''>
                <td className='pr-[20px] text-right'>Địa chỉ</td>
                <td className='w-[75%]'>
                  <div className='align-items 2px h-[40px] w-full'>
                    <Input
                      register={register}
                      name='address'
                      placeholder='Địa Chỉ'
                      errorMessage={errors.address?.message}
                      type='text'
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className='pr-[20px] text-right'>Ngày sinh</td>
                <td>
                  <Controller
                    control={control}
                    name='date_of_birth'
                    render={({ field }) => (
                      <DateSelect
                        errorMessage={errors.date_of_birth?.message}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td className='p-0 text-right'>
                  <Button widthIcon={false} type='submit' className='rounded-sm bg-primaryColor px-5 py-2 text-white'>
                    Lưu
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className='lg-order-2 order-1 col-span-12 lg:col-span-4 '>
          <div className='border-slate-200 lg:border-l-[1px]'>
            <div className='flex flex-col items-center justify-center px-14 py-6'>
              <img
                src={previewImage || getAvatarUrl(profile?.avatar)}
                alt=''
                className='h-[100px] w-[100px] rounded-full object-cover'
              />
              <InputFile name='avatar' onChange={handleChangeFile} />
              <p className='text-center text-sm text-gray-500 lg:text-left'>
                {' '}
                Dung lượng file tối đa 1 MB Định dạng:.JPEG, .PNG
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
