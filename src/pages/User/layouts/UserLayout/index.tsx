import UserSideNav from '../../components/UserSideNav'
import { Outlet } from 'react-router-dom'

export default function UserLayout() {
  return (
    <div>
      <div className='container mt-3 md:my-6'>
        <div className='grid grid-cols-12 gap-5 md:gap-3'>
          <div className='bg-white col-span-12 md:col-span-4 lg:col-span-3 shadow-sm'>
            <UserSideNav />
          </div>
          <div className='bg-white p-7 col-span-12 md:col-span-9 lg:col-span-9'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
