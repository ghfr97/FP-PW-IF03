import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Toast from '../ui/Toast'
import ModalManager from './ModalManager'

const MainLayout: React.FC = () => {
  const location = useLocation()
  
  // Mapping paths to titles
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/': return { title: 'Dashboard', subtitle: 'Overview' }
      case '/orders': return { title: 'Pesanan', subtitle: 'Manajemen' }
      case '/customers': return { title: 'Pelanggan', subtitle: 'Data Aktif' }
      case '/services': return { title: 'Layanan', subtitle: 'Katalog' }
      case '/reports': return { title: 'Laporan', subtitle: 'Statistik' }
      case '/settings': return { title: 'Pengaturan', subtitle: 'Sistem' }
      default: return { title: 'Admin', subtitle: 'Panel' }
    }
  }

  const { title, subtitle } = getPageTitle(location.pathname)

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 overflow-x-hidden transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar title={title} subtitle={subtitle} />
        <main className="flex-1 p-6 lg:p-10 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
      <Toast />
      <ModalManager />
    </div>
  )
}

export default MainLayout
