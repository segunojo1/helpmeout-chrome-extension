import React from 'react'
import Navbar from '../components/Navbar'
import Vide from '../components/Vide'
import SaveVid from '../components/SaveVid'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=' '>
        <Navbar />
        <Vide/>
        <SaveVid />
        <Footer />
    </div>
  )
}

export default Home