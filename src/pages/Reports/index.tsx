import React from 'react'

const Reports: React.FC = () => {
  const stats = [
    { label: 'Total Pendapatan', value: 'Rp 45.200.000', icon: '💰', color: 'teal', trend: '+15.4%' },
    { label: 'Total Pesanan', value: '1,284', icon: '🧾', color: 'sky', trend: '+8.2%' },
    { label: 'Pelanggan Baru', value: '42', icon: '👤', color: 'orange', trend: '+12.1%' },
    { label: 'Rating Layanan', value: '4.8/5', icon: '⭐', color: 'rose', trend: '+0.2%' },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">Laporan & Statistik 📈</h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">Pantau performa bisnis FreshWave dalam angka</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 ${
              stat.color === 'sky' ? 'bg-sky/10' : 
              stat.color === 'teal' ? 'bg-teal/10' : 
              stat.color === 'orange' ? 'bg-orange/10' : 'bg-rose/10'
            }`}>
              {stat.icon}
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">{stat.value}</h3>
              <span className="text-[11px] font-bold text-teal">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Monthly Chart Placeholder */}
      <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-syne font-bold text-gray-800 dark:text-white text-lg">Grafik Pendapatan</h3>
            <p className="text-xs text-gray-400 font-medium">Akumulasi pendapatan 30 hari terakhir</p>
          </div>
          <select className="bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-2 text-xs font-bold text-gray-500 outline-none">
            <option>Maret 2026</option>
            <option>Februari 2026</option>
          </select>
        </div>
        
        <div className="h-64 flex items-end gap-3 px-4">
          {[40, 60, 35, 75, 50, 90, 65, 45, 80, 55, 70, 85].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
              <div 
                className="w-full bg-sky/10 dark:bg-sky/5 rounded-t-xl group-hover:bg-sky transition-all relative"
                style={{ height: `${h}%` }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Rp {h}.000
                </div>
              </div>
              <span className="text-[9px] font-bold text-gray-300 uppercase tracking-tighter">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reports
