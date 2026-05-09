import React, { useState } from 'react'
import { useUIStore } from '../../store/uiStore'

const Orders: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Semua')
  const openModal = useUIStore((state) => state.openModal)

  const tabs = ['Semua', 'Antrian', 'Proses', 'Selesai', 'Batal']

  const orders = [
    { id: '#FW-089', customer: 'Budi Santoso', service: 'Cuci + Setrika', status: 'Proses', weight: '3.5 kg', date: '02 Apr 2026', total: 'Rp 35.000' },
    { id: '#FW-088', customer: 'Siti Rahayu', service: 'Express', status: 'Antrian', weight: '2.0 kg', date: '02 Apr 2026', total: 'Rp 50.000' },
    { id: '#FW-087', customer: 'Andi Wijaya', service: 'Cuci Saja', status: 'Selesai', weight: '5.0 kg', date: '01 Apr 2026', total: 'Rp 20.000' },
    { id: '#FW-086', customer: 'Dewi Lestari', service: 'Setrika Saja', status: 'Selesai', weight: '4.0 kg', date: '01 Apr 2026', total: 'Rp 15.000' },
    { id: '#FW-085', customer: 'Reza Kurniawan', service: 'Cuci + Setrika', status: 'Batal', weight: '3.0 kg', date: '31 Mar 2026', total: 'Rp 35.000' },
  ]

  const filteredOrders = activeTab === 'Semua' 
    ? orders 
    : orders.filter(o => o.status === activeTab)

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'proses': return 'bg-sky/10 text-sky'
      case 'antrian': return 'bg-orange/10 text-orange'
      case 'selesai': return 'bg-teal/10 text-teal'
      case 'batal': return 'bg-rose/10 text-rose'
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-500'
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">Manajemen Pesanan 🧾</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Kelola dan pantau semua status transaksi laundry</p>
        </div>
        <button 
          onClick={() => openModal('tambahPesanan')}
          className="bg-sky text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-sky/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span className="text-xl">+</span> Buat Pesanan
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-1 bg-white dark:bg-gray-900 p-1.5 rounded-2xl border border-gray-100 dark:border-gray-800 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === tab 
                ? 'bg-gray-900 dark:bg-sky text-white shadow-md' 
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">ID Pesanan</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Pelanggan</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Layanan</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Berat</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Total</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/30 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900 dark:text-white text-sm">{order.id}</td>
                    <td className="px-8 py-6">
                      <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">{order.customer}</p>
                      <p className="text-[10px] text-gray-400 font-medium">{order.date}</p>
                    </td>
                    <td className="px-8 py-6 font-semibold text-gray-600 dark:text-gray-400 text-sm">{order.service}</td>
                    <td className="px-8 py-6 font-bold text-gray-500 dark:text-gray-500 text-sm">{order.weight}</td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusClass(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 font-extrabold text-gray-900 dark:text-white text-sm">{order.total}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-sky dark:hover:text-sky hover:bg-sky/10 transition-all border border-transparent hover:border-sky/20">✏️</button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-rose dark:hover:text-rose hover:bg-rose/10 transition-all border border-transparent hover:border-rose/20">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-8 py-20 text-center">
                    <div className="flex flex-col items-center opacity-30">
                      <span className="text-6xl mb-4">📭</span>
                      <p className="font-bold text-gray-500 dark:text-gray-400">Tidak ada pesanan di kategori ini</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Orders
