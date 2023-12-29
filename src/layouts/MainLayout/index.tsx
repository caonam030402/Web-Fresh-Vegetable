import React from 'react'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return <div>{children}</div>
}
