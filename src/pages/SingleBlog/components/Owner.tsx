import { pathImage } from 'src/configs/path.image'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaPinterestP } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { IoMdLink } from 'react-icons/io'

const ListIcon = [
  {
    icon: FaFacebookF
  },
  {
    icon: FaTwitter
  },
  {
    icon: FaPinterestP
  },
  {
    icon: FaInstagram
  },
  {
    icon: IoMdLink
  }
]

export default function Owner() {
  return (
    <div className='flex justify-between items-center py-6 border-b border-gray-300'>
      <div className='inline-flex items-center'>
        <img src={pathImage.person} className='h-[50px] w-[50px] rounded-[50%]' />
        <div className='ml-[15px]'>
          <div className='text-zinc-900 text-base'>Cameron Williamson</div>
          <div className='text-zinc-500 text-sm'>4 April, 2021 • 6 min read</div>
        </div>
      </div>
      <div className='sm:inline-flex items-center hidden'>
        {ListIcon.map((item, index) => (
          <div
            key={index}
            className='h-10 w-10 rounded-[50%] flex justify-center items-center cursor-pointer ml-[5px] xl:hover:bg-primary xl:hover:text-white'
          >
            <item.icon className='h-[18px] w-[18px]' />
          </div>
        ))}
      </div>
    </div>
  )
}
