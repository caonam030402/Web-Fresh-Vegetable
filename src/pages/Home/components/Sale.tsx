import { SwiperSlide } from 'swiper/react'
import AppSlide from 'src/components/AppSlide'
import AppTitleSection from 'src/components/AppTitleSection'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { formatCurrency } from 'src/utils/rules'
import AppButton from 'src/components/AppButton'
import { pathImage } from 'src/configs/path.image'

const listProductData = [
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2020/06/05/16/53/zucchini-5263781_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2020/09/12/21/12/tomatoes-5566741_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2016/11/02/16/51/broccoli-1792236_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2018/09/25/20/09/bush-beans-3702999_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2017/02/18/15/03/carrots-2077377_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2017/09/07/21/31/vegetables-2726800_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2016/11/19/10/40/woman-1838545_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  ,
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2016/05/06/11/46/tomatoes-1375740_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2017/07/19/15/23/pumpkin-2519423_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  }
]

export default function Sale() {
  return (
    <div className='bg-white'>
      <div className='spacerSection grid grid-cols-3 gap-4 items-center bg-white container'>
        <div className='p-5'>
          <img className='' src={pathImage.basket_Full_Of_Vegetables} alt='' />
        </div>
        <div className='flex items-center flex-col gap-6'>
          <div className='text-center'>
            <p className='text-primary uppercase'>Siêu giảm giá</p>
            <h1 className='text-3xl mt- uppercase font-bold'>Ưu đãi đặc biệt trong khung giờ</h1>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='bg-primary/15 w-[60px] h-[60px] shrink-0 rounded-sm text-primary shadow-sm flex flex-col items-center justify-center'>
              <p className='text-[25px] leading-6 mb-1 font-semibold'>00</p>
              <p className='text-[10px] leading-3'>DAYS</p>
            </div>
            :
            <div className='bg-primary/15 w-[60px] h-[60px] shrink-0 rounded-sm text-primary shadow-sm flex flex-col items-center justify-center'>
              <p className='text-[25px] leading-6 mb-1 font-semibold'>10</p>
              <p className='text-[10px] leading-3'>HOURS</p>
            </div>
            :
            <div className='bg-primary/15 w-[60px] h-[60px] shrink-0 rounded-sm text-primary shadow-sm flex flex-col items-center justify-center'>
              <p className='text-[25px] leading-6 mb-1 font-semibold'>20</p>
              <p className='text-[10px] leading-3'>MINS</p>
            </div>
            :
            <div className='bg-primary/15 w-[60px] h-[60px] shrink-0 rounded-sm text-primary shadow-sm flex flex-col items-center justify-center'>
              <p className='text-[25px] leading-6 mb-1 font-semibold'>50</p>
              <p className='text-[10px] leading-3'>SECS</p>
            </div>
          </div>
          <AppButton>Mua Ngay</AppButton>
        </div>
        <div className='p-3'>
          <img src={pathImage.girl_holding_bag} alt='' />
        </div>
      </div>
    </div>
  )
}
