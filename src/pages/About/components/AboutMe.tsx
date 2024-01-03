import { pathImage } from 'src/configs/path.image'
import { LuLeaf } from 'react-icons/lu'
import { CiHeadphones } from 'react-icons/ci'
import { FaRegStar } from 'react-icons/fa'
import { IoBagCheckOutline } from 'react-icons/io5'
import { LuTruck } from 'react-icons/lu'
import { BsBox } from 'react-icons/bs'
export default function AboutMe() {
  const dataListFeature = [
    {
      icon: <LuLeaf size={30} />,
      title: '100% Organic food',
      description: '100% healthy & Fresh food.'
    },
    {
      icon: <CiHeadphones size={30} />,
      title: '100% Organic food',
      description: '100% healthy & Fresh food.'
    },
    {
      icon: <FaRegStar size={30} />,
      title: '100% Organic food',
      description: '100% healthy & Fresh food.'
    },
    {
      icon: <IoBagCheckOutline size={30} />,
      title: '100% Organic food',
      description: '100% healthy & Fresh food.'
    },
    {
      icon: <LuTruck size={30} />,
      title: '100% Organic food',
      description: '100% healthy & Fresh food.'
    },
    {
      icon: <BsBox size={30} />,
      title: '100% Organic food',
      description: '100% healthy & Fresh food.'
    }
  ]
  return (
    <div className='spacerSection flex items-center gap-10'>
      <div className='w-[50%]'>
        <img className='w-full h-full object-cover' src={pathImage.famer} alt='' />
      </div>
      <div className='flex-1'>
        <div className='text-3xl font-bold uppercase w-[65%] mb-4'>100% Trusted Organic Food Store</div>
        <p className='text-sm text-zinc-500 my-4'>
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget
          est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.
        </p>
        <div className='grid grid-cols-2 gap-y-4'>
          {dataListFeature.map((item, index) => (
            <div className='flex gap-3 items-center' key={index}>
              <div className='flex items-center justify-center w-[50px] h-[50px] text-primary bg-green-400/30 rounded-full'>
                {item.icon}
              </div>
              <div className=''>
                <p className='text-base text-zinc-900 font-medium'>{item.title}</p>
                <p className='text-zinc-500 text-sm font-normal leading-[21px]'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
