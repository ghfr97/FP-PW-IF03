import { useUIStore } from '../../store/uiStore'

const Settings = () => {
  const showToast = useUIStore((state) => state.showToast)

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Info Toko */}
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🏪</span>
            <h3 className="font-syne font-bold text-gray-800 text-lg">Informasi Toko</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">Nama Toko</label>
              <input type="text" defaultValue="FreshWave Laundry" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 focus:bg-white focus:ring-2 focus:ring-sky/20 transition-all outline-none" />
            </div>
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">Alamat</label>
              <input type="text" defaultValue="Jl. Bersih No. 12, Depok, Yogyakarta" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 focus:bg-white focus:ring-2 focus:ring-sky/20 transition-all outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">Nomor HP</label>
                <input type="text" defaultValue="0812-3456-7890" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 focus:bg-white focus:ring-2 focus:ring-sky/20 transition-all outline-none" />
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">Email</label>
                <input type="email" defaultValue="info@freshwave.id" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 focus:bg-white focus:ring-2 focus:ring-sky/20 transition-all outline-none" />
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => showToast('✅ Info toko berhasil disimpan!')}
            className="w-full bg-sky text-white py-4 rounded-2xl font-bold shadow-lg shadow-sky/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Simpan Perubahan
          </button>
        </div>

        {/* Notifikasi & Fitur */}
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔔</span>
            <h3 className="font-syne font-bold text-gray-800 text-lg">Notifikasi & Fitur</h3>
          </div>
          
          <div className="divide-y divide-gray-50">
            {[
              { label: 'Notifikasi Email', desc: 'Kirim email saat ada pesanan baru', active: true },
              { label: 'Notifikasi WhatsApp', desc: 'Pesan WA otomatis ke pelanggan', active: true },
              { label: 'Mode Express Otomatis', desc: 'Prioritaskan pesanan express', active: false },
              { label: 'Laporan Harian Otomatis', desc: 'Kirim ringkasan tiap pukul 22.00', active: true },
              { label: 'Mode Maintenance', desc: 'Tutup pemesanan sementara', active: false },
            ].map(item => (
              <div key={item.label} className="py-4 flex items-center justify-between group">
                <div>
                  <p className="font-bold text-gray-800 group-hover:text-sky transition-colors">{item.label}</p>
                  <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                </div>
                <div className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${item.active ? 'bg-teal' : 'bg-gray-200'}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.active ? 'right-1' : 'left-1'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jam Operasional */}
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🕐</span>
            <h3 className="font-syne font-bold text-gray-800 text-lg">Jam Operasional</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">Jam Buka</label>
              <input type="time" defaultValue="07:00" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 focus:bg-white focus:ring-2 focus:ring-sky/20 transition-all outline-none" />
            </div>
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2 px-1">Jam Tutup</label>
              <input type="time" defaultValue="21:00" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 focus:bg-white focus:ring-2 focus:ring-sky/20 transition-all outline-none" />
            </div>
          </div>
          <button 
            onClick={() => showToast('✅ Jam operasional disimpan!')}
            className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold shadow-xl hover:bg-black transition-all"
          >
            Update Jadwal
          </button>
        </div>

        {/* Keamanan */}
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🔐</span>
            <h3 className="font-syne font-bold text-gray-800 text-lg">Keamanan Admin</h3>
          </div>
          <div className="space-y-4">
            <input type="password" placeholder="Password Lama" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 focus:bg-white focus:ring-2 focus:ring-sky/20 transition-all outline-none" />
            <input type="password" placeholder="Password Baru" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 focus:bg-white focus:ring-2 focus:ring-sky/20 transition-all outline-none" />
          </div>
          <button 
            onClick={() => showToast('🔐 Password berhasil diperbarui!')}
            className="w-full bg-rose text-white py-4 rounded-2xl font-bold shadow-lg shadow-rose/20 hover:bg-rose-600 transition-all"
          >
            Ubah Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings
