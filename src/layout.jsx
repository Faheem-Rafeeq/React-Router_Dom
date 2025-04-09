import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Navbar from './components/navbar'

const Layout = () => {
  return (
<>
<Navbar />
<Outlet  />
</>
  )
}

export default Layout
