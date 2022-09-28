import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './src/pages/App'
import Countries from './src/components/Countries'
import NavBar from './src/components/NavBar'
import Country from './src/pages/Country'

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path=':code' element={<Country />} />
        <Route path='/link' element={<p className='text-white'>Enlace</p>} />
        <Route path='404' element={<p>Página no encontrada</p>} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router
