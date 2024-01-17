export default function ProductDetail() {
  return (
    <div className='container bg-white my-10 grid grid-cols-12 p-5'>
      <div className='col-span-5'>
        <div className='w-full relative pb-[100%]'>
          <img
            className='w-full h-full object-cover absolute rounded-sm'
            src='https://cdn.pixabay.com/photo/2016/11/30/15/00/apples-1872997_1280.jpg'
            alt=''
          />
        </div>
      </div>
      <div className='col-span-7 text-lg'>
        <h1>Chinese Cabbage</h1>
      </div>
    </div>
  )
}
