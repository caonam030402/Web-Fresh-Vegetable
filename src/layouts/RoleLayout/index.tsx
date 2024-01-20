import { Outlet } from 'react-router-dom'
import UserSideNav from 'src/pages/User/components/UserSideNav'

export default function RoleLayout() {
  return (
    <div>
      <div className='px-10 mt-3 md:my-6'>
        <div className='grid grid-cols-12 gap-5 md:gap-3'>
          <div className='bg-white p-7 col-span-12 md:col-span-3 lg:col-span-2 shadow-sm'>
            <UserSideNav />
          </div>
          <div className='bg-white p-7 col-span-12 md:col-span-9 lg:col-span-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
