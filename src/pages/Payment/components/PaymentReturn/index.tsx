import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { pathRoutes } from 'src/constants/path.routes'
import { vnpPaymentService } from 'src/services/vnpPayment.service'
import { useLocation } from 'react-router-dom'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

export default function PaymentReturn() {
  const location = useLocation()

  const { data } = useQuery({
    queryKey: ['return-payment'],
    queryFn: () => vnpPaymentService.getPayment(location.search)
  })

  return (
    <div>
      <div className='flex flex-col py-20 items-center justify-center'>
        <IoIosCheckmarkCircleOutline className='text-[200px] text-primary' />
        <h1 className='text-2xl capitalize text-primary'>{data?.data.message}</h1>
        <Link
          to={pathRoutes.home}
          className='mt-4 flex w-[180px] items-center justify-center rounded-sm bg-primary py-[10px] text-sm capitalize text-white'
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  )
}
