import classNames from 'classnames'
import { useContext } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineModeEditOutline, MdPassword } from 'react-icons/md'
import { RiBillLine } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'
import { pathRoutes } from 'src/constants/path.routes'
import { AppContext } from 'src/contexts/app.contexts'

import { getAvatarUrl } from 'src/utils/utils'

export default function UserSideNav() {
  const { profile } = useContext(AppContext)
  return (
    <div className=''>
      <Link to={pathRoutes.profile} className='flex items-center '>
        <img className='h-[35px] w-[35px] flex-shrink-0 rounded-full' src={getAvatarUrl(profile?.avatar)} alt='' />
        <div className='ml-3'>
          <div className='w-full truncate text-sm font-bold md:w-[50%]'>{profile?.name || profile?.email}</div>
          <div className='flex items-center text-gray-500'>
            <MdOutlineModeEditOutline /> <p className='capitalize'>Sửa thông tin</p>
          </div>
        </div>
      </Link>
      <div className='my-3 h-[1px] w-[80%] bg-gray-200 md:my-8'></div>
      <div className='text-sm'>
        <div className='flex flex-col gap-5'>
          <NavLink
            to={pathRoutes.profile}
            className={({ isActive }) =>
              classNames('flex items-center', {
                'text-primary': isActive,
                'text-gray-600': !isActive
              })
            }
          >
            <FaRegUser className='mr-2 text-xl text-blue-700' />
            <p className='capitalize'>Tài khoản của tôi</p>
          </NavLink>
          <NavLink
            to={pathRoutes.changPassword}
            className={({ isActive }) =>
              classNames('flex items-center', {
                'text-primary': isActive,
                'text-gray-600': !isActive
              })
            }
          >
            <MdPassword className='mr-2 text-xl text-blue-700' />
            <p className='capitalize'>Đổi mật khẩu</p>
          </NavLink>
          <NavLink
            to={pathRoutes.historyPurchase}
            className={({ isActive }) =>
              classNames('flex items-center', {
                'text-primary': isActive,
                'text-gray-600': !isActive
              })
            }
          >
            <RiBillLine className='mr-2 text-xl text-blue-700' />
            <p className='capitalize'>Đơn hàng</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
