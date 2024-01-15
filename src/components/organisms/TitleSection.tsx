import { IoArrowForward } from 'react-icons/io5'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  viewAll: boolean
}

export default function TitleSection({ title, viewAll = true }: Props) {
  return (
    <div className={`${viewAll && 'flex'} items-center justify-between mb-7`}>
      <h1 className='uppercase text-2xl font-bold text-center text-greenDark'>{title}</h1>
      {viewAll && (
        <Link to='' className='flex items-center gap-2 text-xs text-greenDark hover:underline'>
          <span>Xem tất cả</span>
          <span>
            <IoArrowForward />
          </span>
        </Link>
      )}
    </div>
  )
}
