import React from 'react'
import Home from './Page/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='w-full'>
      <Navbar />
      <Home/>
      <Footer />
    </div>
  )
}
