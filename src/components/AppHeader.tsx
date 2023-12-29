import { pathImage } from 'src/configs/path.image'
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import AppSearchBar from './AppSearchBar'
import { FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function AppHeader() {
  const listMenu = ['SẢN PHẨM', 'COMBO', 'KHUYẾN MÃI', 'GÓI THÀNH VIÊN', 'GÓC CHIA SẺ', 'VỀ CHÚNG TÔI ']
  return (
    <div className='bg-white'>
      <div className='bg-primary text-white text-xs py-2'>
        <div className='container flex items-center justify-between'>
          <div>Free ship cho đơn hàng từ 350k. Giao hàng siêu tốc trong 2h.</div>
          <div className='flex items-center gap-10'>
            <div>Email: cskh@bio-ngon.com</div>
            <div>Hotline: 0786416477</div>
          </div>
        </div>
      </div>
      <div className='container py-4 flex items-center'>
        <Link to=''>
          <img src={pathImage.logo} alt='' className='mr-10' />
        </Link>
        <div className='flex-1'>
          <AppSearchBar />
          <div className='flex items-center gap-x-10 gap-y-3 mt-4 flex-wrap'>
            {listMenu.map((item, index) => (
              <Link to='' className='text-greenDark flex items-center gap-1 font-bold text-sm' key={index}>
                {item}
                <FaChevronDown size={13} />
              </Link>
            ))}
          </div>
        </div>
        <div className='flex gap-4 w-[15%] justify-end'>
          <Link
            to=''
            className='hover:bg-opacity-30 duration-300 transition-all w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-10'
          >
            <FiUser size={20} className='text-greenDark' />
          </Link>
          <Link
            to=''
            className='hover:bg-opacity-30 duration-300 transition-all relative w-10 h-10 flex items-center justify-center rounded-full bg-primary bg-opacity-10'
          >
            <FiShoppingCart size={20} className='text-greenDark' />
            <div className='rounded-full p-[11px] top-[-10%] right-[-10%] absolute w-3 h-3 text-white text-xs bg-red-600 flex items-center justify-center'>
              10
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
