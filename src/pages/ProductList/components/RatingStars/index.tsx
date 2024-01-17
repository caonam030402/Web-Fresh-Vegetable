import { BsStar, BsStarFill } from 'react-icons/bs'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { pathRoutes } from 'src/constants/path.routes'
import { QueryConfig } from 'src/hooks/useQueryConfig'

interface Props {
  queryConfig: QueryConfig
}

export default function RatingStars({ queryConfig }: Props) {
  const navigate = useNavigate()

  const handleFilterStar = (ratingFilter: number) => {
    navigate({
      pathname: pathRoutes.productList,
      search: createSearchParams({ ...queryConfig, rating_filter: String(ratingFilter) }).toString()
    })
  }

  return (
    <div className='flex flex-col gap-2 mt-2'>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <button onClick={() => handleFilterStar(5 - index)} className='flex gap-1'>
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
