import { useContext } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { MdPassword } from 'react-icons/md'
import { RiBillLine } from 'react-icons/ri'
import { Outlet } from 'react-router-dom'
import SideNav from 'src/components/organisms/SideNav'
import { pathRoutes } from 'src/constants/path.routes'

const listNavUser = [
  {
    name: 'Tài khoản của tôi',
    path: pathRoutes.profile,
    icon: <FaRegUser className='' />
  },
  {
    name: 'Đổi mật khẩu',
    path: pathRoutes.changPassword,
    icon: <MdPassword className='' />
  },
  {
    name: 'Đơn hàng',
    path: pathRoutes.historyPurchase,
    icon: <RiBillLine className='' />
  }
]

const listNavAdmin = [
  {
    name: 'Quản lý sản phẩm',
    path: pathRoutes.product_management,
    icon: <FaRegUser className='' />
  },
  {
    name: 'Quản lý đơn hàng',
    path: pathRoutes.order_management,
    icon: <MdPassword className='' />
  },
  {
    name: 'Đơn hàng',
    path: pathRoutes.historyPurchase,
    icon: <RiBillLine className='' />
  }
]

export default function RoleLayout({ role }: { role: 'admin' | 'user' }) {
  return (
    <div className=''>
      <div className={`mt-3 md:my-6 ${role !== 'admin' ? 'container' : 'px-10'}`}>
        <div className='grid grid-cols-12 gap-5 md:gap-3'>
          <div className={`bg-white col-span-3 shadow-sm`}>
            {role === 'admin' ? (
              <SideNav listNav={listNavAdmin} role='Quản trị viên' />
            ) : (
              <SideNav listNav={listNavUser} role='Khách hàng' />
            )}
          </div>
          <div className={`bg-white p-7 col-span-9`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
