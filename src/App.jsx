import React, {useState} from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Strategy from './pages/Strategy'
import LoanManager from './pages/LoanManager'
import Calender from './pages/Calender'
import Navbar from './components/Navbar'
import MainLayout from './components/MainLayout'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<MainLayout 
              isSidebarOpen={isSidebarOpen} 
              setIsSidebarOpen={setIsSidebarOpen}/>
          }>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/loan-manager" element={<LoanManager />} />
          <Route path="/calendar" element={<Calender />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App