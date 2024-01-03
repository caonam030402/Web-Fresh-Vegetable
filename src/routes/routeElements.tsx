import React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from 'src/layouts/MainLayout'
import Home from 'src/pages/Home/Home'
import SingleBlog from 'src/pages/SingleBlog'

export default function routeElements() {
  const routeElements = useRoutes([
    {
      index: true,
      path: '',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      index: true,
      path: '/SingleBlog',
      element: (
        <MainLayout>
          <SingleBlog />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
