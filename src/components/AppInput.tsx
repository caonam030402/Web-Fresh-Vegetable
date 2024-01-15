import { InputHTMLAttributes } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'
import { MdOutlineRemoveRedEye } from 'react-icons/md'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  isEyePassword?: boolean
}

export default function AppInput({ register, name, rules, errorMessage, ...rest }: Props) {
  const registerResult = register && name ? register(name, rules) : {}

  return (
    <div className='w-full relative my-2'>
      <input
        className={`text-[13px] px-3 focus:border-primary ease-in-out duration-300 w-full rounded-md outline-none border-neutral-300 placeholder:text-sm border py-2 text-sm ${
          errorMessage !== undefined && 'bg-red-100 border-red-600 focus:border-red-900'
        }`}
        type='text'
        {...registerResult}
        {...rest}
      />
      <h1 className='h-[1.2rem] text-left text-xs mt-2 text-red-600'>{errorMessage}</h1>

      {/* <button className='text-base absolute top-[50%] translate-y-[-50%] right-[3%]'>
        <MdOutlineRemoveRedEye className='' />
      </button> */}
    </div>
  )
}
