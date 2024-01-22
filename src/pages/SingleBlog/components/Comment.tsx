import Button from 'src/components/atoms/Button'
import InputComment from './InputComment'
import CommentItem from './CommentItem'

export default function Comment() {
  return (
    <div className=' mb-10'>
      <div className='text-zinc-900 text-2xl font-medium'>Leave a Comment</div>
      <div className='grid grid-cols-2 gap-5 mt-4'>
        <div>
          <InputComment
            id='full-name'
            label={'Full Name'}
            inputText='Zakir Hossen'
            height='h-[49px]'
            name='full-name'
          />
        </div>
        <div>
          <InputComment id='email' label={'Email'} inputText={'Zakir Hossen'} height='h-[49px]' name='email' />
        </div>
        <div className='col-span-2'>
          <div className='my-1 text-zinc-900 text-sm font-normal mb-2 '>Message</div>
          <textarea
            className='border-2 w-full rounded-md border-neutral-200 h-[98px] p-4 outline-none'
            placeholder='Zakir Hossen'
          ></textarea>
        </div>
      </div>
      <div className='flex my-4'>
        <input type='checkbox' className='w-5 h-5 cursor-pointer' />
        <div className='text-stone-500 text-sm font-normal ml-[10px]'>
          Save my name and email in this browser for the next time I comment.
        </div>
      </div>
      <Button>{'Post Comments'}</Button>
      <div className='text-zinc-900 text-2xl font-medium mt-7'>Comments</div>
      <CommentItem />
    </div>
  )
}
