import React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { pathRoutes } from 'src/configs/path.routes'
import MainLayout from 'src/layouts/MainLayout'
import About from 'src/pages/About/Index'
import Home from 'src/pages/Home/Index'

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
      path: pathRoutes.about,
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
