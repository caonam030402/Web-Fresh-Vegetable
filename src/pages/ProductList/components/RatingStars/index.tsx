import React from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'

export default function RatingStars() {
  return (
    <div className='flex flex-col gap-2 mt-2'>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <button className='flex gap-1'>
              {Array(5)
                .fill(0)
                .map((_, indexStar) => {
                  if (indexStar < 5 - index) {
                    return <BsStarFill key={indexStar} className='mr-[6px] text-[13px] text-yellow-500' />
                  } else {
                    return <BsStar key={indexStar} className='mr-[6px] text-[13px] text-yellow-500' />
                  }
                })}
              <span className='lowercase text-xs'>Trở lên</span>
            </button>
          )
        })}
    </div>
  )
}
