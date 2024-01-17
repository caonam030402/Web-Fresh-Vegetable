import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'
import TitleSection from 'src/components/organisms/TitleSection'
import AppSlide from 'src/components/organisms/AppSlide'

const listCategory = [
  {
    image: 'https://theme.hstatic.net/200000271661/1000922438/14/img_home_list_icon_1.png?v=307',
    name: 'Rau ăn lá'
  },
  {
    image: 'https://theme.hstatic.net/200000271661/1000922438/14/img_home_list_icon_2.png?v=307',
    name: 'Rau củ quả'
  },
  {
    image: 'https://theme.hstatic.net/200000271661/1000922438/14/img_home_list_icon_3.png?v=307',
    name: 'Rau gia vị'
  },
  {
    image: 'https://theme.hstatic.net/200000271661/1000922438/14/img_home_list_icon_4.png?v=307',
    name: 'Nấm tươi'
  },
  {
    image: 'https://theme.hstatic.net/200000271661/1000922438/14/img_home_list_icon_5.png?v=307',
    name: 'Trái cây'
  }
]

export default function Category() {
  return (
    <div className='spacerSection'>
      <TitleSection title='Danh mục sản phẩm' viewAll={true}></TitleSection>
      <div className={`grid w-full grid-cols-5 gap-6`}>
        {listCategory.map((item, index) => (
          <div
            key={index}
            className='bg-white shadow-sm hover:bg-primary hover:bg-opacity-10 border ease-in-out duration-300 border-white hover:border-primary rounded-2xl cursor-pointer flex flex-col items-center py-6'
          >
            <Link to='' key={index} className='flex items-center flex-col justify-center'>
              <img src={item?.image} alt='' className='w-[50%] mb-1' />
              <h2 className='text-center text-greenDark text-base'>{item?.name}</h2>
            </Link>
          </div>
        ))}
      </div>
      <div className='flex'></div>
    </div>
  )
}
