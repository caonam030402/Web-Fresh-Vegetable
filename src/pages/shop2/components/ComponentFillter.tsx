import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
interface Item {
  item?: string
}
interface Props {
  title: string
  itemList: Item[]
}
export default function ComponentFillter({ title, itemList }: Props) {
  const [isCheckHover, setIsCheckHover] = useState(false)

  return (
    <div className='mt-5 relative'>
      <div
        className='flex items-center gap-x-2 '
        onMouseEnter={() => setIsCheckHover(true)}
        onMouseLeave={() => setIsCheckHover(false)}
      >
        <p className='text-blue-500'>{title}</p>
        <div className='icon-container cursor-pointer transition-opacity ease-in-out'>
          {isCheckHover ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <div
          className={`bg-white items-container absolute top-full  overflow-hidden z-50 left-20
          transition-all ease-in-out duration-1000 ${isCheckHover ? 'max-h-100%' : 'max-h-0'}`}
        >
          <div className='px-3 py-3'>
            {itemList.map((item, index) => (
              <div>
                <div className='mt-1 cursor-pointer mb-1'>{item.item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
