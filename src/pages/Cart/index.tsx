import { useQuery } from 'react-query'
import ControllerQuanlity from 'src/components/organisms/ControllerQuanlity'
import { purchasesStatus } from 'src/constants/purchase'
import { purchaseService } from 'src/services/purchase.service'
import { formatCurrency } from 'src/utils/utils'
import { TiDeleteOutline } from 'react-icons/ti'
import Button from 'src/components/atoms/Button'

export default function Cart() {
  const { data: purchasesInCartData, refetch } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseService.getPurchases({ status: purchasesStatus.inCart })
  })
  return (
    <div className='container py-10'>
      <h1 className='capitalize text-3xl font-bold text-center mb-5'>Giỏ hàng của tôi</h1>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 rounded-md border bg-white'>
          <div className='grid grid-cols-12 gap-12 py-5 px-6 border-b uppercase w-full text-zinc-500 text-sm font-medium'>
            <div className='col-span-5 flex items-center gap-4'>
              <input type='checkbox' className={`flex-shrink border-gray-100 accent-primary`} />
              <span>Sản phẩm</span>
            </div>
            <div className='col-span-2 text-center'>Giá</div>
            <div className='col-span-2 text-center'>Số lượng</div>
            <div className='col-span-2 text-center'>Số tiền</div>
          </div>
          <div>
            <div className=''>
              {purchasesInCartData?.data.data.map((item, index) => (
                <div
                  key={index}
                  className='hover:bg-greenDark/10 grid items-center py-5 px-6 gap-12 text-black/85 grid-cols-12 w-full border-b text-sm font-medium'
                >
                  <div className='col-span-5 flex gap-4 items-center'>
                    <input type='checkbox' className={`flex-shrink border-gray-100 accent-primary`} />
                    <img
                      className='w-[50px] h-[50px] rounded-md object-cover flex-shrink-0'
                      src={item.product.image}
                      alt=''
                    />
                    <p className='line-clamp-2 h-[80%] overflow-hidden'>{item.product.name}</p>
                  </div>
                  <div className='col-span-2 text-center'>
                    <span className='mr-4 line-through text-neutral-400 text-xs'>
                      {formatCurrency(item.product.price_before_discount)}đ
                    </span>
                    <span>{formatCurrency(item.product.price)}đ</span>
                  </div>
                  <div className='col-span-2'>
                    <ControllerQuanlity
                      value={item.buy_count}
                      max={item.product.sold}
                      onDecrease={() => {}}
                      onIncrease={() => {}}
                    />
                  </div>
                  <div className='col-span-2 text-center'>{formatCurrency(item.product.price * item.buy_count)}đ</div>
                  <TiDeleteOutline className='text-2xl font-light text-neutral-500' />
                </div>
              ))}
            </div>
          </div>
          <div className='py-5 px-6 flex justify-between'>
            <div className='flex gap-4 items-center'>
              <input type='checkbox' className={`flex-shrink border-gray-100 accent-primary`} />
              <p>Chọn Tất Cả</p>
              <p>Xóa</p>
            </div>
            <div className='gap-6 flex items-center'>
              <div className='text-end'>
                <div className='flex items-center gap-3'>
                  <p>Tổng thanh toán ( 1 Sản phẩm ):</p>
                  <div className='text-2xl font-bold text-greenDark'>₫83.960.000</div>
                </div>
                <div>
                  Tiết kiệm <span className='text-greenDark'>₫24.000.000</span>
                </div>
              </div>
              <Button className='px-12 h-[80%]' widthIcon={false}>
                Mua ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
