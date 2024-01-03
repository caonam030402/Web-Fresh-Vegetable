import { FaRegUser } from 'react-icons/fa'
import { LuTag } from 'react-icons/lu'
import { PiChatCentered } from 'react-icons/pi'

export default function Info() {
  return (
    <>
      <div className='inline-flex items-center justify-start mr-[10px]'>
        <FaRegUser className='py-[2px] text-primary h-[18px] w-[18px]' />
        <div className='text-stone-500 text-sm'>65 Comments</div>
      </div>
      <div className='inline-flex items-center justify-start mr-[10px]'>
        <FaRegUser className='py-[2px] text-primary h-[18px] w-[18px]' />
        <div className='text-stone-500 text-sm'>65 Comments</div>
      </div>
      <div className='inline-flex items-center justify-start mr-[10px]'>
        <FaRegUser className='py-[2px] text-primary h-[18px] w-[18px]' />
        <div className='text-stone-500 text-sm'>65 Comments</div>
      </div>
    </>
  )
}
