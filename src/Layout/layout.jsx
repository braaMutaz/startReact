import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../navbar/navbar'

export default function Layout() {
  return (
    <div>
<Navbar/>

 <Outlet></Outlet>
<Footer/>


        
    </div>
  )
}
