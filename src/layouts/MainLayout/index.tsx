import React from 'react'
import AppHeader from 'src/components/AppHeader'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  )
}
