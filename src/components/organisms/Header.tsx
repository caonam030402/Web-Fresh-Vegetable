import { pathImage } from 'src/constants/path.image'
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import AppSearchBar from '../molecules/AppSearchBar'
import { FaChevronDown } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { useContext, useEffect } from 'react'
import { AppContext } from 'src/contexts/app.contexts'
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'
import { authService } from 'src/services/auth.service'
import { pathRoutes } from 'src/constants/path.routes'
import Popover from './Popover'
import Button from '../atoms/Button'
import { purchasesStatus } from 'src/constants/purchase'
import { purchaseService } from 'src/services/purchase.service'
import { formatCurrency, getAvatarUrl } from 'src/utils/utils'
import { IoIosHelpCircleOutline, IoIosNotificationsOutline, IoMdLogIn } from 'react-icons/io'
import { TbTruckDelivery } from 'react-icons/tb'

export default function Header() {
  const MAX_PURCHASES = 5
  const { setIsAuthenticated, setProfile, profile, isAuthenticated, isAdmin } = useContext(AppContext)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data: purchasesWaitForConfirmation } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.waitForConfirmation }],
    queryFn: () => purchaseService.getPurchasesWithParam(purchasesStatus.waitForConfirmation)
  })

  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      navigate(pathRoutes.login)
      queryClient.removeQueries({ queryKey: ['purchases', { status: purchasesStatus.inCart }] })
      setProfile(null)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  const menuItems = [
    { name: 'SẢN PHẨM', path: pathRoutes.productList },
    { name: 'KHUYẾN MÃI', path: '/khuyen-mai' },
    { name: 'GÓC CHIA SẺ', path: '/goc-chia-se' },
    { name: 'GÓI THÀNH VIÊN', path: '/goc-chia-se' },
    { name: 'VỀ CHÚNG TÔI', path: '/ve-chung-toi' }
  ]

  const { data: purchasesInCartData, refetch } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseService.getPurchases({ status: purchasesStatus.inCart }),
    enabled: isAuthenticated
  })

  useEffect(() => {
    refetch()
  }, [refetch])

  return (
    <div className='bg-white '>
      <div className='bg-primary text-white text-xs py-2'>
        <div className='container flex items-center justify-center md:justify-between'>
          <div className='flex items-center gap-2'>
            <TbTruckDelivery className='text-xl' />
            <div>Free ship cho đơn hàng từ 350k. Giao hàng siêu tốc trong 2h.</div>
          </div>
          <div className='hidden md:flex items-center gap-10'>
            <div className='flex items-center gap-1'>
              <IoIosHelpCircleOutline className='text-xl' />
              <span>Hỗ Trợ</span>
            </div>
            <Popover
              renderPopover={
                <div className=' w-[400px] overflow-auto rounded-md bg-white shadow-md scrollbar scrollbar-thumb-slate-200 scrollbar-thumb-rounded scrollbar-w-2'>
                  <div className='mb-3 flex justify-between px-5 pt-5'>
                    <h1 className='text-base font-bold'>Thông Báo</h1>
                    <h1 className='cursor-pointer text-[13px]'>Xem tất cả</h1>
                  </div>
                  {isAdmin && (
                    <div className=''>
                      {purchasesWaitForConfirmation?.data.data?.map((purchase, index) => (
                        <button key={index} className='flex w-full items-center px-5 py-3 last:pb-5 hover:bg-slate-50'>
                          <img
                            className='mr-3 h-[50px] w-[50px] rounded-md border'
                            src={purchase.product.image}
                            alt=''
                          />
                          <div className='text-left'>
                            <h1 className='text-sm line-clamp-1'>{purchase.product.name}</h1>
                            <p className='mt-1 text-xs'>
                              Khách hàng đặt lúc{' '}
                              <span className='font-bold'>{new Date(purchase.createdAt).toLocaleString('vi-VN')}</span>
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              }
            >
              <div className='cursor-pointer flex items-center gap-1'>
                <IoIosNotificationsOutline className='text-xl' />
                <span>Thông Báo</span>
              </div>
            </Popover>

            {isAuthenticated && (
              <Popover
                renderPopover={
                  <div className='shadow-xl bg-slate-50 p-3 rounded-md'>
                    {isAuthenticated ? (
                      <div>
                        {!isAdmin ? (
                          <div className='flex flex-col gap-2 mt-2 items-start'>
                            <Link to={pathRoutes.profile} className='hover:text-primary'>
                              Tài khoản của tôi
                            </Link>
                            <Link to={pathRoutes.historyPurchase} className='hover:text-primary'>
                              Đơn mua
                            </Link>
                            <button onClick={handleLogout} className='hover:text-primary'>
                              Đăng xuất
                            </button>
                          </div>
                        ) : (
                          <div className='flex flex-col gap-2 mt-2 items-start'>
                            <Link to={pathRoutes.product_management} className='hover:text-primary'>
                              Quản lý sản phẩm
                            </Link>
                            <Link to={pathRoutes.order_management} className='hover:text-primary'>
                              Quản lý đơn hàng
                            </Link>
                            <button onClick={handleLogout} className='hover:text-primary'>
                              Đăng xuất
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className='flex flex-col gap-2 text-xs mt-2 items-start'>
                        <Link to={pathRoutes.login} className='hover:text-primary'>
                          Đăng nhập
                        </Link>
                        <Link to={pathRoutes.register} className='hover:text-primary'>
                          Đăng kí
                        </Link>
                      </div>
                    )}
                  </div>
                }
              >
                <Link
                  type='button'
                  to=''
                  className='hover:bg-opacity-30 duration-300 transition-all gap-3 flex items-center justify-center rounded-full bg-primary bg-opacity-10'
                >
                  <img className='object-cover w-6 h-6' src={getAvatarUrl(profile?.avatar)} alt='' />
                  <div className=''>
                    {profile?.email}{' '}
                    {isAdmin && (
                      <span className='bg-white text-primary px-2 rounded-sm ml-1 uppercase font-semibold'>admin</span>
                    )}
                  </div>
                </Link>
              </Popover>
            )}
            {!isAuthenticated && (
              <Link to={pathRoutes.login} className='flex items-center gap-1'>
                <IoMdLogIn className='text-lg' /> <span>Đăng nhập</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className='container py-4'>
        <div className='flex items-center required transition-all'>
          <button>
            <HiMenu size={25} className='block md:hidden text-primary' />
          </button>
          <Link className='md:hidden absolute w-[100px] right-1/2 translate-x-[50%] md:mr-10 mr-0 ' to=''>
            <img src={pathImage.logo} alt='' className='' />
          </Link>
          <Link className='md:block hidden md:mr-10 mr-0 ' to={pathRoutes.home}>
            <img src={pathImage.logo} alt='' className='w-full' />
          </Link>
          <div className='flex-1'>
            <div className='lg:block hidden'>
              <AppSearchBar />
            </div>
            <div className='lg:flex hidden items-center gap-x-10 gap-y-3 mt-4 flex-wrap'>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className='text-greenDark capitalize flex items-center gap-1 font-bold text-xs'
                >
                  {item.name}
                  <FaChevronDown size={8} />
                </Link>
              ))}
            </div>
          </div>

          <div className='flex gap-4 ml-14 justify-end'>
            <Popover
              renderPopover={
                <div className=' w-[25vw] bg-white shadow-lg rounded-md'>
                  {Number(purchasesInCartData?.data.data.length) > 0 ? (
                    <div>
                      <h1 className='px-3 font-bold pt-3 mb-2 flex justify-between text-sm text-greenDark'>
                        Sản phẩm mới thêm
                      </h1>
                      {purchasesInCartData?.data.data.slice(0, MAX_PURCHASES).map((item, index) => {
                        return (
                          <Link key={index} to='' className='flex p-3 ease duration-300 hover:bg-primary/10'>
                            <div className='w-10 h-10 mr-3'>
                              <img
                                className='w-full h-full object-cover rounded-sm'
                                src={item.product.image}
                                alt={item.product.image}
                              />
                            </div>
                            <div className='flex justify-between flex-1 gap-3'>
                              <div className='line-clamp-3 text-xs'>{item.product.name}</div>
                              <div className='text-xs text-greenDark'>{formatCurrency(item.price)}₫</div>
                            </div>
                          </Link>
                        )
                      })}
                      <div className='px-3 pb-3 mt-1 flex justify-between items-center'>
                        <h1 className='text-[10px]'>
                          {Number(purchasesInCartData?.data.data.length) <= MAX_PURCHASES
                            ? 0
                            : Number(purchasesInCartData?.data.data.length) - MAX_PURCHASES}{' '}
                          thêm vào giỏ hàng
                        </h1>
                        <Link to={pathRoutes.cart}>
                          <Button size='medium' className='text-xs py-[9px]' widthIcon={false}>
                            Xem Giỏ Hàng
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className='p-9 flex flex-col items-center'>
                      <img className='w-[60%]' src={pathImage.noCard} alt='' />
                      <p className='mt-4'>Chưa có sản phẩm nào</p>
                    </div>
                  )}
                </div>
              }
            >
              <Link
                to={!isAdmin ? pathRoutes.cart : pathRoutes.order_management}
                className='hover:bg-opacity-30 duration-300 transition-all relative w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-10'
              >
                <FiShoppingCart size={20} className='text-greenDark' />
                {(purchasesInCartData?.data.data.length as number) > 0 && (
                  <div className='rounded-full p-[11px] top-[-10%] right-[-10%] absolute w-3 h-3 text-white text-xs bg-red-600 flex items-center justify-center'>
                    {purchasesInCartData?.data.data.length}
                  </div>
                )}
              </Link>
            </Popover>
          </div>
        </div>
        <div className='lg:hidden block mt-6'>
          <AppSearchBar />
        </div>
      </div>
    </div>
  )
}
