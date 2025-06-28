import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function HomeLayout() {
  return (
    <div className='xl:max-w-screen-xl mx-auto h-screen'>
        
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout