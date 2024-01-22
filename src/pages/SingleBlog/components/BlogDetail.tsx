import { pathImage } from 'src/configs/path.image'
import Info from './Info'
import Owner from './Owner'

export default function BlogDetail() {
  return (
    <div className='mt-[50px]'>
      <img src={pathImage.orange} className='w-full h-full' />
      <Info />
      <div className='font-medium  text-zinc-900 text-[32px] w-full'>
        Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.
      </div>
      <Owner />
    </div>
  )
}
