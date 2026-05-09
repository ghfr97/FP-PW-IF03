import React from 'react'
import { useUIStore } from '../../store/uiStore'

const Customers: React.FC = () => {
  const openModal = useUIStore((state) => state.openModal)

  const customers = [
    { name: 'Budi Santoso', email: 'budi.s@gmail.com', phone: '0812-3456-7890', orders: 12, total: 'Rp 450.000', initial: 'B', color: 'sky' },
    { name: 'Siti Rahayu', email: 'siti_rah@yahoo.com', phone: '0821-9876-5432', orders: 8, total: 'Rp 320.000', initial: 'S', color: 'teal' },
    { name: 'Andi Wijaya', email: 'andi_w@outlook.com', phone: '0857-1122-3344', orders: 25, total: 'Rp 1.200.000', initial: 'A', color: 'orange' },
    { name: 'Dewi Lestari', email: 'dewi.les@gmail.com', phone: '0813-4455-6677', orders: 5, total: 'Rp 150.000', initial: 'D', color: 'rose' },
    { name: 'Reza Kurniawan', email: 'reza.k@gmail.com', phone: '0899-8877-6655', orders: 18, total: 'Rp 680.000', initial: 'R', color: 'sky' },
    { name: 'Maya Fitriani', email: 'maya.fit@gmail.com', phone: '0812-5544-3322', orders: 2, total: 'Rp 80.000', initial: 'M', color: 'teal' },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">Daftar Pelanggan 👥</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Manajemen basis data pelanggan setia FreshWave</p>
        </div>
        <button 
          onClick={() => openModal('tambahPelanggan')}
          className="bg-sky text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-sky/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span className="text-xl">+</span> Pelanggan Baru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <div key={customer.name} className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform ${
              customer.color === 'sky' ? 'bg-sky' : 
              customer.color === 'teal' ? 'bg-teal' : 
              customer.color === 'orange' ? 'bg-orange' : 'bg-rose'
            }`}></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-lg ${
                customer.color === 'sky' ? 'bg-sky shadow-sky/20' : 
                customer.color === 'teal' ? 'bg-teal shadow-teal/20' : 
                customer.color === 'orange' ? 'bg-orange shadow-orange/20' : 'bg-rose shadow-rose/20'
              }`}>
                {customer.initial}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-syne font-bold text-gray-800 dark:text-white text-lg truncate">{customer.name}</h3>
                <p className="text-xs text-gray-400 font-medium truncate">{customer.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-2xl border border-gray-100/50 dark:border-gray-700/50">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Pesanan</p>
                <p className="font-extrabold text-gray-800 dark:text-gray-200">{customer.orders} Transaksi</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-2xl border border-gray-100/50 dark:border-gray-700/50">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Belanja</p>
                <p className="font-extrabold text-teal">{customer.total}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
              <span className="text-xs font-bold text-gray-400">📞 {customer.phone}</span>
              <button className="text-sky font-bold text-xs hover:bg-sky/10 px-3 py-1.5 rounded-lg transition-colors">Detail Profil →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Customers
