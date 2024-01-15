import AppButton from 'src/components/AppButton'
import { pathImage } from 'src/configs/path.image'

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
