import { pathImage } from 'src/configs/path.image'
import Info from './Info'
import Owner from './Owner'
import Banner from './Banner'

export default function BlogDetail() {
  return (
    <div className='mt-[30px]'>
      <img src={pathImage.orange} className='w-full h-full' />
      <Info />
      <div className='font-medium  text-zinc-900 text-[32px] w-full'>
        Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.
      </div>
      <Owner />
      <div className='font-medium text-zinc-900 text-xl my-3'>
        Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus
        tristique felis dolor.
      </div>
      <div className='text-zinc-500 text-lg font-normal my-3'>
        Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut
        dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.
      </div>
      <div className='text-zinc-500 text-lg font-normal my-3'>
        Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod
        commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie,
        ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus.
        Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit.
        ur ridiculus mus.
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-[10px] sm:gap-[30px] my-5'>
        <img src={pathImage.orange} />
        <img src={pathImage.orange} />
      </div>
      <div className='text-zinc-500 text-lg font-normal my-3'>
        Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam
        non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis
        euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh
        ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.
      </div>
      <Banner />
    </div>
  )
}
