import { IoIosCall } from 'react-icons/io'
import { AiOutlineMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Tooltip from './Tooltip'

export default function FloatingContact() {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <Tooltip location='left' content='0786416477'>
        <Link to='' className='rounded-full w-12 h-12 items-center flex justify-center bg-primary'>
          <IoIosCall size={23} />
        </Link>
      </Tooltip>
      <Tooltip location='left' content='Liên hệ qua Message'>
        <Link to='' className='rounded-full w-12 h-12 items-center flex justify-center bg-primary'>
          <AiOutlineMessage size={23} />
        </Link>
      </Tooltip>
    </div>
  )
}
