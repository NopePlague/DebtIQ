import { Link, useLocation, useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'

const Navbar = ({isSidebarOpen, setIsSidebarOpen}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const user = authAPI.getCurrentUser()

  const handleLogout = () => {
    authAPI.logout()
    navigate('/signin')
  }

  const navItems = [
    { path: "/", name: "Home", icon: "https://www.svgrepo.com/show/453459/bank.svg" },
    { path: "/dashboard", name: "Dashboard", icon: "https://www.svgrepo.com/show/445689/dashboard-tile.svg" },
    { path: "/loan-manager", name: "Loan Manager", icon: "https://www.svgrepo.com/show/521920/wallet.svg" },
    { path: "/calendar", name: "Calender", icon: "https://www.svgrepo.com/show/395397/calender.svg" },
    { path: "/strategy", name: "Strategy", icon: "https://www.svgrepo.com/show/22305/graphics-scale.svg" }
  ]

  return (
    <div className={`bg-slate-200/50 text-white h-screen p-4 border-r border-gray-300 fixed top-0 left-0 z-10 ${isSidebarOpen ? "w-20" : "w-60"} transition-all duration-300 flex flex-col justify-between`}>
      <ul className="flex flex-col gap-8">
        <li className="hover:cursor-pointer">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex flex-col justify-between w-8 h-6 cursor-pointer ml-2"
          >
            <span className={`h-1 bg-black rounded transition-all duration-300 ${!isSidebarOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
            <span className={`h-1 bg-black rounded transition-all duration-300 ${!isSidebarOpen ? "opacity-0" : ""}`}></span>
            <span className={`h-1 bg-black rounded transition-all duration-300 ${!isSidebarOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
          </button>
        </li>

        {navItems.map((item) => (
          <li key={item.path} className="relative group">
            <Link to={item.path}>
              <div className={`${location.pathname === item.path ? "bg-emerald-900/50" : ""} w-fit rounded-md flex items-center transition-all duration-300`}>
                
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="h-12 p-1 rounded-md"
                />

                <span className={`px-2 py-1 whitespace-nowrap transition-all duration-200 ${
                  isSidebarOpen
                    ? "absolute left-14 top-1/2 -translate-y-1/2 bg-gray-900/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none"
                    : "text-black font-bold text-xl opacity-100"
                }`}>
                  {item.name}
                </span>

              </div>
            </Link>
          </li>
        ))}
      </ul>

      {user && (
        <div className="flex flex-col gap-4 border-t border-gray-300 pt-6 mb-4">
          <div className="flex items-center gap-3 px-1 overflow-hidden">
             <div className="w-10 h-10 bg-emerald-950 rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-sm">
                {user.username ? user.username[0].toUpperCase() : 'U'}
             </div>
             {!isSidebarOpen && (
               <div className="flex flex-col overflow-hidden">
                 <span className="text-black font-bold text-sm truncate">{user.username}</span>
                 <span className="text-gray-500 text-[10px] truncate">{user.email}</span>
               </div>
             )}
          </div>
          <button 
            onClick={handleLogout}
            className={`flex items-center gap-3 p-2 rounded-xl text-red-600 hover:bg-red-50 transition-all font-bold ${isSidebarOpen ? 'justify-center' : ''}`}
            title="Logout"
          >
            <img src="https://www.svgrepo.com/show/491212/logout.svg" className="h-6" alt="Logout" />
            {!isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
