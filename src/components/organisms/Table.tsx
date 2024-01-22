import React from 'react'

interface Props {
  isLoading?: boolean
  dataHeader?: string[]
  tableBodyRender?: React.ReactNode
  paginationRender?: React.ReactNode
}

export default function Table({ isLoading, dataHeader, paginationRender, tableBodyRender }: Props) {
  return (
    <div>
      {!isLoading ? (
        <table className='text-sx w-full rounded-md bg-white text-left shadow-sm'>
          <thead className='border-b text-sm uppercase text-gray-700'>
            <tr>
              {dataHeader &&
                dataHeader.map((item, index) => (
                  <th scope='col' key={index} className='px-6 py-5'>
                    {item}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className=''>{tableBodyRender}</tbody>
        </table>
      ) : (
        <div className='h-full'>{/* <Skeleton /> */}</div>
      )}
      <div>{paginationRender}</div>
    </div>
  )
}
