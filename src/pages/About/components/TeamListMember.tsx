import AppSlide from 'src/components/AppSlide'
import ProductItem from 'src/components/ProductItem'
import { pathImage } from 'src/configs/path.image'

import { SwiperSlide } from 'swiper/react'

const listDataTeamList = [
  {
    image: pathImage.famer_2,
    name: 'Minh Hậu',
    position: 'manager'
  },
  {
    image: pathImage.famer_2,
    name: 'Minh Hậu',
    position: 'manager'
  },
  {
    image: pathImage.famer_2,
    name: 'Minh Hậu',
    position: 'manager'
  },
  {
    image: pathImage.famer_2,
    name: 'Minh Hậu',
    position: 'manager'
  },
  {
    image: pathImage.famer_2,
    name: 'Minh Hậu',
    position: 'manager'
  }
]

export default function TeamListMember() {
  return (
    <div className='spacerSection '>
      <div className='mb-4 text-center text-zinc-900 text-5xl font-semibold'>Our Awesome Team</div>
      <div className=' mb-4 text-stone-500 text-base font-normal w-[640px] m-auto text-center'>
        Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est
        luctus tincidunt a a mi.
      </div>
      <AppSlide
        autoplay={true}
        pagination={false}
        slidesPerGroup={1}
        slidesPerView={4}
        spaceBetween={20}
        classNameSwiper='z-0 w-full'
        listItem={listDataTeamList.map((item, index) => (
          <SwiperSlide key={index} className='bg-white shadow-sm hover:shadow-md'>
            <div className='group/sidebar '>
              <div className='group-hover:sidebar/block hidden'>1</div>
              <img className='' src={item.image} alt='' />
              <div className='p-4'>
                <p className='text-lg text-zinc-900 font-medium '>{item.name}</p>
                <p className='text-zinc-500 text-sm font-normal'>{item.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      />
    </div>
  )
}
