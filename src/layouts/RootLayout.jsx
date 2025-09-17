import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/ui/Navigation'
import Footer from '../components/ui/Footer'

const RootLayout = () => {
  return (
    <div className=''>
        <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
