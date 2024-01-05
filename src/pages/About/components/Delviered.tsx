import { FaCheck } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'
import AppButton from 'src/components/AppButton'
import { pathImage } from 'src/configs/path.image'
export default function Delviered() {
  return (
    <div className='container spacerSection flex items-center gap-10'>
      <div className='w-1/2'>
        <p className=' text-zinc-900 text-5xl font-semibold mb-5'>We Delivered, You Enjoy Your Order.</p>
        <p className=' text-stone-500 text-base font-normal leading-normal'>
          Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris
          sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
        </p>
        <div className='mt-3'>
          <div className='flex mb-2'>
            <div className='w-5 h-5 relative bg-primary rounded-full mr-3'>
              <FaCheck className='absolute text-white top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]' />
            </div>

            <p className='text-sm text-stone-500 font-normal'>Sed in metus pellentesque.</p>
          </div>
          <div className='flex mb-2'>
            <div className='w-5 h-5 relative bg-primary rounded-full mr-3'>
              <FaCheck className='absolute text-white top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]' />
            </div>

            <p className='text-sm text-stone-500 font-normal'>
              Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
            </p>
          </div>
          <div className='flex mb-2'>
            <div className='w-5 h-5 relative bg-primary rounded-full mr-3'>
              <FaCheck className='absolute text-white top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]' />
            </div>

            <p className='text-sm text-stone-500 font-normal'>Maecenas ut nunc fringilla erat varius.</p>
          </div>
          <AppButton>Mua ngay</AppButton>
        </div>
      </div>

      <div className='flex-1'>
        <img className='w-full h-full object-cover' src={pathImage.deliver} alt='' />
      </div>
    </div>
  )
}
