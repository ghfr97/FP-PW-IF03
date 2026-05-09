import React from 'react'
import { useUIStore } from '../../store/uiStore'

interface TopbarProps {
  title: string
  subtitle: string
}

const Topbar: React.FC<TopbarProps> = ({ title, subtitle }) => {
  const { toggleSidebar, theme, toggleTheme, showToast } = useUIStore()

  return (
    <header className="h-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 flex items-center px-6 lg:px-10 sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-gray-900/80">
      <button 
        onClick={toggleSidebar}
        className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xl text-gray-900 dark:text-white"
      >
        ☰
      </button>

      <div className="ml-4 lg:ml-0 flex-1">
        <h1 className="font-syne font-extrabold text-xl lg:text-2xl text-gray-900 dark:text-white flex items-center gap-2">
          {title} <span className="text-sky/40 font-bold text-base lg:text-lg hidden sm:inline">{subtitle}</span>
        </h1>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-2 w-64 focus-within:border-sky/30 focus-within:bg-white dark:focus-within:bg-gray-900 transition-all">
          <span className="mr-2">🔍</span>
          <input 
            type="text" 
            placeholder="Cari pesanan, pelanggan..." 
            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-400 dark:text-white font-medium"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button 
            onClick={() => showToast('📬 Kamu punya 3 notifikasi baru!')}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xl relative group text-gray-900 dark:text-white"
            title="Notifikasi"
          >
            🔔
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose rounded-full border-2 border-white dark:border-gray-900"></span>
          </button>
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xl text-gray-900 dark:text-white"
            title={theme === 'light' ? 'Mode Gelap' : 'Mode Terang'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Topbar
