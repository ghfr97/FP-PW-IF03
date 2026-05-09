import { useUIStore } from '../../store/uiStore'

const Reports = () => {
  const showToast = useUIStore((state) => state.showToast)

  const reportStats = [
    { label: 'Pendapatan Bulan Ini', value: 'Rp 84jt', icon: '💰', color: 'sky', change: '▲ 18% dari bulan lalu' },
    { label: 'Total Pesanan Bulan Ini', value: '1.248', icon: '📦', color: 'teal', change: '▲ 9% dari bulan lalu' },
    { label: 'Rating Rata-rata', value: '4.8', icon: '⭐', color: 'orange', change: '▲ 0.2 dari bulan lalu' },
    { label: 'Pelanggan Berulang', value: '78%', icon: '🔄', color: 'rose', change: '▲ 5% dari bulan lalu' },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportStats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-lg">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 bg-${stat.color}/10 text-${stat.color}`}>
              {stat.icon}
            </div>
            <div className="text-2xl font-black text-gray-900">{stat.value}</div>
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-2">{stat.label}</div>
            <div className="text-[11px] font-bold text-teal">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8">
        <div className="flex justify-between items-center mb-10">
          <span className="font-syne font-bold text-gray-800 text-lg flex items-center gap-2">
            <span className="text-xl">📊</span> Pendapatan Harian (7 Hari Terakhir)
          </span>
          <button 
            onClick={() => showToast('📥 Laporan diunduh!')}
            className="text-sky font-bold text-sm bg-sky/5 px-4 py-2 rounded-xl hover:bg-sky/10 transition-colors"
          >
            ⬇ Export
          </button>
        </div>

        <div className="h-64 flex items-end justify-between gap-4 border-b border-gray-50 pb-2">
          {[55, 72, 48, 100, 80, 65, 40].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-4 group cursor-pointer">
              <div className="relative w-full">
                <div 
                  className={`w-full rounded-t-2xl transition-all duration-500 ${h === 100 ? 'bg-teal shadow-xl shadow-teal/20' : 'bg-teal/20 group-hover:bg-teal/40'}`}
                  style={{ height: `${h}%` }}
                ></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Rp {(h * 0.042).toFixed(1)}jt
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                {['27 Mar', '28 Mar', '29 Mar', '30 Mar', '31 Mar', '1 Apr', '2 Apr'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reports
