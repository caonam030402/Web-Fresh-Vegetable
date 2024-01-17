import { pathImage } from 'src/constants/path.image'
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import AppSearchBar from '../molecules/AppSearchBar'
import { FaChevronDown } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import Tooltip from './Tooltip'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.contexts'
import { useMutation } from 'react-query'
import { authService } from 'src/services/auth.service'
import { pathRoutes } from 'src/constants/path.routes'
import Popover from './Popover'
import Button from '../atoms/Button'

export default function Header() {
  const { setIsAuthenticated, setProfile, profile, isAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      navigate(pathRoutes.login)
      setProfile(null)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  const listMenu = ['SẢN PHẨM', 'KHUYẾN MÃI', 'GÓI THÀNH VIÊN', 'GÓC CHIA SẺ', 'VỀ CHÚNG TÔI ']
  return (
    <div className='bg-white sticky top-0 shadow-sm z-10'>
      <div className='bg-primary text-white text-xs py-2'>
        <div className='container flex items-center justify-center md:justify-between'>
          <div>Free ship cho đơn hàng từ 350k. Giao hàng siêu tốc trong 2h.</div>
          <div className='hidden md:flex items-center gap-10'>
            <div>Email: cskh@bio-ngon.com</div>
            <div>Hotline: 0786416477</div>
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
          <Link className='md:block hidden md:mr-10 mr-0 ' to={pathRoutes.productList}>
            <img src={pathImage.logo} alt='' className='w-full' />
          </Link>
          <div className='flex-1'>
            <div className='lg:block hidden'>
              <AppSearchBar />
            </div>
            <div className='lg:flex hidden items-center gap-x-10 gap-y-3 mt-4 flex-wrap'>
              {listMenu.map((item, index) => (
                <Link key={index} to='' className='text-greenDark flex items-center gap-1 font-bold text-sm'>
                  {item}
                  <FaChevronDown size={13} />
                </Link>
              ))}
            </div>
          </div>

          <div className='flex gap-4 ml-14 justify-end'>
            <Popover
              renderPopover={
                <div className='shadow-xl bg-slate-50 p-3 rounded-md'>
                  {isAuthenticated ? (
                    <div>
                      <div className='font-medium text-sm text-greenDark'> {profile?.email}</div>
                      <div className='w-full h-[1px] bg-neutral-300 my-1'></div>
                      <div className='flex flex-col gap-2 text-xs mt-2 items-start'>
                        <Link to='' className='hover:text-primary'>
                          Tài khoản của tôi
                        </Link>
                        <Link to='' className='hover:text-primary'>
                          Đơn mua
                        </Link>
                        <button onClick={handleLogout} className='hover:text-primary'>
                          Đăng xuất
                        </button>
                      </div>
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
                className='hover:bg-opacity-30 duration-300 transition-all w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-10'
              >
                <FiUser size={20} className='text-greenDark' />
              </Link>
            </Popover>
            <Popover
              renderPopover={
                <div className=' w-[25vw] bg-white shadow-lg rounded-md'>
                  <h1 className='px-3 font-bold pt-3 mb-2 flex justify-between text-sm text-greenDark'>
                    Sản phẩm mới thêm
                  </h1>
                  {Array(1)
                    .fill(0)
                    .map((item, index) => {
                      return (
                        <Link key={index} to='' className='flex p-3 ease duration-300 hover:bg-primary/10'>
                          <div className='w-10 h-10 mr-3'>
                            <img
                              className='w-full h-full object-cover rounded-sm'
                              src='https://cdn.pixabay.com/photo/2016/07/16/20/48/peaches-1522680_640.jpg'
                              alt=''
                            />
                          </div>
                          <div className='flex justify-between flex-1 gap-3'>
                            <div className='line-clamp-2 text-xs'>
                              Tía tô Hữu cơ Tía tô Hữu cơ Tía tô Hữu cơ Tía tô Hữu cơ
                            </div>
                            <div className='text-xs text-greenDark'>25.000đ</div>
                          </div>
                        </Link>
                      )
                    })}
                  <div className='px-3 pb-3 mt-1 flex justify-between items-center'>
                    <h1 className='text-[10px]'> 15 thêm vào giỏ hàng</h1>
                    <Button size='medium' className='text-xs py-[9px]' widthIcon={false}>
                      Xem Giỏ Hàng
                    </Button>
                  </div>
                </div>
              }
            >
              <Link
                to=''
                className='hover:bg-opacity-30 duration-300 transition-all relative w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-10'
              >
                <FiShoppingCart size={20} className='text-greenDark' />
                <div className='rounded-full p-[11px] top-[-10%] right-[-10%] absolute w-3 h-3 text-white text-xs bg-red-600 flex items-center justify-center'>
                  10
                </div>
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
