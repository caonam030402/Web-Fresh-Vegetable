import { VscChromeMinimize } from 'react-icons/vsc'
import { VscAdd } from 'react-icons/vsc'

export default function ControllerQuanlity() {
  return (
    <div className='flex p-[8px] w-[130px] justify-between gap-3 items-center bg-white border rounded-full'>
      <span className='rounded-full flex text-sm items-center justify-center bg-neutral-100 border w-[30px] h-[30px]'>
        <VscChromeMinimize />
      </span>
      <span className='text-sm'>5</span>
      <span className='rounded-full flex text-sm items-center justify-center bg-neutral-100 border w-[30px] h-[30px]'>
        <VscAdd />
      </span>
    </div>
  )
}
