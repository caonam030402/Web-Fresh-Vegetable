import { Link } from 'react-router-dom'
import { pathImage } from 'src/configs/path.image'
import { FaFacebook, FaShare } from 'react-icons/fa'

export default function AppFooter() {
  return (
    <div className='bg-white py-16'>
      <div className='container grid md:grid-cols-4 gap-10 col-span-2'>
        <div className='col-span-1 text-sm text-primary'>
          <Link to=''>
            <img src={pathImage.logo} alt='' />
          </Link>
          <div className='mt-4'>
            Bio Ngon - Thương hiệu tiên phong kết hợp tiêu chuẩn VietGAP và canh tác hữu cơ tại những vùng đất sạch,
            nguồn nước sạch và không sử dụng bất kỳ loại hóa chất nào.
          </div>
          <div className='font-bold my-5'>CÔNG TY CP ĐẦU TƯ DỊCH VỤ VIỆT AN</div>
          <div>MST: 0316416477</div>
          <div>Ngày cấp: 31/07/2020</div>
          <div>Nơi cấp: Sở kế hoạch và đầu tư thành phố Hồ Chí Minh</div>
        </div>
        <div className='col-span-1 text-sm text-primary'>
          <div className='font-bold mb-3 text-greenDark'>VỀ CHÚNG TÔI</div>
          <div className='flex flex-col gap-2'>
            <div>Liên hệ</div>
            <div>Liên kết</div>
            <div>Truy xuất nguồn gốc</div>
            <div>Khách hàng thân thiết</div>
          </div>
        </div>
        <div className='col-span-1 text-sm text-primary'>
          <div className='font-bold mb-3 text-greenDark'>CHÍNH SÁCH</div>
          <div className='flex flex-col gap-2'>
            <Link to=''>Chính sách giao hàng</Link>
            <Link to=''>Chính sách đổi trả</Link>
            <Link to=''>Chính sách bảo mật</Link>
            <Link to=''>Điều khoản dịch vụ</Link>
            <Link to=''>Hướng dẫn đặt hàng</Link>
            <Link to=''>Hướng dẫn dùng khuyến mãi</Link>
          </div>
        </div>
        <div className='col-span-1 text-sm text-primary relative'>
          <div className='font-bold text-greenDark'>HOTLINE</div>
          <div className='flex flex-col my-3 gap-2 font-bold text-3xl text-secondary'>0786416477</div>
          <div className='font-bold mb-3 text-greenDark uppercase'>Thông tin liên hệ</div>
          <div className='text-xs'>
            <div className='font-bold text-greenDark uppercase'>CSKH</div>
            <div className='text-greenDark '>0786416477</div>
          </div>
          <div className='text-xs mt-3'>
            <div className='font-bold text-greenDark uppercase'>Địa chỉ</div>
            <div className='text-greenDark '>63 Ca Văn Thỉnh, P11, Q. Tân Bình, Tp. HCM</div>
          </div>
          <div className='text-xs mt-3'>
            <div className='font-bold text-greenDark uppercase'>Email</div>
            <div className='text-greenDark '>bio-ngon@bio-ngon.com</div>
          </div>
          <div className='mb-2 mt-5 font-bold text-greenDark uppercase'>THEO DÕI CHÚNG TÔI</div>
          <div className='w-full bg-contact_background relative bg-cover object-cover text-white'>
            <div className='z-10 w-full p-3'>
              <Link to='' className='flex gap-3'>
                <div className='w-16 h-16 bg-white flex items-center justify-center'>
                  <img src={pathImage.logo} alt='' />
                </div>
                <div className=''>
                  <div className='text-base font-medium'>Bio Ngon</div>
                  <div>9.973 followers</div>
                </div>
              </Link>
              <div className='mt-10 text-black text-xs flex items-center justify-between'>
                <Link className=' p-2 bg-white flex' to=''>
                  <div className='flex items-center gap-2'>
                    <FaFacebook /> <span>Follow Page</span>
                  </div>
                </Link>
                <Link to='' className='p-2 bg-white xl:flex hidden'>
                  <div className='flex items-center gap-2'>
                    <FaShare /> <span>Share</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-5 font-bold text-greenDark uppercase'>Phương thức thanh toán</div>
          <div className='flex gap-5 mt-3'>
            <Link to=''>
              <img src={pathImage.paymentMomo} alt='' />
            </Link>
            <Link to=''>
              <img src={pathImage.paymentZalo} alt='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
