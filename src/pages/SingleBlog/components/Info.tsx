import { FaRegUser } from 'react-icons/fa'
import { LuTag } from 'react-icons/lu'
import { PiChatCentered } from 'react-icons/pi'

const ListInfo = [
  { icon: LuTag, label: 'Food' },
  { icon: FaRegUser, label: 'By Admin' },
  { icon: PiChatCentered, label: 'List Information' }
]

export default function Info() {
  return (
    <div className='mt-[10px]'>
      {ListInfo.map((item, index) => (
        <div key={index} className='inline-flex'>
          <div className='inline-flex items-center justify-start mr-[10px]'>
            <item.icon className='py-[2px] text-primary h-[18px] w-[18px]' />
            <div className='text-stone-500 text-sm ml-[2px]'>{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
