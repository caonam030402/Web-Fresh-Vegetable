import React from 'react'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { TbTruckDelivery } from 'react-icons/tb'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { BsBox } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const listData = [
  {
    icon: <TbTruckDelivery size={32} />,
    title: 'Miễn phí vẫn chuyển',
    description: 'Cho tất cả đơn hàng của bạn'
  },
  {
    icon: <TfiHeadphoneAlt size={28} />,
    title: 'Hỗ trợ khách hàng 24/7',
    description: 'Truy cập ngay vào Hỗ trợ'
  },
  {
    icon: <LiaShoppingBagSolid size={30} />,
    title: 'Thanh toán an toàn 100%',
    description: 'Tiết kiệm chi phí cho bạn'
  }
  // {
  //   icon: <BsBox size={25} />,
  //   title: 'Đảm bảo hoàn tiền',
  //   description: 'Hoàn tiền trong 30 ngày'
  // }
]

export default function Featured() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-10 my-20'>
      {listData.map((item, index) => (
        <Link
          to=''
          key={index}
          className='flex sm:justify-start justify-center items-center p-4 rounded-xl bg-white focus:border-primary hover:shadow-md border hover:border-primary border-white shadow-sm transition-all duration-300'
        >
          <div className='flex-shrink-0 cursor-pointer hover:bg-primary text-greenDark hover:text-white hover:scale-105 duration-200 transition-all w-14 h-14 flex items-center justify-center rounded-full bg-primary bg-opacity-30'>
            {item.icon}
          </div>
          <div className='ml-3'>
            <p className='text-base font-semibold'>{item.title}</p>
            <p className='text-sm text-neutral-400'>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
