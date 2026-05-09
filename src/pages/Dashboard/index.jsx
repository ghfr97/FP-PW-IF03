import { useUIStore } from '../../store/uiStore'

const Dashboard = () => {
  const showToast = useUIStore((state) => state.showToast)

  const stats = [
    { label: 'Total Pesanan', value: '128', icon: '📦', color: 'blue', change: '▲ 12% dari kemarin', up: true },
    { label: 'Pendapatan Hari Ini', value: 'Rp 4,2jt', icon: '💰', color: 'teal', change: '▲ 8% dari kemarin', up: true },
    { label: 'Pelanggan Aktif', value: '54', icon: '👥', color: 'orange', change: '▲ 3 pelanggan baru', up: true },
    { label: 'Express Antrian', value: '5', icon: '⚡', color: 'rose', change: '▼ 2 belum diproses', up: false },
  ]

  const recentOrders = [
    { id: '#FW-089', customer: 'Budi Santoso', service: 'Cuci + Setrika', status: 'proses', total: 'Rp 35.000' },
    { id: '#FW-088', customer: 'Siti Rahayu', service: 'Express', status: 'antrian', total: 'Rp 50.000' },
    { id: '#FW-087', customer: 'Andi Wijaya', service: 'Cuci Saja', status: 'selesai', total: 'Rp 20.000' },
    { id: '#FW-086', customer: 'Dewi Lestari', service: 'Setrika Saja', status: 'diambil', total: 'Rp 15.000' },
    { id: '#FW-085', customer: 'Reza Kurniawan', service: 'Cuci + Setrika', status: 'batal', total: 'Rp 35.000' },
  ]

  const activities = [
    { type: '📦', body: 'Pesanan baru #FW-089 diterima dari Budi Santoso – Cuci + Setrika (3 kg)', time: '2 menit yang lalu', color: 'sky' },
    { type: '✅', body: 'Pesanan #FW-084 telah selesai dan siap diambil oleh Hendra Gunawan', time: '15 menit yang lalu', color: 'teal' },
    { type: '👤', body: 'Pelanggan baru Maya Fitriani mendaftar dan melakukan pesanan pertama', time: '1 jam yang lalu', color: 'orange' },
    { type: '⚡', body: 'Pesanan express #FW-081 dari Rina Susanti telah selesai dalam 2 jam', time: '3 jam yang lalu', color: 'rose' },
  ]

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

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Selamat Datang, Admin! 👋</h1>
        <p className="text-gray-500 font-medium">Rabu, 2 April 2026 · Berikut ringkasan operasional hari ini</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 ${
              stat.color === 'blue' ? 'bg-sky/10' : 
              stat.color === 'teal' ? 'bg-teal/10' : 
              stat.color === 'orange' ? 'bg-orange/10' : 'bg-rose/10'
            }`}>
              {stat.icon}
            </div>
            <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{stat.label}</div>
            <div className={`text-[11px] font-bold ${stat.up ? 'text-teal' : 'text-rose'}`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <span className="font-syne font-bold text-gray-800 flex items-center gap-2">
              <span className="text-xl">🧾</span> Pesanan Terbaru
            </span>
            <button className="text-sky font-bold text-xs hover:underline">Lihat Semua →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">ID</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pelanggan</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900 text-sm">{order.id}</td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-800 text-sm">{order.customer}</p>
                      <p className="text-[10px] text-gray-400 font-medium">{order.service}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusClass(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-extrabold text-gray-900 text-sm">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Distribution & Chart */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex flex-col h-full">
          <div className="mb-6">
            <span className="font-syne font-bold text-gray-800 flex items-center gap-2 text-lg mb-6">
              <span className="text-xl">🥧</span> Distribusi Layanan
            </span>
            
            {/* Legend as placeholder for donut */}
            <div className="space-y-3">
              {[
                { label: 'Cuci + Setrika', p: '42%', color: 'bg-sky' },
                { label: 'Cuci Saja', p: '26%', color: 'bg-teal' },
                { label: 'Express', p: '15%', color: 'bg-orange' },
                { label: 'Setrika Saja', p: '17%', color: 'bg-rose' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100/50">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                    <span className="text-sm font-bold text-gray-600">{item.label}</span>
                  </div>
                  <span className="text-sm font-extrabold text-gray-900">{item.p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <span className="font-syne font-bold text-gray-400 text-[10px] uppercase tracking-widest block mb-4">📅 Pesanan Minggu Ini</span>
            <div className="flex items-end justify-between h-24 gap-2">
              {[18, 24, 15, 32, 28, 22, 12].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className={`w-full rounded-t-lg transition-all ${v === 32 ? 'bg-sky shadow-lg shadow-sky/20' : 'bg-sky/20'}`}
                    style={{ height: `${(v / 32) * 100}%` }}
                  ></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">{['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
        <span className="font-syne font-bold text-gray-800 flex items-center gap-2 text-lg mb-6">
          <span className="text-xl">🕐</span> Aktivitas Terbaru
        </span>
        <div className="space-y-6 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-gray-100">
          {activities.map((act, i) => (
            <div key={i} className="relative flex items-start pl-12 group">
              <div className={`absolute left-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm z-10 transition-transform group-hover:scale-110 ${
                act.color === 'sky' ? 'bg-sky/10 text-sky' :
                act.color === 'teal' ? 'bg-teal/10 text-teal' :
                act.color === 'orange' ? 'bg-orange/10 text-orange' : 'bg-rose/10 text-rose'
              }`}>
                {act.type}
              </div>
              <div className="flex-1 pt-1">
                <p className="text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: act.body.replace(/<strong>(.*?)<\/strong>/g, '<span class="font-bold text-gray-900">$1</span>') }}></p>
                <p className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">{act.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
