import BlogDetail from './components/BlogDetail'
import Comment from './components/Comment'

export default function SingleBlog() {
  return (
    <div className='container'>
      <div className='col-span-2'>
        <BlogDetail />
      </div>
      <div>
        <Comment />
      </div>
    </div>
  )
}
