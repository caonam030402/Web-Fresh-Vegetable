import React, { useState } from 'react'
import AppSlide from 'src/components/AppSlide'
import { SwiperSlide } from 'swiper/react'
import { pathImage } from 'src/configs/path.image'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
import { FaPinterestP } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
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

// ... (import statements)

export default function TeamListMember() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  return (
    <div className='spacerSection'>
      <div className='mb-4 text-center text-zinc-900 text-5xl font-semibold'>Our Awesome Team</div>
      <div className='mb-4 text-stone-500 text-base font-normal w-[640px] m-auto text-center'>
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
          <SwiperSlide key={index} className='group'>
            <div
              className={`relative overflow-hidden rounded-lg ${
                hoveredImage === index ? 'hover:brightness-85 hover:scale-110 ease-in-out duration-300' : ''
              }`}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img className='bg-white object-cover' src={item.image} alt='' />
              {hoveredImage === index && (
                <div className='absolute inset-0 flex items-center justify-center gap-x-4 '>
                  <FaFacebook
                    size={20}
                    className='text-white transition-transform transform-gpu hover:scale-150 hover:text-primary '
                    style={{ filter: 'brightness(150%)', transition: 'ease-in-out 0.3s' }}
                  />
                  <FaTwitter
                    size={20}
                    className='text-white hover:text-primary transition-transform transform-gpu hover:scale-150  '
                    style={{ filter: 'brightness(150%)', transition: 'ease-in-out 0.3s' }}
                  />

                  <FaPinterestP
                    size={20}
                    className='text-white transition-transform transform-gpu hover:scale-150 hover:text-primary '
                    style={{ filter: 'brightness(150%)', transition: 'ease-in-out 0.3s' }}
                  />
                  <FaInstagram
                    size={20}
                    className='text-white transition-transform transform-gpu hover:scale-150 hover:text-primary '
                    style={{ filter: 'brightness(150%)', transition: 'ease-in-out 0.3s' }}
                  />
                </div>
              )}
            </div>
            <div className='p-4'>
              <p className='text-lg text-zinc-900 font-medium'>{item.name}</p>
              <p className='text-zinc-500 text-sm font-normal'>{item.position}</p>
            </div>
          </SwiperSlide>
        ))}
      />
    </div>
  )
}
