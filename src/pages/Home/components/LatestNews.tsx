import { Link } from 'react-router-dom'
import { IoArrowForward } from 'react-icons/io5'
import AppTitleSection from 'src/components/AppTitleSection'

const listDataLastNew = [
  {
    image: 'https://file.hstatic.net/200000271661/article/rau_huu_co_7d5ec4f212664285b82bf882a7c0150d_grande.png',
    title:
      'Top công dụng măng tây mang đến cho sức khỏe Tất tần tật về măng tây ngon bổ rẻ nhất Việt Nam, rẻ nhất thị trường',
    description:
      'Măng tây có dạng hình ngọn giáo, khi ăn giòn và ngon, được thu hoạch nhiều vào mùa xuân. Ngoài cái tên măng tây quen thuộc, loại rau này còn được gọi bằng nhiều cái tên “mỹ miều” khác như rau mùa xuân, rau hoàng đế. Măng tây được mệnh danh là “vua” của các loại rau bởi chúng chứa rất nhiều vitamin cũng như những dưỡng chất tốt cho cơ thể, phải kể đến như chất xơ, chất folate, vitamin A, B, C… Thế nên măng tây mang lại rất nhiều những lợi ích tuyệt vời cho sức khỏe con người.'
  },
  {
    image: 'https://file.hstatic.net/200000271661/article/mang_tay_ef3fefba22da46009f6eb951d8abd04b_large.png',
    title: 'Top công dụng măng tây mang đến cho sức khỏe Tất tần tật về măng tây',
    description:
      'Măng tây có dạng hình ngọn giáo, khi ăn giòn và ngon, được thu hoạch nhiều vào mùa xuân. Ngoài cái tên măng tây quen thuộc, loại rau này còn được gọi bằng nhiều cái tên “mỹ miều” khác như rau mùa xuân, rau hoàng đế. Măng tây được mệnh danh là “vua” của các loại rau bởi chúng chứa rất nhiều vitamin cũng như những dưỡng chất tốt cho cơ thể, phải kể đến như chất xơ, chất folate, vitamin A, B, C… Thế nên măng tây mang lại rất nhiều những lợi ích tuyệt vời cho sức khỏe con người.'
  },
  {
    image: 'https://file.hstatic.net/200000271661/article/untitled-1_6f26cb04760344f4b742d5b95312e99b_large.png',
    title: 'Top công dụng măng tây mang đến cho sức khỏe Tất tần tật về măng tây',
    description:
      'Măng tây có dạng hình ngọn giáo, khi ăn giòn và ngon, được thu hoạch nhiều vào mùa xuân. Ngoài cái tên măng tây quen thuộc, loại rau này còn được gọi bằng nhiều cái tên “mỹ miều” khác như rau mùa xuân, rau hoàng đế. Măng tây được mệnh danh là “vua” của các loại rau bởi chúng chứa rất nhiều vitamin cũng như những dưỡng chất tốt cho cơ thể, phải kể đến như chất xơ, chất folate, vitamin A, B, C… Thế nên măng tây mang lại rất nhiều những lợi ích tuyệt vời cho sức khỏe con người.'
  }
]

export default function LatestNews() {
  return (
    <div className='spacerSection group'>
      <AppTitleSection title='Bạn có biết ?' viewAll={false}></AppTitleSection>
      <Link to='' className='grid grid-cols-3 gap-5'>
        {listDataLastNew.slice(0, 3).map((item, index) => (
          <div className='shadow-sm' key={index}>
            <div className='h-[250px] w-full overflow-hidden'>
              <img
                className='hover:scale-110 hover:brightness-50 hover:rotate-3 h-[100%] duration-500 object-cover transition-all'
                src={item.image}
                alt=''
              />
            </div>
            <div className='p-4'>
              <h1 className='text-greenDark text-lg line-clamp-1 font-semibold'>{item.title}</h1>
              <p className='line-clamp-2 mt-2'>{item.description}</p>
              <div className='flex items-center gap-2 mt-3 hover:text-greenDark hover:underline font-medium'>
                <span>Đọc thêm</span> <IoArrowForward />
              </div>
            </div>
          </div>
        ))}
      </Link>
    </div>
  )
}
