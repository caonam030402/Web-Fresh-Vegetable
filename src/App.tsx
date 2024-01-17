import FloatingContact from './components/organisms/FloatingContact'
import routeElements from './routes/routeElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routes = routeElements()
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
