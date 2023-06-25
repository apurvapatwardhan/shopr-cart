import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Suspense, lazy } from 'react'

const Cart = lazy(() => import("./pages/Cart"));
const App = () => {
  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Suspense fallback={<div>Loading Suspense</div>}><Cart /></Suspense>}></Route>
      </Routes>
    </div>
  )
}

export default App
