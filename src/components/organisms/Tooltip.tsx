import React from 'react'

type Location = 'bottom' | 'left'

interface Props {
  content: string
  children?: React.ReactNode
  location?: Location
}

export default function Tooltip({ content, children, location = 'bottom' }: Props) {
  return (
    <div className='relative group'>
      {children}
      <div
        className={`group-hover:block text-nowrap text-white px-4 py-[2px] rounded-md hidden cursor-pointer text-[12px] bg-greenDark transition-all duration-300 absolute ${
          location === 'bottom' && 'left-[50%] translate-x-[-50%] bottom-[-70%]'
        } ${location === 'left' && 'right-[120%] bottom-[50%] translate-y-[50%]'}`}
      >
        {content}
        {location === 'bottom' && (
          <div className='absolute top-[-22%] left-[50%] translate-x-[-50%] border-l-[5px] border-l-transparent border-r-[5px]  border-b-[5px] border-r-transparent border-b-greenDark'></div>
        )}
        {location === 'left' && (
          <div className='absolute right-[-3%] bottom-[50%] translate-y-[50%] border-l-[5px] border-t-transparent border-b-[5px]  border-t-[5px] border-b-transparent border-l-greenDark'></div>
        )}
      </div>
    </div>
  )
}
