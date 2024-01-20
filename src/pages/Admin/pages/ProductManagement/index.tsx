import { ColumnDef, createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import classNames from 'classnames'
import { useContext, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiAddFill } from 'react-icons/ri'
import { TbDots } from 'react-icons/tb'
import { useMutation, useQuery } from 'react-query'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ProductRating from 'src/components/molecules/ProductRating'
import Pagination from 'src/components/organisms/Pagination'
import PopUp from 'src/components/organisms/PopUp'
import Popover from 'src/components/organisms/Popover'
import Table from 'src/components/organisms/Table'
import { pathRoutes } from 'src/constants/path.routes'
import { sortBy } from 'src/constants/product'
import { AppContextAdmin } from 'src/contexts/app.context.admin'
import { AppContext } from 'src/contexts/app.contexts'
import useQueryConfig from 'src/hooks/useQueryConfig'
import { categoryService } from 'src/services/category.service'
import { productService } from 'src/services/product.service'
import { formatCurrency, formatNumberToSocialStyle, generateNameId } from 'src/utils/utils'

type SortByType = 'price' | 'createdAt' | 'view' | 'sold'
type OrderType = 'asc' | 'desc'

interface SortByObjectType {
  sortBy: SortByType
  order: OrderType
}

interface sortByDataType {
  name: string
  queryName: SortByType | SortByObjectType
}

const sortByData: sortByDataType[] = [
  { name: 'Bán chạy', queryName: 'sold' },
  { name: 'Mới nhất', queryName: 'createdAt' },
  { name: 'Giá thấp đến cao', queryName: { sortBy: 'price', order: 'asc' } },
  { name: 'Gía cao đến thấp', queryName: { sortBy: 'price', order: 'desc' } }
]

export default function ProductManagement() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const queryConfig = useQueryConfig()
  const [idProduct, setIdProduct] = useState('')
  const { sort_by = sortBy.view, order, category } = queryConfig

  const navigate = useNavigate()
  const { setProduct, product: Aproduct } = useContext(AppContextAdmin)

  const deleteProductMutation = useMutation({ mutationFn: (id: string) => productService.deleteProduct(id) })

  const { data: productData, refetch } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productService.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  const { data: categoryData } = useQuery({
    queryKey: ['category', queryConfig],
    queryFn: () => {
      return categoryService.getCategories()
    }
  })

  const { data: AProductData } = useQuery({
    queryKey: ['product'],
    queryFn: () => {
      return productService.getAProduct(idProduct)
    }
  })

  const handleDeleteProduct = (id: string) => {
    console.log(id)
    setIsOpenModal(false)
    deleteProductMutation.mutate(id, {
      onSuccess: () => {
        refetch()
        toast.success('Xóa thành công')
      }
    })
  }

  const handleEditProduct = (id: string) => {
    setIdProduct(id)
    setProduct(AProductData?.data.data)
    // navigate(path.productManager)
  }

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  const handleSortCategory = (category: Category) => {
    navigate({
      pathname: pathRoutes.product_management,
      search: createSearchParams({ ...queryConfig, category: category._id }).toString()
    })
  }

  const renderCategorySortName = () => {
    let result = ''
    const matchingSort = categoryData?.data.data.find((item) => {
      if (category === item._id) {
        return true
      } else {
        return false
      }
    })

    if (typeof matchingSort === 'object') {
      result = matchingSort.name
    } else {
      result = 'Tất cả danh mục'
    }
    return <div>{result}</div>
  }

  const handleSort = (sortByValue: SortByType | SortByObjectType) => {
    if (typeof sortByValue === 'string') {
      const modifiedQueryConfig = { ...queryConfig }
      delete modifiedQueryConfig.order

      navigate({
        pathname: pathRoutes.product_management,
        search: createSearchParams({ ...modifiedQueryConfig, sort_by: sortByValue }).toString()
      })
    } else {
      const { sortBy, order } = sortByValue
      navigate({
        pathname: pathRoutes.product_management,
        search: createSearchParams({ ...queryConfig, sort_by: sortBy, order: order }).toString()
      })
    }
  }

  const isActiveSort = (sortByValue: SortByType | OrderType) => {
    if (order) {
      return sortByValue === order
    }
    return sort_by === sortByValue
  }

  const renderNameSort = () => {
    let result
    const matchingSort = sortByData.find((item) => {
      if (sort_by === item.queryName) {
        return true
      } else if (
        typeof item.queryName === 'object' &&
        item.queryName.order === order &&
        item.queryName.sortBy === sort_by
      ) {
        return true
      } else {
        return false
      }
    })

    if (typeof matchingSort === 'object') {
      result = matchingSort.name
    } else {
      result = 'Bộ lọc'
    }

    return <div>{result}</div>
  }

  const products = productData?.data.data.products
  const keyData = ['tên sản phẩm', 'Giá', 'Đã bán', 'Số lượng', 'Loại', 'Đánh giá', 'Tùy chỉnh']

  return (
    <div>
      <div className='mb-4 flex justify-between'>
        <div className='flex items-center gap-3'>
          <Popover
            classNameArrow=''
            duration={0}
            offsetTop={0}
            className='flex items-center'
            renderPopover={
              <div>
                <ul className='z-30 w-[200px] border shadow-sm'>
                  {categoryData?.data.data.map((item, index) => {
                    const isActive = queryConfig.category === item._id
                    return (
                      <button
                        onClick={() => handleSortCategory(item)}
                        key={index}
                        className={classNames('flex w-full items-center justify-between bg-white px-3 py-2', {
                          'text-primary': isActive
                        })}
                      >
                        <div>{item.name}</div>
                      </button>
                    )
                  })}
                </ul>
              </div>
            }
          >
            <button className='flex w-[200px] items-center justify-between rounded-md border bg-white px-3 py-2 hover:rounded-bl-none hover:rounded-br-none'>
              <div>{categoryData ? renderCategorySortName() : '...'}</div>
              <MdKeyboardArrowDown />
            </button>
          </Popover>
          <Popover
            classNameArrow=''
            duration={0}
            offsetTop={0}
            className='flex items-center'
            renderPopover={
              <div>
                <ul className='z-30 w-[200px] border shadow-sm'>
                  {sortByData.map((item, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          typeof item.queryName === 'string' ? { sortBy: item.queryName, order: '' } : item.queryName
                          if (typeof item.queryName === 'string') {
                            handleSort(item.queryName)
                          } else {
                            const { sortBy, order } = item.queryName
                            handleSort({ sortBy, order })
                          }
                        }}
                        className={classNames('flex w-full items-center justify-between bg-white px-3 py-2', {
                          'text-primary':
                            typeof item.queryName === 'string'
                              ? isActiveSort(item.queryName)
                              : isActiveSort(item.queryName.order)
                        })}
                      >
                        <div>{item.name}</div>
                        <MdKeyboardArrowDown />
                      </button>
                    )
                  })}
                </ul>
              </div>
            }
          >
            <button className='flex w-[200px] items-center justify-between rounded-md border bg-white px-3 py-2 hover:rounded-bl-none hover:rounded-br-none'>
              <div>{renderNameSort()}</div>
              <MdKeyboardArrowDown />
            </button>
          </Popover>
        </div>
        <Link
          to={pathRoutes.add_product}
          className='flex items-center rounded-md border bg-primary px-3 py-2 text-white'
        >
          <RiAddFill className='mr-2 text-lg' />
          <div>Thêm sản phẩm</div>
        </Link>
      </div>
      <Table
        dataHeader={keyData}
        // isLoading={isLoading}
        tableBodyRender={productData?.data.data.products?.map((item, index) => (
          <tr key={index} className=' rounded-md border-b bg-white'>
            <th className=' flex items-center px-6 py-4 text-gray-900'>
              <img className='mr-3 h-10 w-10 flex-shrink-0 rounded-md border object-cover' src={item.image} alt='' />
              <div className=' w-[200px] flex-1 truncate'>{item.name}</div>
            </th>
            <td className='px-6 py-4'>₫{formatCurrency(item.price)}</td>
            <td className='px-6 py-4'>{formatNumberToSocialStyle(item.sold)}</td>
            <td className='px-6 py-4'>{formatNumberToSocialStyle(item.quantity)}</td>
            <td className='px-6 py-4'>{item.category.name}</td>
            <td className='px-6 py-4'>
              <div className='flex items-center'>
                <ProductRating rating={item.rating} />
              </div>
            </td>
            <td className='cursor-pointer px-6 py-4 text-primary hover:underline'>
              <Popover
                className=''
                renderPopover={
                  <div>
                    <ul className='flex flex-col rounded-md border bg-white shadow-md'>
                      <Link
                        to={`${pathRoutes.update_product}${generateNameId({ name: item.name, id: item._id })}`}
                        onClick={() => handleEditProduct(item._id)}
                        className='px-4 py-2 hover:text-primary'
                      >
                        Sửa Sản Phẩm
                      </Link>
                      <button onClick={handleOpenModal} className='px-4 py-2 hover:text-primary'>
                        Xóa Sản Phẩm
                      </button>
                    </ul>
                  </div>
                }
              >
                <TbDots className='text-xl' />
              </Popover>
              <PopUp
                setIsOpenModal={setIsOpenModal}
                isOpenModal={isOpenModal}
                message='Bạn có muốn xóa sản phẩm không ?'
                handleClick={() => handleDeleteProduct(item._id)}
              />
            </td>
          </tr>
        ))}
        paginationRender={
          products && (
            <div className='flex items-center justify-between bg-white px-6 py-5'>
              <div className='uppercase'>
                hiển thị <span>{productData.data.data.pagination.limit}</span>/
                {productData.data.data.pagination.page_size * productData.data.data.pagination.limit}
              </div>
              <Pagination
                pathname={pathRoutes.product_management}
                pageSize={productData.data.data.pagination.page_size}
                queryConfig={queryConfig}
              />
            </div>
          )
        }
      />
    </div>
  )
}
