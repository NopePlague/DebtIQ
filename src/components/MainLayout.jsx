import React from 'react'
import Navbar from './Navbar'
import {Outlet} from "react-router-dom"
import TopNavbar from './TopNavbar'

function MainLayout({isSidebarOpen, setIsSidebarOpen}) {
  return (
    <div>
        <Navbar 
            isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen} 
        />
        <div className={`${isSidebarOpen? "ml-20": "ml-60"} transition-all`}>
            <TopNavbar/>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout