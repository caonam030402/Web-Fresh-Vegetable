import React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { pathRoutes } from 'src/configs/path.routes'
import MainLayout from 'src/layouts/MainLayout'
import About from 'src/pages/About/Index'
import Home from 'src/pages/Home/Index'
import Login from 'src/pages/Login'
import Register from 'src/pages/Register'

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
      path: pathRoutes.about,
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      )
    },
    {
      path: pathRoutes.login,
      element: (
        <MainLayout>
          <Login />
        </MainLayout>
      )
    },
    {
      path: pathRoutes.register,
      element: (
        <MainLayout>
          <Register />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
