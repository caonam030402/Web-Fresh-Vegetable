import React, { useReducer, useState } from 'react'
import Button from 'src/components/atoms/Button'
import { pathImage } from 'src/configs/path.image'

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
  }
  throw Error('Unknown action:' + action.type)
}

export default function CommentItem() {
  const [arrayState, dispatch] = useReducer(reducer, comments)
  const [loadComment, setLoadComment] = useState(5)

  const handleClick = () => {
    setLoadComment((loadComment) => loadComment + 5)
  }
  return (
    <div>
      <div className='mb-7'>
        {comments.slice(0, loadComment).map((item, index) => (
          <div key={index}>
            <div className='flex my-[24px]'>
              <img src={item.user} alt='' className='w-10 h-10 rounded-full object-cover mr-4' />
              <div>
                <div className='flex'>
                  <div className='text-zinc-900 text-sm font-medium'>{item.fullName}</div>
                  <div className='mx-2'>•</div>
                  <div className='text-neutral-400 text-sm font-normal'>{item.nowDate}</div>
                </div>
                <div className='text-stone-500 text-sm font-normal mt-[6px]'>{item.message}</div>
              </div>
            </div>
            {comments.length - 1 === index ? null : <div className='border border-neutral-200'></div>}
          </div>
        ))}
      </div>
      {comments.length > loadComment && <Button onClick={handleClick}> {'Load more 5 comments'}</Button>}
    </div>
  )
}

const comments = [
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  },
  {
    user: pathImage.user,
    message:
      'In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.',
    fullName: 'Annette Black',
    nowDate: '26 Apr, 2021'
  }
]
