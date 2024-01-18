import React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { pathRoutes } from 'src/configs/path.routes'
import MainLayout from 'src/layouts/MainLayout'
import About from 'src/pages/About/Index'
import Home from 'src/pages/Home/Index'
import Page404 from 'src/pages/Page404/Index'
import Shop2 from 'src/pages/shop2/Index'

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
    },
    {
      index: true,
      path: pathRoutes.shop2,
      element: (
        <MainLayout>
          <Shop2 />
        </MainLayout>
      )
    },
    {
      index: true,
      path: pathRoutes.page404,
      element: (
        <MainLayout>
          <Page404 />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
