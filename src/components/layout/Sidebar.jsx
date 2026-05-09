import { NavLink } from 'react-router-dom'
import { useUIStore } from '../../store/uiStore'

const Sidebar = () => {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen)

  const navItems = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Pesanan', path: '/orders', icon: '📦', badge: 5 },
    { name: 'Pelanggan', path: '/customers', icon: '👥' },
    { name: 'Layanan', path: '/services', icon: '🧺' },
    { name: 'Laporan', path: '/reports', icon: '📈' },
  ]

  const systemItems = [
    { name: 'Pengaturan', path: '/settings', icon: '⚙️' },
    { name: 'Keluar', path: '/login', icon: '🚪' },
  ]

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transition-transform duration-300 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:relative lg:translate-x-0 flex flex-col`}
    >
      {/* Brand */}
      <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
        <div className="text-3xl">🌊</div>
        <div>
          <h2 className="font-syne font-bold text-xl text-gray-800">FreshWave</h2>
          <span className="text-xs font-medium text-sky tracking-wider uppercase">Admin Panel</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4 space-y-8">
        <div>
          <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-4">Menu Utama</p>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-sky text-white shadow-lg shadow-sky/30'
                      : 'text-gray-500 hover:bg-sky/5 hover:text-sky'
                  }`
                }
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-semibold">{item.name}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isSidebarOpen ? 'bg-white/20 text-white' : 'bg-rose text-white'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-4">Sistem</p>
          <nav className="space-y-1">
            {systemItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-sky text-white shadow-lg shadow-sky/30'
                      : 'text-gray-500 hover:bg-sky/5 hover:text-sky'
                  }`
                }
              >
                <span className="text-lg mr-3">{item.icon}</span>
                <span className="font-semibold">{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer Profile */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center p-3 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-sky flex items-center justify-center text-white font-bold text-lg shadow-md shadow-sky/20">
            A
          </div>
          <div className="ml-3 flex-1 overflow-hidden">
            <p className="font-bold text-gray-800 truncate">Admin Utama</p>
            <p className="text-[10px] text-gray-500 truncate">admin@freshwave.id</p>
          </div>
          <span className="text-gray-400">›</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
