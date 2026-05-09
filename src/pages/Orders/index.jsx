import { useState } from 'react'
import { useUIStore } from '../../store/uiStore'

const Orders = () => {
  const showToast = useUIStore((state) => state.showToast)
  const openModal = useUIStore((state) => state.openModal)
  const [filter, setFilter] = useState('semua')

  const orders = [
    { id: '#FW-089', customer: 'Budi Santoso', service: 'Cuci + Setrika', weight: '3 kg', total: 'Rp 35.000', date: '02 Apr 2026', status: 'proses' },
    { id: '#FW-088', customer: 'Siti Rahayu', service: 'Express', weight: '2 kg', total: 'Rp 50.000', date: '02 Apr 2026', status: 'antrian' },
    { id: '#FW-087', customer: 'Andi Wijaya', service: 'Cuci Saja', weight: '4 kg', total: 'Rp 20.000', date: '01 Apr 2026', status: 'selesai' },
    { id: '#FW-086', customer: 'Dewi Lestari', service: 'Setrika Saja', weight: '2 kg', total: 'Rp 15.000', date: '01 Apr 2026', status: 'diambil' },
    { id: '#FW-085', customer: 'Reza Kurniawan', service: 'Cuci + Setrika', weight: '5 kg', total: 'Rp 35.000', date: '31 Mar 2026', status: 'batal' },
    { id: '#FW-084', customer: 'Hendra Gunawan', service: 'Express', weight: '1 kg', total: 'Rp 50.000', date: '31 Mar 2026', status: 'selesai' },
    { id: '#FW-083', customer: 'Maya Fitriani', service: 'Cuci Saja', weight: '3 kg', total: 'Rp 20.000', date: '30 Mar 2026', status: 'selesai' },
  ]

  const filteredOrders = filter === 'semua' ? orders : orders.filter(o => o.status === filter)

  const getStatusClass = (status) => {
    switch (status) {
      case 'proses': return 'bg-sky/10 text-sky'
      case 'antrian': return 'bg-orange/10 text-orange'
      case 'selesai': return 'bg-teal/10 text-teal'
      case 'diambil': return 'bg-blue/10 text-blue'
      case 'batal': return 'bg-rose/10 text-rose'
      default: return 'bg-gray-100 text-gray-500'
    }
  }

  const filters = [
    { id: 'semua', label: 'Semua', count: 128 },
    { id: 'antrian', label: 'Antrian', count: 5 },
    { id: 'proses', label: 'Proses', count: 14 },
    { id: 'selesai', label: 'Selesai', count: 102 },
    { id: 'batal', label: 'Batal', count: 7 },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === f.id 
                  ? 'bg-sky text-white shadow-lg shadow-sky/30' 
                  : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50'
              }`}
            >
              {f.label} ({f.count})
            </button>
          ))}
        </div>
        <button 
          onClick={() => openModal('tambahPesanan')}
          className="bg-sky text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl shadow-sky/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <span>+</span> Tambah Pesanan
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">ID Pesanan</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Pelanggan</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Layanan</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Total</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Status</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6 font-bold text-gray-900 text-sm">{order.id}</td>
                  <td className="px-8 py-6">
                    <p className="font-bold text-gray-800 text-sm">{order.customer}</p>
                    <p className="text-[10px] text-gray-400 font-medium">Masuk: {order.date}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="font-bold text-gray-700 text-sm">{order.service}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">{order.weight}</p>
                  </td>
                  <td className="px-8 py-6 font-extrabold text-gray-900 text-sm">{order.total}</td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${getStatusClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => showToast(`✏️ Edit pesanan ${order.id}`)}
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-sky/10 hover:text-sky transition-colors"
                      >
                        ✏️
                      </button>
                      <button 
                        onClick={() => showToast('🗑️ Pesanan dihapus!', 'error')}
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-rose/10 hover:text-rose transition-colors"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Orders
