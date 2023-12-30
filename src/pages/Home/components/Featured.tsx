import React from 'react'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { TbTruckDelivery } from 'react-icons/tb'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { BsBox } from 'react-icons/bs'

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
  },
  {
    icon: <BsBox size={25} />,
    title: 'Đảm bảo hoàn tiền',
    description: 'Hoàn tiền trong 30 ngày'
  }
]

export default function Featured() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 p-8 shadow-sm spacerSection'>
      {listData.map((item, index) => (
        <div key={index} className='flex items-center'>
          <div className='cursor-pointer hover:bg-primary text-greenDark hover:text-white hover:scale-105 duration-200 transition-all w-14 h-14 flex items-center justify-center rounded-full bg-primary bg-opacity-30'>
            {item.icon}
          </div>
          <div className='ml-3'>
            <p className='text-base font-semibold'>{item.title}</p>
            <p className='text-sm text-neutral-400'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
