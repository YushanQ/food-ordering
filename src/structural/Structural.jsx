import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { Cart } from '../pages/Cart/Cart'
import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/Login'
import { PaymentSuccess } from '../pages/PaymentSuccess/PaymentSuccess'
import { Register } from '../pages/Register/Register'
import { Menu } from '../pages/Menu/Menu'
import { About } from '../components/About'
import { useSelector } from 'react-redux'
import { cartProducts } from '../stores/cart/cartSlice'


export const Structural = () => {
  const productInCart = useSelector(cartProducts);

  return (
    <BrowserRouter>
        <Header cartCount={productInCart ? productInCart.length:0}/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/payment-success" element={<PaymentSuccess/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
