import { Routes, Route } from 'react-router-dom'
import { DefaultLayouts } from './Layouts/DefaultLayouts'
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/ShoppingCart'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  )
}
