import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Allvids from './pages/Allvids'
import SingleVid from './pages/SingleVid'
import SelectVid from './pages/SelectVid'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/id' element={<SingleVid />}/>
      <Route path='/signin' element={<Auth />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Allvids />}/>
      <Route path='/videodetails' element={<SelectVid />}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
