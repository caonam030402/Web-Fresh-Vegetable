import { useEffect, useState } from 'react'
import { TbDots } from 'react-icons/tb'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import PopUp from 'src/components/organisms/PopUp'
import Popover from 'src/components/organisms/Popover'
import Table from 'src/components/organisms/Table'
import Tooltip from 'src/components/organisms/Tooltip'
import { purchasesStatus } from 'src/constants/purchase'
import { purchaseService } from 'src/services/purchase.service'
import { formatCurrency, formatNumberToSocialStyle } from 'src/utils/utils'

const keyData = ['Khách Hàng', 'Tên Sản phẩm', 'Giá', 'Trạng Thái', 'Địa Chỉ', 'Thời gian']

export default function OrderMangagement() {
  const { data: purchases, refetch } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.all }],
    queryFn: () => purchaseService.getPurchasesWithParam(purchasesStatus.all),
    select: (data) => data.data.data.filter((purchase) => purchase.status !== -1)
  })

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [popupStatusType, setPopupStatusType] = useState<number>()
  const [idPurchase, setIdpurchase] = useState('')

  const orderConfirmationMutation = useMutation({ mutationFn: purchaseService.updatePurchase })

  const renderStatus = (status: PurchaseStatus) => {
    let nameStatus = {
      name: '',
      style: ''
    }

    switch (status) {
      case purchasesStatus.waitForConfirmation:
        nameStatus = {
          name: 'Chờ xác nhận',
          style: 'bg-yellow-400/20 text-yellow-600'
        }
        break
      case purchasesStatus.cancelled:
        nameStatus = {
          name: 'Đã hủy',
          style: 'text-red-500 bg-red-400/20'
        }
        break
      case purchasesStatus.inProgress:
        nameStatus = {
          name: 'Đang Giao Hàng',
          style: 'text-blue-500 bg-blue-400/20'
        }
        break
      case purchasesStatus.delivered:
        nameStatus = {
          name: 'Đã giao',
          style: 'bg-green-500/20 text-green-500'
        }
        break
      case purchasesStatus.waitForGetting:
        nameStatus = {
          name: 'Chờ lấy hàng',
          style: 'bg-slate-700/20 text-slate-700'
        }
        break
    }

    return nameStatus
  }

  const handleOderConfirmation = () => {
    setIsOpenModal(false)
    orderConfirmationMutation.mutate(
      { status: purchasesStatus.waitForGetting, purchase_id: idPurchase },
      {
        onSuccess: (data) => {
          console.log(data)
          toast.success('Xác nhận đơn thành công')
          refetch()
        }
      }
    )
  }

  const handleOpenModal = (stutus: number, _id: string) => {
    setPopupStatusType(stutus)
    setIsOpenModal(true)
    setIdpurchase(_id)
  }

  const handlePopup = () => {
    if (popupStatusType === purchasesStatus.waitForConfirmation) {
      return { message: 'Bạn có chắc chắn xác nhận đơn hàng không ?', function: () => handleOderConfirmation() }
    } else if (popupStatusType === purchasesStatus.cancelled) {
      return { message: 'Bạn có chắc chắn hủy đơn hàng không ?', function: () => null }
    } else {
      return { message: 'Bạn chắc chắn xóa đơn hàng không ?', function: () => null }
    }
  }
  console.log(purchases)
  return (
    <div className='px-8'>
      <Table
        dataHeader={keyData}
        tableBodyRender={
          purchases &&
          purchases?.map((purchase, index) => (
            <tr key={index} className=' rounded-md border-b bg-white '>
              <td className='px-6 py-4 max-w-[150px] truncate'>{purchase.user.email}</td>
              <td className=' max-w-[250px] truncate px-6 py-4'>{purchase.product.name}</td>
              <td className=' px-6 py-4'>{formatCurrency(purchase.product.price)}đ</td>
              <td className=' px-6 py-4'>
                <Popover
                  placementFloating='bottom'
                  renderPopover={
                    (purchase.status === purchasesStatus.waitForConfirmation && (
                      <ul className='flex w-[115px] flex-col rounded-md border bg-white shadow-sm'>
                        <button
                          onClick={() => handleOpenModal(purchasesStatus.waitForConfirmation, purchase._id)}
                          className='w-full border-b py-2 hover:text-primary'
                        >
                          Xác nhận đơn
                        </button>
                        <button
                          onClick={() => handleOpenModal(purchasesStatus.cancelled, purchase._id)}
                          className='w-full py-2 hover:text-primary'
                        >
                          Hủy đơn
                        </button>
                      </ul>
                    )) ||
                    (purchase.status === purchasesStatus.waitForGetting && (
                      <ul className='flex w-[115px] flex-col rounded-md border bg-white shadow-sm'>
                        <button className='w-full border-b py-2 hover:text-primary'>Giao hàng</button>
                      </ul>
                    ))
                  }
                >
                  <div
                    className={`flex cursor-pointer items-center justify-center rounded-full px-3 py-1 ${
                      renderStatus(purchase.status).style
                    }`}
                  >
                    {renderStatus(purchase.status).name}
                  </div>
                </Popover>
              </td>
              <td className='px-6 py-4 max-w-[150px] truncate'>{purchase.user.address}</td>
              <td className=' px-6 py-4'>{new Date(purchase.createdAt).toLocaleString('vi-VN')}</td>
              <td className='cursor-pointer px-6 py-4 text-primary hover:underline'></td>
            </tr>
          ))
        }
      />
      <PopUp
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
        message={handlePopup()?.message}
        handleClick={handlePopup()?.function}
      />
    </div>
  )
}
