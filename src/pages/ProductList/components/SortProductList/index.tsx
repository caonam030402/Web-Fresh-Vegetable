import { createSearchParams, Link, useNavigate } from 'react-router-dom'

import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineCheck } from 'react-icons/md'
import { QueryConfig } from 'src/hooks/useQueryConfig'

import { sortBy, order as orderConstant } from 'src/constants/product'
import classNames from 'classnames'

import omit from 'lodash/omit'
import { pathRoutes } from 'src/constants/path.routes'
import Popover from 'src/components/organisms/Popover'
import { AppContext } from 'src/contexts/app.contexts'
import { useContext } from 'react'
import Button from 'src/components/atoms/Button'
import { RiAddFill } from 'react-icons/ri'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}

export default function SortProductList({ queryConfig, pageSize }: Props) {
  const { isAdmin } = useContext(AppContext)

  const { sort_by = sortBy.view, order } = queryConfig
  const page = Number(queryConfig.page)
  const navigate = useNavigate()

  // SORT COMMON | LATEST | SOLD
  const isActiveSort = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
  }

  const handleSort = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    navigate({
      pathname: pathRoutes.productList,
      search: createSearchParams(omit({ ...queryConfig, sort_by: sortByValue.toString() }, ['order'])).toString()
    })
  }

  // SORT PRICE ORDER
  const isActivePriceOrder = (sortByValue: Exclude<ProductListConfig['order'], undefined>) => {
    return order === sortByValue
  }

  const handlePriceOrder = (orderValue: Exclude<ProductListConfig['order'], undefined>) => {
    navigate({
      pathname: pathRoutes.productList,
      search: createSearchParams({ ...queryConfig, sort_by: sortBy.price, order: orderValue }).toString()
    })
  }

  return (
    <div className='mb-3 flex w-full flex-wrap justify-between bg-white shadow-sm px-2 py-2 sm:mb-0 sm:py-3 sm:px-5'>
      <div className='grid grid-cols-12 flex-wrap items-center gap-3 sm:flex sm:justify-start'>
        <h1 className='hidden md:block'>Sort by</h1>
        {/* SORT COMMON */}
        <button
          className={classNames('col-span-4 flex items-center justify-center rounded-sm px-3 py-2 text-sm ', {
            'bg-primary text-white hover:bg-primary/80': isActiveSort(sortBy.view),
            'bg-greenDark/10 text-black hover:bg-slate-100': !isActiveSort(sortBy.view)
          })}
          onClick={() => handleSort(sortBy.view)}
        >
          Phổ biến
        </button>
        {/* SORT LATEST */}
        <button
          className={classNames('col-span-4 flex items-center justify-center rounded-sm  px-3 py-2 text-sm', {
            'bg-primary text-white hover:bg-primary/80': isActiveSort(sortBy.createdAt),
            'bg-greenDark/10 text-black hover:bg-slate-100': !isActiveSort(sortBy.createdAt)
          })}
          onClick={() => handleSort(sortBy.createdAt)}
        >
          Mới nhất
        </button>
        {/* SORT SOLD */}
        <button
          className={classNames(
            'col-span-4 hidden items-center justify-center rounded-sm px-3  py-2 text-sm sm:flex ',
            {
              'bg-primary text-white hover:bg-primary/80': isActiveSort(sortBy.sold),
              'bg-greenDark/10 text-black hover:bg-slate-100': !isActiveSort(sortBy.sold)
            }
          )}
          onClick={() => handleSort(sortBy.sold)}
        >
          Bán chạy
        </button>
        {/* SORT PRICE */}
        <Popover
          classNameArrow=''
          duration={0}
          offsetTop={1}
          className='col-span-4 flex items-center'
          renderPopover={
            <div className=' rounded-sm bg-white shadow-sm '>
              <ul className='sm:w-[200px]'>
                <button
                  className=' flex w-full justify-between p-3 hover:text-primary'
                  onClick={() => handlePriceOrder(orderConstant.asc as Exclude<ProductListConfig['order'], undefined>)}
                >
                  Giá thấp đến cao
                  {isActivePriceOrder(orderConstant.asc) && (
                    <span className='text-primary'>
                      <MdOutlineCheck className='text-lg text-primary' />
                    </span>
                  )}
                </button>
                <button
                  className=' flex w-full justify-between p-3 hover:text-primary'
                  onClick={() => handlePriceOrder(orderConstant.desc)}
                >
                  <span> Giá cao đến thấp </span>
                  {isActivePriceOrder(orderConstant.desc) && (
                    <span className='text-primary'>
                      <MdOutlineCheck className='text-lg text-primary' />
                    </span>
                  )}
                </button>
              </ul>
            </div>
          }
        >
          <div className=' flex w-[200px] items-center justify-between rounded-sm bg-greenDark/10 px-3 py-2'>
            <span className={classNames('line-clamp-1', { 'text-primary': order })}>
              {order ? (order === orderConstant.asc ? 'Giá thấp đến cao' : 'Giá cao đến thấp') : 'Giá'}
            </span>
            <span>
              <MdKeyboardArrowDown className='text-base' />
            </span>
          </div>
        </Popover>
        {/* PAGINATION TOP */}
      </div>
      {!isAdmin && (
        <div className='hidden items-center lg:flex'>
          <div>
            <span className='text-primary'>{page}</span>
            <span>/</span>
            <span>{pageSize}</span>
          </div>
          <div className='ml-6 flex'>
            {page === 1 ? (
              <button className='mr-[1px] cursor-not-allowed rounded-sm bg-white p-3 opacity-50'>
                <MdKeyboardArrowLeft />
              </button>
            ) : (
              <Link
                to={{
                  pathname: pathRoutes.productList,
                  search: createSearchParams({ ...queryConfig, page: (page - 1).toString() }).toString()
                }}
                className='mr-[1px] rounded-sm bg-greenDark/10 p-3'
              >
                <MdKeyboardArrowLeft />
              </Link>
            )}
            {page === pageSize ? (
              <button className='mr-[1px] cursor-not-allowed rounded-sm bg-greenDark/10 p-3 opacity-50'>
                <MdKeyboardArrowRight />
              </button>
            ) : (
              <Link
                to={{
                  pathname: pathRoutes.productList,
                  search: createSearchParams({ ...queryConfig, page: (page + 1).toString() }).toString()
                }}
                className='rounded-sm bg-greenDark/10 p-3'
              >
                <MdKeyboardArrowRight />
              </Link>
            )}
          </div>
        </div>
      )}
      {isAdmin && (
        <Link to={pathRoutes.add_product} className=''>
          <Button className='rounded-md' widthIcon={false}>
            <div className='flex items-center gap-1 '>
              <span>
                <RiAddFill className='mr-2 text-lg' />
              </span>
              <span>Thêm sản phẩm</span>
            </div>
          </Button>
        </Link>
      )}
    </div>
  )
}
