import { pathImage } from 'src/configs/path.image'
export default function AboutUs() {
  return (
    <div className='spacerSection flex items-center gap-10'>
      <div className='w-1/2'>
        <div className='text-3xl font-bold uppercase w-[65%] mb-4'>100% Trusted Organic Food Store</div>
        <p className='text-sm  leading-[27px] '>
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras
          quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa
          vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
        </p>
      </div>
      <div className='flex-1'>
        <img className='w-full h-full object-cover' src={pathImage.famer} alt='' />
      </div>
    </div>
  )
}
