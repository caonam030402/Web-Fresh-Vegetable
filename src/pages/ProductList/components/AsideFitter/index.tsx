import { MdKeyboardArrowUp } from 'react-icons/md'
import Button from 'src/components/atoms/Button'
import { InputNumber } from 'src/components/atoms/InputNumber'
import RatingStars from '../RatingStars'
import { QueryConfig } from 'src/hooks/useQueryConfig'
import { Link, createSearchParams } from 'react-router-dom'
import { pathRoutes } from 'src/constants/path.routes'

interface Props {
  queryConfig: QueryConfig
  categories?: Category[]
}

export default function AsideFitter({ categories, queryConfig }: Props) {
  const { category } = queryConfig
  return (
    <div>
      <div>
        <div className='flex items-center justify-between'>
          <span className='text-zinc-900 text-base font-medium capitalize'>Tất cả danh mục</span>
          <MdKeyboardArrowUp className='text-lg' />
        </div>
        <div className='mt-2 flex flex-col gap-1'>
          {categories?.map((item, index) => {
            const isActive = category === item._id
            return (
              <Link
                to={{
                  pathname: pathRoutes.productList,
                  search: createSearchParams({
                    ...queryConfig,
                    category: item._id
                  }).toString()
                }}
                key={index}
                className='flex items-center gap-1'
              >
                <input
                  checked={isActive && true}
                  type='radio'
                  id={item._id}
                  className={`w-[18px] flex-shrink border-gray-100 accent-primary`}
                />
                <label htmlFor={item._id} className='text-zinc-900 text-sm'>
                  {item.name}
                </label>
              </Link>
            )
          })}
        </div>
      </div>
      <div className='w-full h-[0.5px] bg-gray-300/50 my-5'></div>
      <div>
        <div className='flex items-center justify-between'>
          <span className='text-zinc-900 text-base font-medium capitalize'>Khoảng Giá</span>
          <MdKeyboardArrowUp className='text-lg' />
        </div>
        <div className='flex gap-2'>
          <InputNumber placeholder='₫ TỪ'></InputNumber>
          <InputNumber placeholder='₫ ĐẾN'></InputNumber>
        </div>
        <Button className='w-full uppercase py-[8px] rounded-md' widthIcon={false}>
          Áp dụng
        </Button>
      </div>
      <div className='w-full h-[0.5px] bg-gray-300/50 my-5'></div>
      <div>
        <div className='flex items-center justify-between'>
          <span className='text-zinc-900 text-base font-medium capitalize'>Đánh giá</span>
          <MdKeyboardArrowUp className='text-lg' />
        </div>
        <RatingStars />
      </div>
      <div className='w-full h-[0.5px] bg-gray-300/50 my-5'></div>
      <Button className='w-full uppercase py-[8px] rounded-md' widthIcon={false}>
        Xóa tất cả
      </Button>
    </div>
  )
}
