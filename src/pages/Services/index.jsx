import { useUIStore } from '../../store/uiStore'

const Services = () => {
  const showToast = useUIStore((state) => state.showToast)
  const openModal = useUIStore((state) => state.openModal)

  const services = [
    { id: '#LY-09', name: 'Cuci Saja', desc: 'Cuci bersih tanpa setrika', price: 'Rp 5.000', est: '2-3 hari', status: 'aktif' },
    { id: '#LY-08', name: 'Cuci + Setrika', desc: 'Paket lengkap cuci bersih & setrika rapi', price: 'Rp 7.000', est: '2-3 hari', status: 'aktif' },
    { id: '#LY-07', name: 'Express', desc: 'Selesai dalam 4-6 jam (cuci + setrika)', price: 'Rp 12.000', est: '4-6 Jam', status: 'aktif' },
    { id: '#LY-05', name: 'Cuci Sepatu', desc: 'Cuci sepatu & sneakers bersih', price: 'Rp 25.000/Pasang', est: '2-3 hari', status: 'nonaktif' },
  ]

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Katalog Layanan</h2>
        <button 
          onClick={() => openModal('tambahLayanan')}
          className="bg-sky text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl shadow-sky/20 hover:scale-105 active:scale-95 transition-all"
        >
          + Tambah Layanan
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Layanan</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Harga / kg</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Est. Waktu</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Status</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {services.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <p className="font-bold text-gray-900 text-sm">{s.name}</p>
                    <p className="text-[10px] text-gray-400 font-medium">{s.desc}</p>
                  </td>
                  <td className="px-8 py-6 font-extrabold text-gray-900 text-sm">{s.price}</td>
                  <td className="px-8 py-6 font-bold text-gray-500 text-sm">{s.est}</td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      s.status === 'aktif' ? 'bg-teal/10 text-teal' : 'bg-orange/10 text-orange'
                    }`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => showToast(`✏️ Edit layanan ${s.name}`)}
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-sky/10 hover:text-sky transition-colors"
                      >
                        ✏️
                      </button>
                      <button 
                        onClick={() => showToast('🗑️ Layanan dihapus!', 'error')}
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

export default Services
