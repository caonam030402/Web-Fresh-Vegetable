import { useContext, useEffect } from 'react'
import FloatingContact from './components/organisms/FloatingContact'
import routeElements from './routes/routeElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppContext } from './contexts/app.contexts'
import { localStorageEventTarget } from './utils/auth'
import { useQuery } from 'react-query'
import { authService } from './services/auth.service'

function App() {
  const routes = routeElements()
  // const { profile } = useContext(AppContext)
  // const { data } = useQuery({
  //   queryKey: ['isAdmin1'],
  //   queryFn: () => {
  //     return authService.getPayment(profile?._id || '')
  //   }
  // })

  // const isAdmin = data?.data.data.isAdmin
  // console.log(isAdmin)

  return (
    <div className=''>
      {routes}
      <div className='fixed bottom-[7%] right-[2%] z-10'>
        <FloatingContact />
        <ToastContainer />
      </div>
    </div>
  )
}

export default App
