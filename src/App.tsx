import FloatingContact from './components/organisms/FloatingContact'
import routeElements from './routes/routeElements'

function App() {
  const routes = routeElements()
  return (
    <div className=''>
      {routes}
      <div className='fixed bottom-[7%] right-[2%] z-10'>
        <FloatingContact />
      </div>
    </div>
  )
}

export default App
