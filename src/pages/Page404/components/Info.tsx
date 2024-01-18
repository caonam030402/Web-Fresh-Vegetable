import React from 'react'
import AppButton from 'src/components/AppButton'
import { pathImage } from 'src/configs/path.image'

export default function Info() {
  return (
    <div className='bg-white p-[50px] flex flex-col items-center justify-center gap-y-3'>
      <img src={pathImage.page404} alt='' />

      <div className='text-zinc-900 text-[40px] font-semibold  '>Oops! page not found</div>
      <div className='w-[612px] text-center text-zinc-500 text-base fon-normal '>
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis
      </div>
      <AppButton>Back to Home</AppButton>
    </div>
  )
}
