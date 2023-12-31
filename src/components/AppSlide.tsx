import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { ReactNode } from 'react'

interface Props {
  classNameSwiper?: string
  listItem: ReactNode
  buttonStylePrev?: string
  buttonStyleNext?: string
  slidesPerView: number
  spaceBetween: number
  slidesPerGroup: number
  pagination: boolean
  autoplay?: boolean
  colorBtn?: string
  hiddenBtn?: boolean
}

export default function SlideHome({
  colorBtn = '#003f1f',
  classNameSwiper,
  slidesPerGroup,
  listItem,
  buttonStylePrev = 'rounded-full flex item-center justify-center hover:bg-primary bg-white bg-opacity-60 transition-all duration-400 w-12 h-12 translate-x-[-100%] group-hover:translate-x-[10px]',
  buttonStyleNext = 'rounded-full flex item-center justify-center hover:bg-primary bg-white bg-opacity-60 transition-all duration-400 w-12 h-12 translate-x-[100%] group-hover:translate-x-[-10px]',
  slidesPerView,
  spaceBetween,
  pagination,
  autoplay,
  hiddenBtn = true
}: Props) {
  return (
    <Swiper
      effect='cards'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={spaceBetween}
      loop={true}
      slidesPerView={slidesPerView}
      navigation={{ nextEl: '.button-slide-next', prevEl: '.button-slide-prev' }}
      pagination={{ clickable: true, enabled: pagination }}
      autoplay={autoplay && { delay: 8000, disableOnInteraction: false }}
      className={`group z-0 ${classNameSwiper}`}
    >
      {listItem}
      {hiddenBtn && (
        <div className={`button-slide-prev absolute top-[50%] z-20 translate-y-[-50%] ${buttonStylePrev}`}>
          <svg
            enableBackground='new 0 0 13 20'
            viewBox='0 0 13 20'
            role='img'
            className='stardust-icon stardust-icon-arrow-left-bold w-3 text-primaryColor'
          >
            <path fill={colorBtn} stroke='none' d='m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z' />
          </svg>
        </div>
      )}
      {hiddenBtn && (
        <div className={`button-slide-next absolute top-[50%] right-0 z-20 translate-y-[-50%] ${buttonStyleNext}`}>
          <svg
            enableBackground='new 0 0 13 20'
            viewBox='0 0 13 20'
            role='img'
            className='stardust-icon stardust-icon-arrow-left-bold w-3 rotate-180 text-white'
          >
            <path fill={colorBtn} stroke='none' d='m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z' />
          </svg>
        </div>
      )}
    </Swiper>
  )
}
