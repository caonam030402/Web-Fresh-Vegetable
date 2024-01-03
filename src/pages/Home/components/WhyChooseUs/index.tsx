import { FaCheck } from 'react-icons/fa6'
import AppButton from 'src/components/AppButton'
import { pathImage } from 'src/configs/path.image'

export default function WhyChooseUs() {
  return (
    <div className='flex gap-10 spacerSection flex-wrap'>
      <div className='w-full md:w-[50%] flex gap-5 items-center group'>
        <div className='w-[40%] hover:h-96 h-80 hover:w-[60%] relative rounded-lg ease-in-out duration-300'>
          <img
            className='cursor-pointer object-cover h-full w-full rounded-lg absolute z-10'
            src='https://img.freepik.com/free-photo/portrait-asian-farmer-man-woman-holding-wooden-box-full-fresh-raw-vegetables-organic-farm-concept_1150-55829.jpg?t=st=1703982820~exp=1703983420~hmac=08c03d89a171c76e7c3a934456c3d797b49ba392cb8d1fa379888ea3721d1a30'
            alt=''
          />
          <img className='absolute left-[-15%] bottom-[-15%] z-20' src={pathImage.leaf} alt='' />
          <img className='absolute right-[-3%] top-[-18%] z-0' src={pathImage.leafBlur} alt='' />
        </div>
        <div className='w-[60%] h-96 cursor-pointer rounded-lg overflow-hidden'>
          <img
            className='object-cover h-full w-full hover:scale-110 hover:brightness-50 ease-in-out duration-300'
            src=' https://img.freepik.com/free-photo/portrait-asian-farmer-woman-holding-wooden-box-full-fresh-raw-vegetables-organic-farm-concept_1150-55791.jpg?w=1060&t=st=1703982896~exp=1703983496~hmac=568a73e8e1817b086127803fd0d275de4bf5b4d24f321e7522b97056e6cc93bb'
            alt=''
          />
        </div>
      </div>
      <div className='py-2 flex-1'>
        <div className='text-3xl font-bold uppercase'>
          <h1 className=' w-[80%] text-greenDark mb-1'>Cam kết 100%</h1>
          <span> sản phẩm chất lượng</span>
        </div>
        <div>
          <div className='mt-4'>
            <div className='flex gap-3'>
              <div className='w-3 h-3 rounded-full relative bg-primary p-3 text-white items-center justify-center'>
                <FaCheck className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]' />
              </div>
              <div>
                <div className='text-base font-semibold'>Thực phẩm lành mạnh và tự nhiên an tâm cho người sử dụng.</div>
                <p className='mt-1 text-zinc-500 text-sm '>
                  Thực phẩm lành mạnh và tự nhiên không chỉ giữ nguyên hương vị và dinh dưỡng mà còn mang lại sự an tâm.
                  Sản xuất bền vững của chúng hỗ trợ cân bằng sinh học, duy trì sức khỏe và góp phần vào bảo vệ môi
                  trường.
                </p>
              </div>
            </div>
            <div className='flex gap-3 mt-5 mb-8'>
              <div className='w-3 h-3 rounded-full relative bg-primary p-3 text-white items-center justify-center'>
                <FaCheck className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]' />
              </div>
              <div>
                <div className='text-base font-semibold'>Đảm bảo thực phẩm tươi, chất lượng cho bạn</div>
                <p className='mt-1 text-zinc-500 text-sm '>
                  Chúng tôi cam kết cung cấp sản phẩm thực phẩm an toàn và đạt tiêu chuẩn cao nhất. Đội ngũ chuyên gia
                  của chúng tôi đảm bảo kiểm soát chất lượng mỗi sản phẩm để đảm bảo sự an tâm của bạn khi lựa chọn.
                </p>
              </div>
            </div>
          </div>
          <AppButton>Mua ngay</AppButton>
        </div>
      </div>
    </div>
  )
}
