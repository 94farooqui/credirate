import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/LandingPageComponents/Footer'

const RootLayout = () => {
  return (
    <div className='bg-gradient-to-br from-red-950 via-rose-950 to-slate-950'>

      <Header />
      <Outlet />
      <Footer/>

    </div>
  )
}

export default RootLayout