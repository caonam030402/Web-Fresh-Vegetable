import { useMutation, useQuery } from 'react-query'
import ControllerQuanlity from 'src/components/organisms/ControllerQuanlity'
import { purchasesStatus } from 'src/constants/purchase'
import { purchaseService } from 'src/services/purchase.service'
import { formatCurrency } from 'src/utils/utils'
import { TiDeleteOutline } from 'react-icons/ti'
import Button from 'src/components/atoms/Button'
import { useContext, useEffect, useMemo } from 'react'
import { AppContext } from 'src/contexts/app.contexts'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { keyBy } from 'lodash'
import { produce } from 'immer'
import { pathImage } from 'src/constants/path.image'
import { pathRoutes } from 'src/constants/path.routes'

export default function Cart() {
  const { extendedPurchases, setExtendedPurchases, setPurchasePayment } = useContext(AppContext)
  const navigate = useNavigate()

  const { data: purchasesInCartData, refetch } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseService.getPurchases({ status: purchasesStatus.inCart })
  })

  const location = useLocation()

  const choosenPurchaseIdFromLocation = (location.state as { purchaseId: string } | null)?.purchaseId

  const isAllChecked = useMemo(() => extendedPurchases.every((purchase) => purchase.checked), [extendedPurchases])
  const checkedPurchases = useMemo(() => extendedPurchases.filter((purchase) => purchase.checked), [extendedPurchases])

  const handleCheckAll = () => {
    setExtendedPurchases((prev) =>
      prev.map((purchase) => ({
        ...purchase,
        checked: !isAllChecked
      }))
    )
  }
  const hanleDeleteManyPurchases = () => {
    const purchasesIds = checkedPurchases.map((purchase) => purchase._id)
    deletePurchaseMutation.mutate(purchasesIds)
  }

  const handleBuyPurchases = () => {
    if (checkedPurchases.length > 0) {
      navigate(pathRoutes.payment)
      const body = checkedPurchases.map((purchase) => purchase)
      setPurchasePayment(body)
    }
  }

  const updatePurchaseMutation = useMutation({
    mutationFn: purchaseService.updatePurchase,
    onSuccess: () => {
      refetch()
    }
  })

  const totalCheckedPurchasePrice = useMemo(
    () =>
      checkedPurchases.reduce((result, current) => {
        return result + current.product.price * current.buy_count
      }, 0),
    [checkedPurchases]
  )

  const totalCheckedPurchaseSavingPrice = useMemo(
    () =>
      checkedPurchases.reduce((result, current) => {
        return result + (current.product.price_before_discount - current.price) * current.buy_count
      }, 0),
    [checkedPurchases]
  )

  const handleTypeQuantity = (purchaseIndex: number) => (value: number) => {
    setExtendedPurchases(
      produce((draft) => {
        draft[purchaseIndex].buy_count = value
      })
    )
  }

  const handleQuantity = (purchaseIndex: number, value: number, enable: boolean) => {
    if (enable) {
      const purchase = extendedPurchases[purchaseIndex]
      setExtendedPurchases(
        produce((draft) => {
          draft[purchaseIndex].disabled = true
        })
      )
      updatePurchaseMutation.mutate({ product_id: purchase.product._id, buy_count: value })
    }
  }
  const purchaseIncart = purchasesInCartData?.data.data

  const quanlityController = (purchase: ExtendedPurchase, index: number) => {
    return (
      <ControllerQuanlity
        value={purchase.buy_count}
        max={purchase.product.quantity}
        onDecrease={(value) => handleQuantity(index, value, value >= 1)}
        onType={handleTypeQuantity(index)}
        onIncrease={(value) => handleQuantity(index, value, value <= purchase.product.quantity)}
        onFocusOut={(value) =>
          handleQuantity(
            index,
            value,
            value >= 1 &&
              value <= purchase.product.quantity &&
              value !== (purchaseIncart as Purchase[])[index].buy_count
          )
        }
      />
    )
  }

  useEffect(() => {
    setExtendedPurchases((prev) => {
      const extendedPurchasesObject = keyBy(prev, '_id')

      return (
        purchaseIncart?.map((purchase) => {
          const isChoosenPurchaseFromLocation = choosenPurchaseIdFromLocation === purchase._id

          return {
            ...purchase,
            disabled: false,
            checked: isChoosenPurchaseFromLocation || Boolean(extendedPurchasesObject[purchase._id]?.checked)
          }
        }) || []
      )
    })
  }, [purchaseIncart, setExtendedPurchases, choosenPurchaseIdFromLocation])

  const deletePurchaseMutation = useMutation({
    mutationFn: purchaseService.deletePurchase,
    onSuccess: () => {
      refetch()
    }
  })

  const handleDelete = (purchaseIndex: number) => () => {
    const purchaseId = extendedPurchases[purchaseIndex]._id
    deletePurchaseMutation.mutate([purchaseId])
  }

  const handleCheck = (purchaseIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtendedPurchases(
      produce((draft) => {
        draft[purchaseIndex].checked = event.target.checked
      })
    )
  }

  return (
    <div className='container py-10'>
      {/* <h1 className='capitalize text-3xl font-bold text-center mb-5'>Giỏ hàng của tôi</h1> */}

      {purchaseIncart && purchaseIncart?.length > 0 ? (
        <div className='grid grid-cols-12'>
          <div className='col-span-12 rounded-md border bg-white'>
            <div className='grid grid-cols-12 gap-12 py-5 px-6 border-b uppercase w-full text-zinc-500 text-sm font-medium'>
              <div className='col-span-5 flex items-center gap-4'>
                <input
                  onChange={handleCheckAll}
                  checked={purchaseIncart?.length === 0 ? false : isAllChecked}
                  type='checkbox'
                  className={`flex-shrink border-gray-100 accent-primary`}
                  disabled={purchaseIncart?.length === 0 && true}
                />
                <span>Sản phẩm</span>
              </div>
              <div className='col-span-2 text-center'>Giá</div>
              <div className='col-span-2 text-center'>Số lượng</div>
              <div className='col-span-2 text-center'>Số tiền</div>
            </div>
            <div>
              <div className=''>
                {extendedPurchases.map((item, index) => (
                  <div
                    key={index}
                    className='hover:bg-greenDark/10 grid items-center py-5 px-6 gap-12 text-black/85 grid-cols-12 w-full border-b text-sm font-medium'
                  >
                    <div className='col-span-5 flex gap-4 items-center'>
                      <input
                        checked={item.checked}
                        onChange={handleCheck(index)}
                        type='checkbox'
                        className={`flex-shrink border-gray-100 accent-primary`}
                      />
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
                    <div className='col-span-2'>{quanlityController(item, index)}</div>
                    <div className='col-span-2 text-center'>{formatCurrency(item.product.price * item.buy_count)}đ</div>
                    <button onClick={handleDelete(index)}>
                      <TiDeleteOutline className='text-2xl font-light text-neutral-500' />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className='py-5 px-6 flex justify-between'>
              <div className='flex gap-4 items-center'>
                <input
                  checked={purchaseIncart?.length === 0 ? false : isAllChecked}
                  type='checkbox'
                  onChange={handleCheckAll}
                  className={`flex-shrink border-gray-100 accent-primary`}
                  disabled={purchaseIncart?.length === 0 && true}
                />
                <p>Chọn Tất Cả</p>
                <p>Xóa</p>
              </div>
              <div className='gap-6 flex items-center'>
                <div className='text-end'>
                  <div className='flex items-center gap-3'>
                    <p>( {checkedPurchases.length} Sản phẩm ):</p>
                    <div className='text-2xl font-bold text-greenDark'>
                      ₫{formatCurrency(totalCheckedPurchasePrice)}
                    </div>
                  </div>
                  <div>
                    Tiết kiệm <span className='text-greenDark'>₫{formatCurrency(totalCheckedPurchaseSavingPrice)}</span>
                  </div>
                </div>
                <Button onClick={handleBuyPurchases} className='px-12 h-[80%]' widthIcon={false}>
                  Mua ngay
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-between mx-auto'>
          <img src={pathImage.noCard} alt='' />
          <p className='my-2 text-neutral-600'>Giỏ hàng của bạn đang trống</p>
          <Link to={pathRoutes.productList}>
            <Button className='mt-2' widthIcon={false}>
              Mua ngay
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
