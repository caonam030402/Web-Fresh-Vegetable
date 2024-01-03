import React, { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import AppFooter from 'src/components/AppFooter'
import AppHeader from 'src/components/AppHeader'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div>
      <AppHeader />
      {loading && (
        <div className='fixed inset-0 z-30 h-full w-full bg-white/90 transition-all'>
          <BeatLoader
            size={10}
            color='#008641'
            className='absolute left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[50%]'
          />
        </div>
      )}
      {children}
      <AppFooter />
    </div>
  )
}
