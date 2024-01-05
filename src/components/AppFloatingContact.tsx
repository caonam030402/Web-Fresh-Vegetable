import { IoIosCall } from 'react-icons/io'
import { AiOutlineMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import AppTooltip from './AppTooltip'

export default function AppFloatingContact() {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <AppTooltip location='left' content='0786416477'>
        <Link to='' className='rounded-full w-12 h-12 items-center flex justify-center bg-primary'>
          <IoIosCall size={23} />
        </Link>
      </AppTooltip>
      <AppTooltip location='left' content='Liên hệ qua Message'>
        <Link to='' className='rounded-full w-12 h-12 items-center flex justify-center bg-primary'>
          <AiOutlineMessage size={23} />
        </Link>
      </AppTooltip>
    </div>
  )
}
