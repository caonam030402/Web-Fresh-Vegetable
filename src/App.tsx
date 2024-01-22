import { useContext, useEffect, useMemo } from 'react'
import FloatingContact from './components/organisms/FloatingContact'
import routeElements from './routes/routeElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppContext } from './contexts/app.contexts'
import { localStorageEventTarget } from './utils/auth'
import { useQuery } from 'react-query'
import { authService } from './services/auth.service'
import { ScrollToTop } from './hooks/ScrollToTop'

function App() {
  const routes = routeElements()
  useQuery({
    queryKey: ['isAdmin'],
    queryFn: () => {
      return authService.getIsAdmin()
    }
  })
  return (
    <div className=''>
      {routes}
      <div className='fixed bottom-[7%] right-[2%] z-10'>
        <ScrollToTop />
        <FloatingContact />
        <ToastContainer />
      </div>
    </div>
  )
}

export default App
