import { useContext, useEffect } from 'react'
import FloatingContact from './components/organisms/FloatingContact'
import routeElements from './routes/routeElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppContext } from './contexts/app.contexts'
import { localStorageEventTarget } from './utils/auth'

function App() {
  const routes = routeElements()
  // const { reset } = useContext(AppContext)
  // console.log(reset)
  // useEffect(() => {
  //   localStorageEventTarget.addEventListener('clearLS', reset)
  //   return () => {
  //     localStorageEventTarget.removeEventListener('clearLS', reset)
  //   }
  // }, [reset])

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
