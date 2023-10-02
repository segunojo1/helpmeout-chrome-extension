import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Allvids from './pages/Allvids'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signin' element={<Auth />}/>
      <Route path='/vids' element={<Allvids />}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
