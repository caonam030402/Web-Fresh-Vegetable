import AppFloatingContact from './components/AppFloatingContact'
import routeElements from './routes/routeElements'

function App() {
  const routes = routeElements()
  return (
    <div className=''>
      {routes}
      <div className='fixed bottom-[7%] right-[2%] z-10'>
        <AppFloatingContact />
      </div>
    </div>
  )
}

export default App
