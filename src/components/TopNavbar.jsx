import {Bell} from "lucide-react"

function TopNavbar() {
  return (
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 md:px-16 py-4 flex justify-between items-center">
        <h1 className="font-bebas text-3xl tracking-wider text-slate-900 font-medium">
          Debt<span className="text-emerald-950">IQ</span>
        </h1>
        <div className="flex items-center gap-4">
          <Bell size={20} className="text-slate-400" />
          <div className="h-10 w-10 rounded-full bg-emerald-950 flex items-center justify-center text-white font-bold">
            AK
          </div>
        </div>
      </nav>
  )
}

export default TopNavbar
