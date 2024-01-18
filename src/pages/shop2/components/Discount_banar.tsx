import React from 'react'
import AppButton from 'src/components/AppButton'
import { pathImage } from 'src/configs/path.image'

export default function DiscountBanner() {
  return (
    <div className='w-full flex h-[358px] bg-discounted_background object-cover py-10 px-20'>
      <div>
        <p className='text-white text-sm font-medium uppercase tracking-wide'>BEST DEAL</p>
        <p className='text-white font-semibold text-[40px]'>Sale of the Month</p>
        <div className='flex text-white gap-x-4 text-[20px] '>
          <div className='gap-4'>
            <div className='flex text-primary gap-4 text-2xl font-normal'>
              00 <p className='text-white'>:</p>
            </div>
            <div className='mt-3'>DAYS</div>
          </div>
          <div className='gap-4'>
            <div className='flex text-primary gap-4 text-2xl font-normal'>
              00 <p className='text-white'>:</p>
            </div>
            <div className='mt-3'>HOURS</div>
          </div>
          <div className='gap-4'>
            <div className='flex text-primary gap-4 text-2xl font-normal'>
              00 <p className='text-white'>:</p>
            </div>
            <div className='mt-3'>MINDS</div>
          </div>
          <div className='gap-4'>
            <div className='flex text-primary gap-4 text-2xl font-normal'>00</div>
            <div className='mt-3'>SECS</div>
          </div>
        </div>
        <div className='mt-8'>
          <AppButton>
            <p className='text-justify text-white text-sm font-semibold'>shop now</p>
          </AppButton>
        </div>
      </div>
      <div className='w-20 h-20 bg-[#FF8A00] rounded-full mt-8 ml-24 text-center '>
        <div className='text-white mt-4 text-2xl font-semibold'>56%</div>
        <p className='text-white text-opacity-80 text-sm font-medium'>Off</p>
      </div>
    </div>
  )
}
