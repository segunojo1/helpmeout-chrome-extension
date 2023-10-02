import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Vide from '../components/Vide'
import SaveVid from '../components/SaveVid'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

const Home = () => {
    const [show, setShow] = useState(false);
  return (
    <div className=' '>
        <Navbar />
        <Vide setShow={setShow} />
        <SaveVid />
        <Footer />
        <Modal show={show} setShow={setShow}/>
    </div>
  )
}

export default Home