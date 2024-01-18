import { useMatches } from 'react-router-dom'
import { pathImage } from 'src/constants/path.image'

export default function Breadcrumb() {
  // let matches = useMatches()
  // // let crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => match.handle.crumb(match.data))
  return (
    <div className='w-full h-24'>
      <img className='w-full h-full object-cover' src={pathImage.breadcrumb} alt='' />
    </div>
  )
}
