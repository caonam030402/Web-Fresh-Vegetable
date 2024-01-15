import { ImageSlide } from 'src/assets/images/slide'
import { SwiperSlide } from 'swiper/react'
import Category from './components/Category'
import PopularProducts from './components/PopularProducts'
import WhyChooseUs from './components/WhyChooseUs'
import Featured from './components/Featured'
import LatestNews from './components/LasestNews'
import Testimonial from './components/Testimonial'
import AppSlide from 'src/components/organisms/AppSlide'
import Sale from './components/Sale'

export default function Home() {
  return (
    <div className=''>
      <AppSlide
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
        <Category />
        <PopularProducts />
        <WhyChooseUs />
      </div>
      <Sale />
      <div className='container'>
        <Featured />
        <LatestNews />
        <Testimonial />
      </div>
    </div>
  )
}
