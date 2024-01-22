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
  const listItem = [
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
  const { profile } = useContext(AppContext)
  return (
    <div className=''>
      <Link to={pathRoutes.profile} className='flex flex-col items-center py-7'>
        <img className='h-[100px] w-[100px] flex-shrink-0 rounded-full' src={getAvatarUrl(profile?.avatar)} alt='' />
        <div className=''>
          <div className='text-xl text-center mt-3 font-semibold'>{profile?.name || profile?.email}</div>
          <div className='text-sm text-gray-500 capitalize text-center'>Khách hàng</div>
        </div>
      </Link>
      {/* <div className='my-3 h-[1px] w-[80%] bg-gray-200 '></div> */}
      <div className='text-sm'>
        <div className='flex flex-col'>
          {listItem.map((item, index) => (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                classNames('flex items-center px-4 py-3 border-l-[5px]', {
                  'border-primary bg-primary/5 text-gray-900': isActive,
                  'text-gray-600 border-white': !isActive
                })
              }
            >
              <div className='text-lg mr-2'>{item.icon}</div>
              <p className='capitalize'>{item.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}
