import React, { useContext, useMemo } from 'react'
import { useQuery } from 'react-query'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Breadcrumb from 'src/components/organisms/Breadcrumb'
import { pathRoutes } from 'src/constants/path.routes'
import { AppContext } from 'src/contexts/app.contexts'
import MainLayout from 'src/layouts/MainLayout'
import RoleLayout from 'src/layouts/RoleLayout'
import About from 'src/pages/About/Index'
import HandleProduct from 'src/pages/Admin/pages/HandleProduct'
import CreateProduct from 'src/pages/Admin/pages/HandleProduct'
import OrderMangagement from 'src/pages/Admin/pages/OrderMangagement'
import ProductManagement from 'src/pages/Admin/pages/ProductManagement'
import Cart from 'src/pages/Cart'
import Home from 'src/pages/Home/Index'
import Login from 'src/pages/Login'
import Payment from 'src/pages/Payment'
import PaymentReturn from 'src/pages/Payment/components/PaymentReturn'
import ProductDetail from 'src/pages/ProductDetail'
import ProductList from 'src/pages/ProductList'
import Register from 'src/pages/Register'
import UserLayout from 'src/pages/User/layouts/UserLayout'
import ChangePassword from 'src/pages/User/pages/ChangePassword'
import HistoryPurchase from 'src/pages/User/pages/HistoryPurchase'
import Profile from 'src/pages/User/pages/Profile'

export default function routeElements() {
  const ProtectedRoute = ({ admin = false }) => {
    const { isAuthenticated, isAdmin } = useContext(AppContext)

    if (admin) {
      return isAuthenticated && isAdmin ? <Outlet /> : <Navigate to={pathRoutes.home} />
    }

    return isAuthenticated ? <Outlet /> : <Navigate to={pathRoutes.login} />
  }

  function RejectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to={pathRoutes.home} />
  }

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
      path: '',
      element: <RejectedRoute />,
      children: [
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
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: pathRoutes.cart,
          element: (
            <MainLayout>
              <Cart />
            </MainLayout>
          )
        },
        {
          path: pathRoutes.payment,
          element: (
            <MainLayout>
              <Payment />
            </MainLayout>
          )
        },
        {
          path: pathRoutes.payment_return,
          element: (
            <MainLayout>
              <PaymentReturn />
            </MainLayout>
          )
        },
        {
          path: pathRoutes.user,
          element: (
            <MainLayout>
              <RoleLayout role='user' />
            </MainLayout>
          ),
          children: [
            {
              path: pathRoutes.changPassword,
              element: <ChangePassword />
            },
            {
              path: pathRoutes.profile,
              element: <Profile />
            },
            {
              path: pathRoutes.historyPurchase,
              element: <HistoryPurchase />
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute admin={true} />,
      children: [
        {
          path: pathRoutes.admin,
          element: (
            <MainLayout>
              <RoleLayout role='admin' />
            </MainLayout>
          ),
          children: [
            {
              path: pathRoutes.product_management,
              element: <ProductManagement />
            },
            {
              path: pathRoutes.order_management,
              element: <OrderMangagement />
            },
            {
              path: pathRoutes.add_product,
              element: <HandleProduct />
            },
            {
              path: pathRoutes.update_product,
              element: <HandleProduct />
            }
          ]
        }
      ]
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
      path: pathRoutes.productDetail,
      element: (
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      )
    },
    {
      path: pathRoutes.productList,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
