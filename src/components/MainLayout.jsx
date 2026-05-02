import React from 'react'
import Navbar from './Navbar'
import {Outlet} from "react-router-dom"

function MainLayout({isSidebarOpen, setIsSidebarOpen}) {
  return (
    <div>
        <Navbar 
            isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen} 
        />
        <div className={`${isSidebarOpen? "ml-20": "ml-60"} transition-all`}>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout