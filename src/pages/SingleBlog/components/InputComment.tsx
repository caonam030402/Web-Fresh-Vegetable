interface Prop {
  label: string
  inputText: string
  height: string
  name: string
  id: string
}

export default function InputComment({ label, inputText, height, name, id }: Prop) {
  return (
    <div>
      <div className='text-zinc-900 text-sm font-normal mb-2 '>{label}</div>
      <input
        id={id}
        type='text'
        className={`${height} w-full pl-4 ${
          height == 'h-[49px]' ? 'pb-0' : 'pb-10'
        } border-2 rounded-md border-neutral-200`}
        placeholder={inputText}
        name={name}
      />
    </div>
  )
}
