import { FiSearch } from 'react-icons/fi'
import useSearchProducts from 'src/hooks/useSearchProducts'

export default function AppSearchBar() {
  const { register, onSubmitSearch } = useSearchProducts()

  return (
    <form
      onSubmit={onSubmitSearch}
      className='focus:border-green-950 transition-all border-[1.5px]  border-primary rounded-full flex-1 flex items-center justify-between h-[40px]'
    >
      <input
        {...register('name')}
        className='outline-none rounded-full flex-1 px-5 py-2'
        placeholder='Tìm kiếm sản phẩm...'
        type='text'
      />
      <button className='px-5 h-full'>
        <FiSearch className='hover:text-primary transition-colors' size={17} />
      </button>
    </form>
  )
}
