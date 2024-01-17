import ProductItem from 'src/components/organisms/ProductItem'
import { BsFilterRight } from 'react-icons/bs'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { useQuery } from 'react-query'
import { categoryService } from 'src/services/category.service'
import RatingStars from './components/RatingStars'
import Input from 'src/components/atoms/Input'
import Button from 'src/components/atoms/Button'
import { InputNumber } from 'src/components/atoms/InputNumber'
import { productService } from 'src/services/product.service'
import useQueryConfig from 'src/hooks/useQueryConfig'

const listProductData = [
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2020/06/05/16/53/zucchini-5263781_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2020/09/12/21/12/tomatoes-5566741_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2016/11/02/16/51/broccoli-1792236_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2018/09/25/20/09/bush-beans-3702999_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2017/02/18/15/03/carrots-2077377_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2017/09/07/21/31/vegetables-2726800_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2016/11/19/10/40/woman-1838545_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  ,
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2016/05/06/11/46/tomatoes-1375740_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  },
  {
    name: 'Tía tô Hữu cơ',
    image: 'https://cdn.pixabay.com/photo/2017/07/19/15/23/pumpkin-2519423_640.jpg',
    price: 200000,
    price_before_discount: 200000,
    mass: 120,
    sold: 2600
  }
]

export default function ProductList() {
  const queryConfig = useQueryConfig()
  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryService.getCategories()
    }
  })

  const { data: productData } = useQuery({
    queryKey: ['product', queryConfig],
    queryFn: () => {
      return productService.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  return (
    <div className='container grid grid-cols-10 gap-7 my-10'>
      <div className='col-span-2'>
        <div>
          <div className='flex items-center justify-between'>
            <span className='text-zinc-900 text-base font-medium capitalize'>Tất cả danh mục</span>
            <MdKeyboardArrowUp className='text-lg' />
          </div>
          <div className='mt-2 flex flex-col gap-1'>
            {categoriesData?.data.data.map((item, index) => {
              return (
                <div key={index} className='flex items-center gap-1'>
                  <input type='radio' id={item._id} className={`w-[18px] flex-shrink border-gray-100 accent-primary`} />
                  <label htmlFor={item._id} className='text-zinc-900 text-sm'>
                    {item.name}
                  </label>
                </div>
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
      <div className='col-span-8 grid-cols-2 grid gap-5 rounded-sm md:grid-cols-3 lg:grid-cols-4'>
        {productData?.data.data.products.map((item, index) => (
          <div key={index} className='col-span-1'>
            {item !== undefined && <ProductItem product={item} />}
          </div>
        ))}
      </div>
    </div>
  )
}
