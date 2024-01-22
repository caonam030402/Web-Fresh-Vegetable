import { useState } from 'react'
import { VscChromeMinimize } from 'react-icons/vsc'
import { VscAdd } from 'react-icons/vsc'
import { InputNumber } from '../atoms/InputNumber'

interface Props {
  value: number
  max: number
  onIncrease?: (value: number) => void
  onDecrease?: (value: number) => void
  onType?: (value: number) => void
  onFocusOut?: (value: number) => void
}

export default function ControllerQuanlity({ value, onIncrease, onDecrease, onType, onFocusOut, max }: Props) {
  const [localValue, setLocalValue] = useState(value || 1)
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let _value = Number(event.target.value)
    if (max !== undefined && _value > max) {
      _value = max
    } else if (_value < 1) {
      _value = 1
    }
    onType && onType(_value)
    setLocalValue(_value)
  }

  const increase = () => {
    let _value = Number(localValue || 1) + 1
    if (max !== undefined && _value > max) {
      _value = max
    }
    onIncrease && onIncrease(_value)
    setLocalValue(_value)
  }

  const decrease = () => {
    let _value = Number(localValue || 1) - 1
    if (_value < 1) {
      _value = 1
    }
    onDecrease && onDecrease(_value)
    setLocalValue(_value)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const _value = Number(event.target.value)
    onFocusOut && onFocusOut(_value)
  }

  return (
    <div className='flex w-[150px] px-1 justify-between gap-3 items-center bg-white border rounded-full'>
      <button
        onClick={decrease}
        className='rounded-full shrink-0 flex text-sm items-center justify-center bg-neutral-100 border w-[30px] h-[30px]'
      >
        <VscChromeMinimize onClick={decrease} />
      </button>
      <InputNumber
        onBlur={handleBlur}
        onChange={handleOnchange}
        value={localValue}
        classNameInput='p-1 border-none text-center w-full focus:border-[0px]'
        classNameError='hidden'
      ></InputNumber>
      <button
        onClick={increase}
        className='rounded-full shrink-0 flex text-sm items-center justify-center bg-neutral-100 border w-[30px] h-[30px]'
      >
        <VscAdd />
      </button>
    </div>
  )
}
