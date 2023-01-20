import React from 'react'
import Overview from './Overview'
import Nav2 from './Nav2'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Slidebar from './Slidbar'

function Dashboard() {
  return (
    <>
    <div>
    <Slidebar />
    </div>
    <div>
    <Nav2 />
    <Overview />
    </div>
    {/* <Navbar /> */}
    
    
    </>
  )
}

export default Dashboard