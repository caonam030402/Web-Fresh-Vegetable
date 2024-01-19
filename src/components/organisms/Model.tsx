import React, { MouseEventHandler, useState } from 'react'
import Button from '../atoms/Button'

enum TypeButton {
  'Comeback',
  'Confirm'
}

interface Props {
  title: string
  textButtonComebackCustom?: string
  textButtonConfirmCustom?: string
  handleOpenModal: () => void
  children: React.ReactNode
}

export default function Modal({
  handleOpenModal,
  children,
  textButtonComebackCustom = 'Hủy',
  textButtonConfirmCustom = 'Xác nhận',
  title
}: Props) {
  return (
    <div className='fixed inset-0 z-50 '>
      <button onClick={handleOpenModal} className='fixed inset-0 mx-auto bg-black/20'></button>
      <div className='absolute top-1/2 left-1/2 w-[70vh] translate-y-[-50%] translate-x-[-50%] border-[1px] border-black/30 bg-white '>
        <div className=' border-b-[1px] py-4 px-6 text-lg font-medium'>{title}</div>
        <div className='mb-10 px-6'> {children} </div>
        <div className='flex justify-end gap-3 border-t-[0.4px] border-black/10 px-6 py-4'>
          <Button onClick={handleOpenModal} className='h-10 w-32 border-[1px] border-black/40 bg-white'>
            {textButtonComebackCustom}
          </Button>
          <Button className='h-10 w-32 bg-primaryColor text-white'>{textButtonConfirmCustom}</Button>
        </div>
      </div>
    </div>
  )
}
