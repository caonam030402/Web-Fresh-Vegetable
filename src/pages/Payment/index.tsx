import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { TfiLocationPin } from 'react-icons/tfi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserSchema, userSchema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { setProfileToLS } from 'src/utils/auth'
import { GrAdd } from 'react-icons/gr'
import { AppContext } from 'src/contexts/app.contexts'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { userService } from 'src/services/user.service'
import { useForm } from 'react-hook-form'
import { purchaseService } from 'src/services/purchase.service'
import { vnpPaymentService } from 'src/services/vnpPayment.service'
import { pathRoutes } from 'src/constants/path.routes'
import Modal from 'src/components/organisms/Model'
import Input from 'src/components/atoms/Input'
import { formatCurrency } from 'src/utils/utils'
import Button from 'src/components/atoms/Button'
import { purchasesStatus } from 'src/constants/purchase'

type FormData = Pick<UserSchema, 'name' | 'address' | 'phone'>
const profileSchema = userSchema.pick(['name', 'address', 'phone'])

export default function Payment() {
  const queryClient = useQueryClient()

  const [isModal, setIsModal] = useState({
    isOpenMyAddress: false,
    isOpenUpdateAddress: false,
    isOpenAddAddress: false
  })

  const [activePayment, setActivePayment] = useState({
    Athome: true,
    VnPay: false
  })

  const { purchasePayment, profile, setProfile } = useContext(AppContext)

  const [isOpenMethodPayment, setIsOpenMethodPayment] = useState(false)

  const updateProfileMutation = useMutation(userService.updateProfile)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      address: ''
    },
    resolver: yupResolver(profileSchema)
  })

  const handlePayment = (namePayment: 'ATHOME' | 'VNPAY') => {
    if (namePayment === 'ATHOME') {
      setActivePayment(() => {
        return { VnPay: false, Athome: true }
      })
    }

    if (namePayment === 'VNPAY') {
      setActivePayment(() => {
        return { Athome: false, VnPay: true }
      })
    }
  }

  const buyPurchaseMutation = useMutation({
    mutationFn: purchaseService.buyProducts,
    onSuccess: (data) => {
      queryClient.resetQueries({ queryKey: ['purchases', { status: purchasesStatus.inCart }] })
      toast.success(data.data.message, { autoClose: 1000 })
    }
  })

  const buyPurchaseByVNP = useMutation({
    mutationFn: vnpPaymentService.postPayment,
    onSuccess: (data) => {
      window.location.href = data.data.data
    }
  })

  const handleOpenMethodPayment = () => {
    setIsOpenMethodPayment(true)
  }

  const myElementRef = useRef<HTMLDivElement>(null)

  const totalCheckedPurchasePrice = useMemo(
    () =>
      purchasePayment.reduce((result, current) => {
        return result + current.product.price * current.buy_count
      }, 0),
    [purchasePayment]
  )

  const handleOpenModal = () => {
    if (isModal.isOpenMyAddress) {
      setIsModal({ ...isModal, isOpenMyAddress: false })
    } else {
      setIsModal({ ...isModal, isOpenMyAddress: true })
    }
  }

  const handleOpenUpdateAddressModal = () => {
    if (isModal.isOpenUpdateAddress) {
      setIsModal({ ...isModal, isOpenMyAddress: true, isOpenUpdateAddress: false })
    } else {
      setIsModal({ ...isModal, isOpenMyAddress: false, isOpenUpdateAddress: true })
    }
  }

  const handleOpenAddAddressModal = () => {
    if (isModal.isOpenAddAddress) {
      setIsModal({ ...isModal, isOpenMyAddress: true, isOpenAddAddress: false })
    } else {
      setIsModal({ ...isModal, isOpenMyAddress: false, isOpenAddAddress: true })
    }
  }

  const handleBuyPurchases = () => {
    if (profile?.address === undefined) {
      toast.error('Vui lòng điền địa chỉ trước khi mua')
    } else {
      if (purchasePayment.length > 0) {
        if (activePayment.Athome) {
          const body = purchasePayment.map((purchase) => ({
            purchase_id: purchase._id
          }))
          navigate(`${pathRoutes.historyPurchase}/?status=1`)
          buyPurchaseMutation.mutate(body)
        } else {
          const response = buyPurchaseByVNP.mutate({ amount: totalCheckedPurchasePrice, bankCode: '', language: 'vn' })
          console.log(response)
        }
      }
    }
  }

  const onSubmit = handleSubmit(async (data) => {
    const res = await updateProfileMutation.mutateAsync({
      ...data
    })
    toast.success(res.data.message)
    setProfileToLS(res.data.data)
    setProfile(res.data.data)
  })

  return (
    <div className='container mt-4'>
      <div className='bg-white p-3 shadow-sm md:p-6'>
        <div className='flex items-center gap-1 text-primary'>
          <TfiLocationPin className='text-xl' />
          <span className='text-[17px] capitalize'>Địa chỉ giao hàng</span>
        </div>
        <div className='mt-3 text-[15px]'>
          <span className='mr-3 font-bold'>{profile?.name ? profile.name : profile?.email}</span>
          <span>{profile?.address ? profile?.address : 'Vui lòng thêm địa chỉ'}</span>
          <button onClick={handleOpenModal} className='ml-4 text-blue-500'>
            Thay đổi
          </button>
        </div>
        {isModal.isOpenMyAddress && (
          <Modal handleOpenModal={handleOpenModal} title='Địa chỉ của tôi'>
            <div>
              <div className='flex gap-3 border-b-[0.2px] border-b-black/10 py-4'>
                <input type='radio' className='h-5 w-5 accent-primary focus:bg-primary' />
                <div className='flex-1'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <span className='text-text-black/60 text-base font-medium'>Nam Cao</span>
                      <div className='mx-2 h-5 w-[0.2px] bg-slate-400'></div>
                      <span className='text-black/50'>(+84) 382714916</span>
                    </div>
                    <button onClick={handleOpenUpdateAddressModal} className='text-blue-700'>
                      Cập nhập
                    </button>
                  </div>
                  <div className='mb-1 mt-2 text-black/40'>81 hoà tín Xã Ia Phang, Huyện Chư Pưh, Gia Lai</div>
                  <div className='flex items-center gap-2'>
                    <div className='border-[1px] border-primary px-1 text-primary'>Mặc định</div>
                    <div className='border-[1px] border-black/40 px-1'>Địa chỉ lấy hàng</div>
                    <div className='border-[1px] border-black/40 px-1'>Địa chỉ trả hàng</div>
                  </div>
                </div>
              </div>
              <div className='flex gap-3 py-4'>
                <input type='radio' className='h-5 w-5 accent-primary focus:bg-primary' />
                <div className='flex-1'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <span className='text-text-black/60 text-base font-medium'>Nam Cao</span>
                      <div className='mx-2 h-5 w-[0.2px] bg-slate-400'></div>
                      <span className='text-black/50'>(+84) 382714916</span>
                    </div>
                    <button onClick={handleOpenUpdateAddressModal} className='text-blue-700'>
                      Cập nhập
                    </button>
                  </div>
                  <div className='mb-1 mt-2 text-black/40'>81 hoà tín Xã Ia Phang, Huyện Chư Pưh, Gia Lai</div>
                  <div className='flex items-center gap-2'>
                    <div className='border-[1px] border-primary px-1 text-primary'>Mặc định</div>
                    <div className='border-[1px] border-black/40 px-1 text-black/40'>Địa chỉ lấy hàng</div>
                    <div className='border-[1px] border-black/40 px-1 text-black/40'>Địa chỉ trả hàng</div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleOpenAddAddressModal}
              className='mt-4 flex items-center gap-2 border-[1px] border-black/20 px-3 py-1 text-base text-black/60'
            >
              <GrAdd />
              <span className=''>Thêm địa chỉ mới</span>
            </button>
          </Modal>
        )}
        {isModal.isOpenUpdateAddress && (
          <Modal
            textButtonComebackCustom='Trở về'
            title='Cập nhập địa chỉ'
            handleOpenModal={handleOpenUpdateAddressModal}
          >
            <div className='flex w-full gap-4'>
              <div className='w-1/2'>
                <span className='text-xs text-gray-400'>Họ và tên</span>
                <Input />
              </div>
              <div className='w-1/2'>
                <span className='text-xs text-gray-400'>Số điện thoại</span>
                <Input />
              </div>
            </div>
            <div className=''>
              <span className='text-xs text-gray-400'>Tỉnh/Thành phố, Quận/Huyện, Phường/Xã</span>
              <Input />
            </div>

            <div className='mt-4 flex items-center'>
              <input type='checkbox' className='mr-2  h-[18px] w-[18px] flex-shrink-0 border-gray-100 accent-primary' />
              <div>Địa chỉ mặc định</div>
            </div>
          </Modal>
        )}
        {isModal.isOpenAddAddress && (
          <Modal textButtonComebackCustom='Trở về' title='Địa chỉ mới' handleOpenModal={handleOpenAddAddressModal}>
            <div>123</div>
          </Modal>
        )}
        {/* {isOpenModal && (
          <div className='fixed inset-0 z-50'>
            <form
              onSubmit={onSubmit}
              action=''
              className='absolute right-[50%] top-[50%] w-[85%] translate-x-[50%] translate-y-[-50%] rounded-sm bg-white p-6 text-left md:w-[40%]'
            >
              <h1 className='text-[20px] capitalize'>{t('new address')}</h1>
              <div className='mt-6'>
                <div ref={myElementRef} className='relative w-full'>
                  <Input
                    name='address'
                    register={register}
                    errorMessage={errors.address?.message}
                    placeholder={`${t('province/City')}, ${t('district/District')}, ${t('ward/Commune')}`}
                  ></Input>
                </div>
                <Input
                  errorMessage={errors.name?.message}
                  className='mt-3 placeholder:capitalize'
                  register={register}
                  name='name'
                  placeholder={t('full name')}
                ></Input>
                <Controller
                  control={control}
                  name='phone'
                  render={({ field }) => (
                    <InputNumber
                      placeholder={t('phone number')}
                      errorMessage={errors.phone?.message}
                      className='mt-3'
                      classNameInput=' placeholder:capitalize w-full flex-shrink-0 rounded-sm border-[1px] border-slate-300 px-2 py-2 outline-none'
                      {...field}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
              <div className='mt-7 flex justify-end gap-3'>
                <Button
                  type='button'
                  onClick={handleOpenModal}
                  className='flex w-[150px] items-center justify-center rounded-sm border py-[8px] text-sm '
                >
                  {t('cancel')}
                </Button>
                <Button
                  type='submit'
                  className='flex w-[150px] items-center justify-center rounded-sm bg-primary py-[8px] text-sm text-white hover:bg-primary/80'
                >
                  {t('complete')}
                </Button>
              </div>
            </form>
            <button onClick={handleOpenModal} type='button' className='h-full w-full bg-black/50'></button>
          </div>
        )} */}
      </div>
      <div className='mt-3 rounded-sm bg-white p-3 shadow-sm md:p-6'>
        <table className='text-sx w-full text-center'>
          <thead>
            <tr className='hidden text-gray-400 md:contents'>
              <th className='text-left text-lg font-normal capitalize text-gray-800'>Sản phẩm</th>
              <th className='font-normal capitalize'>Ví tiền</th>
              <th className='font-normal capitalize'>Số lượng</th>
              <th className='text-right font-normal capitalize'>Tổng thanh toán</th>
            </tr>
          </thead>
          <tbody>
            {purchasePayment.map((purchase, index) => (
              <tr key={index} className='text-center'>
                <td className='pt-3 pb-0 md:max-w-[300px] md:pt-6'>
                  <div className='flex items-start gap-3 md:items-center'>
                    <img className='h-14 w-14 shrink-0 border object-cover' src={purchase.product.image} alt='' />
                    <div className='w-full'>
                      <span className='text-left line-clamp-2'>{purchase.product.name}</span>
                      <div className='mt-2 flex justify-between md:hidden'>
                        <div className='pb-0'>x{formatCurrency(purchase.buy_count)}</div>
                        <div className='pb-0 font-bold text-primary'>
                          ₫{formatCurrency(purchase.buy_count * purchase.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className='hidden pb-0 md:table-cell md:pt-6'>₫{formatCurrency(purchase.price)}</td>
                <td className='hidden pb-0 md:table-cell md:pt-6'>{formatCurrency(purchase.buy_count)}</td>
                <td className='hidden pb-0 text-right md:table-cell md:pt-6'>
                  ₫{formatCurrency(purchase.buy_count * purchase.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='relative mt-3 bg-white p-3 shadow-sm md:p-6'>
        {!isOpenMethodPayment ? (
          <div className='flex items-center justify-between'>
            <div className='hidden text-lg font-normal capitalize text-gray-800 md:block'>Phương thức thanh toán</div>
            <div>
              <span className='mr-16 capitalize'>Thanh toán khi nhận hàng</span>
              <button onClick={handleOpenMethodPayment} className='uppercase text-blue-600'>
                Thay đổi
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className='flex items-center gap-5 md:mt-3'>
              <h1 className='hidden text-lg md:block'>Phương thức thanh toán</h1>
              <div className='w-full'>
                <button
                  onClick={() => handlePayment('ATHOME')}
                  className={`mr-3 border-[1px] px-3 py-2 ${
                    activePayment.Athome && 'border-[1px] border-primary text-primary'
                  }`}
                >
                  Vận chuyển
                </button>
                <button
                  className={`border-[1px] px-3 py-2 ${
                    activePayment.VnPay && ' border-[1px] border-primary text-primary'
                  }`}
                  onClick={() => handlePayment('VNPAY')}
                >
                  Thanh toán VNP
                </button>
              </div>
            </div>
          </div>
        )}
        <div className='mt-4 flex items-end justify-between md:mt-6'>
          <div className='hidden md:block'>
            nhấp vào Đặt hàng có nghĩa là bạn đồng ý tuân theo
            <span className='text-blue-600'> điều khoản</span>
          </div>
          <div className='flex items-center md:flex-col md:items-end'>
            <div className='capitalize'>
              Tổng thanh toán:
              <span className='text-xl text-primary md:ml-4 md:text-2xl'>
                ₫{formatCurrency(totalCheckedPurchasePrice)}
              </span>
            </div>
            <Button
              onClick={handleBuyPurchases}
              className='flex w-[180px] items-center justify-center rounded-sm bg-primary py-[10px] text-sm capitalize text-white md:mt-4'
            >
              Thanh toán
            </Button>
          </div>
        </div>
        {/* <div className='absolute top-[35%] right-0 h-[1px] w-full bg-gray-200'></div> */}
      </div>
    </div>
  )
}
