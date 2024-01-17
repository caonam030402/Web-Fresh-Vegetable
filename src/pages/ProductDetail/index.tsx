import { MdOutlineShoppingCartCheckout } from 'react-icons/md'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Button from 'src/components/atoms/Button'
import ProductRating from 'src/components/molecules/ProductRating'
import ControllerQuanlity from 'src/components/organisms/ControllerQuanlity'
import ProductItem from 'src/components/organisms/ProductItem'
import { pathRoutes } from 'src/constants/path.routes'
import { productService } from 'src/services/product.service'
import { formatCurrency, formatNumberToSocialStyle, generateNameId, getIdFromNameId, rateSale } from 'src/utils/utils'

export default function ProductDetail() {
  const { nameId } = useParams()

  const id = getIdFromNameId(nameId as string)
  const { data: productDetailData } = useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => productService.getProductDetail(id as string)
  })

  const productDetail = productDetailData?.data.data

  const queryConfig: ProductListConfig = { limit: '20', page: '1', category: productDetail?.category._id }

  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productService.getProducts(queryConfig)
    },
    enabled: Boolean(productDetail),
    staleTime: 3 * 60 * 1000
  })

  return (
    <div className='container my-10'>
      <div className='bg-white grid grid-cols-12 p-5 gap-10'>
        <div className='col-span-5'>
          <div className='w-full relative pb-[100%]'>
            <img className='w-full h-full object-cover absolute rounded-sm' src={productDetail?.image} alt='' />
          </div>
        </div>
        <div className='col-span-7'>
          <h1 className='font-bold  text-xl'>{productDetail?.name}</h1>
          <div className='flex items-center gap-6 mt-3'>
            <div className='flex items-center gap-2 '>
              <span className='text-[16px]'>{productDetail?.rating as number}</span>
              <ProductRating rating={productDetail?.rating as number} />
            </div>
            <div className='flex gap-1 items-center'>
              <span className='text-[16px]'>{formatNumberToSocialStyle(productDetail?.sold as number)}</span>
              <span className='text-sm text-neutral-500'>Đã Bán</span>
            </div>
          </div>
          <div className='mt-6 flex items-center'>
            <span className='text-base text-neutral-500 line-through'>
              ₫{formatCurrency(productDetail?.price_before_discount as number)}
            </span>
            <span className='text-2xl font-bold text-greenDark ml-2'>
              ₫{formatCurrency(productDetail?.price as number)}
            </span>
            <span className='ml-3 bg-primary rounded-md px-2 font-bold text-xs py-[2px] text-white uppercase'>
              {rateSale(productDetail?.price_before_discount as number, productDetail?.price as number)} giảm
            </span>
          </div>
          {/* <div className='h-[1px] w-full bg-slate-200 mt-3'></div> */}
          <div className='flex items-center gap-3 mt-6 text-xs'>
            <span>Số lượng</span>
            <ControllerQuanlity />
            <span>{productDetail?.quantity} Sản phẩm có sẵn</span>
          </div>
          <div className='flex gap-3 mt-8'>
            <Button className='border-primary bg-primary/0 capitalize border' widthIcon={false}>
              <div className='flex items-center gap-1 text-primary'>
                <MdOutlineShoppingCartCheckout className='text-lg' />
                <span>Thêm vào giỏ hàng</span>
              </div>
            </Button>
            <Button widthIcon={false}>Mua Ngay</Button>
          </div>
        </div>
      </div>
      <div className='bg-white p-5'>
        <h1 className='text-xl mb-2'>Mô tả sản phẩm</h1>
        <div className='grid grid-cols-12'>
          <p className='col-span-8'>
            Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas
            tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel.
            Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam
            mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
            convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim.
            Aliquam id mi quam. Phasellus nec fringilla elit. Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
            dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque
            mi eget nulla. Proin luctus elementum neque et pharetra.{' '}
          </p>
          <div>
            <video src='https://i.vimeocdn.com/video/1077817777-62e5b61d7cc29d30c924091cf663916e2086b619867cd12dd8a57c7bc12b0652-d?mw=1100&mh=619&q=70'></video>
          </div>
        </div>
      </div>
      <div className='mt-6'>
        <h1 className='text-center capitalize text-lg font-bold text-greenDark'>Sản phẩm tương tự</h1>
        <div className='grid grid-cols-5 gap-6 mt-6'>
          {productsData?.data.data.products.map((item, index) => {
            return <ProductItem product={item} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}
