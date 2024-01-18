import React from 'react'
import ComponentFillter from './ComponentFillter'

export default function Fillter() {
  const itemList = [
    {
      item: 'item1'
    },
    {
      item: 'item2'
    },
    {
      item: 'item3'
    }
  ]
  return (
    <div className='grid grid-cols-2'>
      <div className='flex gap-x-6'>
        <ComponentFillter title={'Select Category'} itemList={itemList} />

        <ComponentFillter title={'Select Price'} itemList={itemList} />
        <ComponentFillter title={'Select Price'} itemList={itemList} />
      </div>
      <div className='flex gap-x-6 justify-self-end'>
        <ComponentFillter title={'Sort by: Latest'} itemList={itemList} />
        <ComponentFillter title={'Show: 16'} itemList={itemList} />
      </div>
    </div>
  )
}
