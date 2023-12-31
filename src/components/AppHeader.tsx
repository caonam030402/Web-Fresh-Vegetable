import { pathImage } from 'src/configs/path.image'
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import AppSearchBar from './AppSearchBar'
import { FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import AppTooltip from './AppTooltip'

export default function AppHeader() {
  const listMenu = ['SẢN PHẨM', 'COMBO', 'KHUYẾN MÃI', 'GÓI THÀNH VIÊN', 'GÓC CHIA SẺ', 'VỀ CHÚNG TÔI ']
  return (
    <div className='bg-white sticky top-0 shadow-sm z-20'>
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
          <Link className='md:block hidden md:mr-10 mr-0 ' to=''>
            <img src={pathImage.logo} alt='' className='w-full' />
          </Link>
          <div className='flex-1'>
            <div className='lg:block hidden'>
              <AppSearchBar />
            </div>
            <div className='lg:flex hidden items-center gap-x-10 gap-y-3 mt-4 flex-wrap'>
              {listMenu.map((item, index) => (
                <Link to='' className='text-greenDark flex items-center gap-1 font-bold text-sm' key={index}>
                  {item}
                  <FaChevronDown size={13} />
                </Link>
              ))}
            </div>
          </div>
          <div className='flex gap-4 ml-14 justify-end'>
            <AppTooltip content='Tài khoản'>
              <Link
                type='button'
                to=''
                className='hover:bg-opacity-30 duration-300 transition-all w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-10'
              >
                <FiUser size={20} className='text-greenDark' />
              </Link>
            </AppTooltip>
            <AppTooltip content='Giỏ hàng'>
              <Link
                to=''
                className='hover:bg-opacity-30 duration-300 transition-all relative w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-10'
              >
                <FiShoppingCart size={20} className='text-greenDark' />
                <div className='rounded-full p-[11px] top-[-10%] right-[-10%] absolute w-3 h-3 text-white text-xs bg-red-600 flex items-center justify-center'>
                  10
                </div>
              </Link>
            </AppTooltip>
          </div>
        </div>
        <div className='lg:hidden block mt-6'>
          <AppSearchBar />
        </div>
      </div>
    </div>
  )
}
