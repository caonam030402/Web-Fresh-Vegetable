import { BiShoppingBag } from 'react-icons/bi'
import { MdOutlineStar } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { formatCurrency, formatNumberToSocialStyle } from 'src/utils/rules'

interface Props {
  name: string
  image: string
  price: number
  price_before_discount: number
  mass: number
  sold: number
}

export default function ProductItem({ image, mass, name, price, price_before_discount, sold }: Props) {
  return (
    <Link to='' className='relative'>
      <div className='absolute top-[4%] left-[5%] bg-secondary text-white z-10 px-3 leading-0 text-[9.5px] py-[2px] rounded-sm'>
        <span>Sale 50%</span>
      </div>
      <div className='relative z-0 w-full pt-[100%] group overflow-hidden rounded-t-md'>
        <img
          className='group-hover:brightness-50 group-hover:scale-110 ease-in-out duration-300 absolute top-0 right-0 z-0 h-full w-[100%] object-cover'
          src={image}
          alt=''
        />
        <div className='opacity-0 group-hover:opacity-100 absolute z-10 top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white'>
          {/* <HiViewfinderCircle size={30} /> */}
        </div>
      </div>
      <div className='p-4 rounded-b-md bg-white shadow-sm'>
        <div className=' flex justify-between'>
          <div>
            <div className='text-sm line-clamp-1 font-semibold text-greenDark'>
              {name} (Gói {mass}g)
            </div>
            <div>
              <span className='text-[13px] font-semibold mr-2'>₫{formatCurrency(price)}</span>
              <span className='line-through text-xs caret-neutral-500'>₫{formatCurrency(price_before_discount)}</span>
            </div>
          </div>
          <div className='w-[37px] hover:bg-primary flex-shrink-0 hover:text-white ease-in-out duration-300 text-greenDark rounded-full bg- h-[37px] bg-greenDark bg-opacity-20 flex items-center justify-center'>
            <BiShoppingBag size={21} />
          </div>
        </div>
        <div className='flex items-center justify-between mt-3'>
          <div className='text-yellow-600 flex items-center'>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </div>
          <div className='text-[11px] text-neutral-500'>Đã bán {formatNumberToSocialStyle(sold)}</div>
        </div>
      </div>
    </Link>
  )
}
