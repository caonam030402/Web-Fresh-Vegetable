import React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Home from 'src/pages/Home/Home'

export default function routeElements() {
  const routes = useRoutes([
    {
      index: true,
      path: '',
      element: <Home />
    }
  ])
  return routes
}
