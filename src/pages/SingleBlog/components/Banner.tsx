import { FaArrowRight } from 'react-icons/fa'
import Button from 'src/components/atoms/Button'
import { pathImage } from 'src/configs/path.image'

export default function Banner() {
  const handleClick = () => {}
  return (
    <div>
      <div className='relative mb-[20px]'>
        <img src={pathImage.banner} />
        <div className='absolute inset-0 flex items-center mx-6 sm:ml-20 justify-between sm:justify-start'>
          <div>
            <div className='text-neutral-400 text-sm font-medium mb-[8px] sm:mb-0'>Summer Sales</div>
            <div className='text-white text-4xl font-semibold my-[7px] hidden sm:block'>Fresh Fruit</div>
            <Button onClick={handleClick}>
              {
                <div className='inline-flex items-center'>
                  Shop Now <FaArrowRight className='ml-[4px]' />
                </div>
              }
            </Button>
          </div>
          <div className='w-[91px] h-[91px] rounded-full bg-black ml-[30px] flex justify-center items-center'>
            <div>
              <div className='text-center text-zinc-400 text-[11px] font-medium'>up to</div>
              <div className='text-center text-2xl font-semibold text-secondary'>56%</div>
              <div className='text-center text-zinc-400 text-sm font-normal'>Off</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
