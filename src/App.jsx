import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Productdetail from './components/Productdetail'
import Signup from './components/Auth/Signup'
import Signin from './components/Auth/Signin'
import Cart from './components/pages/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/productdetail/:id'  element={<Productdetail/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
