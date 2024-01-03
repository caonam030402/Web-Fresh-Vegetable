import AppSlide from 'src/components/AppSlide'
import AppTitleSection from 'src/components/AppTitleSection'
import { SwiperSlide } from 'swiper/react'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { MdOutlineStar } from 'react-icons/md'

const listDataTestimonial = [
  {
    quote:
      'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    name: 'Cao Nam',
    rule: 'Khách hàng',
    image: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_640.jpg'
  },
  {
    quote:
      'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    name: 'Cao Nam',
    rule: 'Khách hàng',
    image: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_640.jpg'
  },
  {
    quote:
      'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    name: 'Cao Nam',
    rule: 'Khách hàng',
    image: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_640.jpg'
  },
  ,
  {
    quote:
      'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    name: 'Cao Nam',
    rule: 'Khách hàng',
    image: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_640.jpg'
  }
]

export default function Testimonial() {
  return (
    <div className='spacerSection'>
      <AppTitleSection viewAll={false} title='Khách hàng nói gì về chúng tôi ?' />
      <AppSlide
        autoplay={true}
        pagination={false}
        slidesPerGroup={1}
        slidesPerView={3}
        spaceBetween={20}
        classNameSwiper='z-0 w-full'
        listItem={listDataTestimonial.map((item, index) => (
          <SwiperSlide
            className='p-6 md:text-left text-center bg-white rounded-md shadow-sm hover:bg-primary hover:bg-opacity-10 border border-white hover:border-primary ease-in-out duration-300 cursor-pointer'
            key={index}
          >
            <RiDoubleQuotesR className='text-primary' size={35} />
            <div className='mt-3 text-sm text-neutral-600'>{item?.quote}</div>
            <div className='flex flex-col items-center justify-between md:flex-row'>
              <div className='flex flex-col items-center mt-3 gap-2 md:flex-row'>
                <div className='w-12 h-12 rounded-full overflow-hidden flex-shrink-0'>
                  <img className='w-full h-full object-cover' src={item?.image} alt='' />
                </div>
                <div>
                  <p className='text-sm font-semibold text-greenDark'>{item?.name}</p>
                  <p className='text-xs font-normal text-neutral-500'>{item?.rule}</p>
                </div>
              </div>
              <div className='text-yellow-600 flex items-center'>
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
            </div>
          </SwiperSlide>
        ))}
      />
    </div>
  )
}
