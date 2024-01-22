import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { formatCurrency, formatNumberToSocialStyle, generateNameId, rateSale } from 'src/utils/utils'
import ProductRating from '../molecules/ProductRating'
import { pathRoutes } from 'src/constants/path.routes'

interface Props {
  product: Product
}

export default function ProductItem({ product }: Props) {
  const url = `${pathRoutes.home}${generateNameId({ name: product.name, id: product._id })}`
  return (
    <Link to={url} className='relative'>
      <div className='absolute top-[4%] left-[5%] bg-secondary text-white z-10 px-3 leading-0 text-[9.5px] py-[2px] rounded-sm'>
        <span>{rateSale(product.price_before_discount, product.price)}</span>
      </div>
      <div className='relative z-0 w-full pt-[100%] group overflow-hidden rounded-t-md'>
        <img
          className='group-hover:brightness-50 group-hover:scale-110 ease-in-out duration-300 absolute top-0 right-0 z-0 h-full w-[100%] object-cover'
          src={product.image}
          alt=''
        />
        <div className='opacity-0 group-hover:opacity-100 absolute z-10 top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white'>
          {/* <HiViewfinderCircle size={30} /> */}
        </div>
      </div>
      <div className='p-4 rounded-b-md bg-white shadow-sm'>
        <div className=' flex justify-between'>
          <div>
            <div className='text-sm line-clamp-2 font-semibold text-greenDark'>{product.name}</div>
            <div className=''>
              <span className='text-[13px] font-semibold mr-1'>₫{formatCurrency(product.price)}</span>
              <span className='line-through text-[10px] caret-neutral-500'>
                ₫{formatCurrency(product.price_before_discount)}
              </span>
            </div>
          </div>
          {/* <div className='w-[37px] hover:bg-primary flex-shrink-0 hover:text-white ease-in-out duration-300 text-greenDark rounded-full bg- h-[37px] bg-greenDark bg-opacity-20 flex items-center justify-center'>
            <BiShoppingBag size={21} />
          </div> */}
        </div>
        <div className='flex items-center justify-between mt-3'>
          <ProductRating rating={product.rating} />
          <div className='text-[11px] text-neutral-500'>Đã bán {formatNumberToSocialStyle(product.sold)}</div>
        </div>
      </div>
    </Link>
  )
}
