import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Allvids from './pages/Allvids'
import SingleVid from './pages/SingleVid'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SingleVid />}/>
      <Route path='/signin' element={<Auth />}/>
      <Route path='/id' element={<Home />}/>
      <Route path='/videos' element={<Allvids />}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
