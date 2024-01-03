import React from 'react'
import { pathImage } from 'src/configs/path.image'
import Info from './Info'

export default function BlogDetail() {
  return (
    <div className='mt-[50px]'>
      <img src={pathImage.orange} className='w-full h-full' />
      <Info />
    </div>
  )
}
