import { ImageSlide } from 'src/assets/images/slide'
import SlideHome from './components/SlideHome'
import { SwiperSlide } from 'swiper/react'
import Featured from './components/Featured'

export default function Home() {
  return (
    <div className=''>
      <SlideHome
        autoplay={true}
        pagination={true}
        slidesPerGroup={1}
        slidesPerView={1}
        spaceBetween={30}
        classNameSwiper='z-0 w-full'
        listItem={ImageSlide.map((image, index) => (
          <SwiperSlide className='' key={index}>
            <img className='w-full' src={image} alt='' />
          </SwiperSlide>
        ))}
      />
      <div className='container'>
        <Featured />
      </div>
    </div>
  )
}
