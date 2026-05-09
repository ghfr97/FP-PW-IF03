import React from 'react'
import { useUIStore } from '../../store/uiStore'

const Services: React.FC = () => {
  const openModal = useUIStore((state) => state.openModal)

  const services = [
    { id: 1, name: 'Cuci Saja', desc: 'Hanya pencucian bersih tanpa setrika', price: 'Rp 6.000 / kg', time: '2 hari', icon: '🫧' },
    { id: 2, name: 'Setrika Saja', desc: 'Hanya penyetrikaan rapi tanpa cuci', price: 'Rp 5.000 / kg', time: '1 hari', icon: '👔' },
    { id: 3, name: 'Cuci + Setrika', desc: 'Layanan lengkap cuci dan setrika rapi', price: 'Rp 10.000 / kg', time: '3 hari', icon: '✨' },
    { id: 4, name: 'Express', desc: 'Cuci + Setrika kilat selesai di hari yang sama', price: 'Rp 20.000 / kg', time: '6 jam', icon: '⚡' },
    { id: 5, name: 'Cuci Karpet', desc: 'Pencucian khusus karpet berbagai ukuran', price: 'Rp 15.000 / m²', time: '5 hari', icon: '🧹' },
    { id: 6, name: 'Cuci Sepatu', desc: 'Deep cleaning untuk berbagai jenis sepatu', price: 'Rp 35.000 / psg', time: '3 hari', icon: '👟' },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1">Layanan Laundry 🧺</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Atur jenis layanan dan daftar harga laundry Anda</p>
        </div>
        <button 
          onClick={() => openModal('tambahLayanan')}
          className="bg-sky text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-sky/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span className="text-xl">+</span> Layanan Baru
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Icon</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Nama Layanan</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Harga</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Estimasi</th>
                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50/30 dark:hover:bg-gray-800/30 transition-colors">
                  <td className="px-8 py-6">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-2xl border border-gray-100 dark:border-gray-700">
                      {service.icon}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="font-bold text-gray-800 dark:text-white text-base">{service.name}</p>
                    <p className="text-xs text-gray-400 font-medium max-w-xs">{service.desc}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className="font-extrabold text-teal">{service.price}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 rounded-lg bg-orange/10 text-orange text-[10px] font-bold uppercase tracking-wider">
                      ⏱️ {service.time}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-sky font-bold text-xs hover:bg-sky/10 px-4 py-2 rounded-xl transition-all">Edit</button>
                      <button className="text-rose font-bold text-xs hover:bg-rose/10 px-4 py-2 rounded-xl transition-all">Hapus</button>
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

export default Services
