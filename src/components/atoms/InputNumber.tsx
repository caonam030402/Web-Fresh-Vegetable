import { InputHTMLAttributes, forwardRef, useState } from 'react'

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
}

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(function InputNumberInner(
  { name, errorMessage, value = '', onChange, classNameInput, ...rest },
  ref
) {
  const [localValue, setLocalValue] = useState<string>(value as string)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const regaxNumber = /^[0-9]+$/

    if (regaxNumber.test(value) || value == '') {
      onChange && onChange(event)
      setLocalValue(value)
    }
  }

  return (
    <div className='w-full relative'>
      <input
        value={value}
        className={`text-[13px] px-3 focus:border-primary ease-in-out duration-300 w-full rounded-md outline-none border-neutral-300 placeholder:text-sm border py-2 text-sm ${classNameInput} ${
          errorMessage !== undefined && 'bg-red-100 border-red-600 focus:border-red-900'
        }`}
        type='text'
        onChange={handleChange}
        {...rest}
        ref={ref}
      />
      <h1 className={`text-left text-xs text-red-600 ${errorMessage && 'mt-2'}`}>{errorMessage}</h1>
    </div>
  )
})
