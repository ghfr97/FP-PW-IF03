import { useUIStore } from '../../store/uiStore'

const Customers = () => {
  const openModal = useUIStore((state) => state.openModal)

  const customers = [
    { name: 'Budi Santoso', email: 'budi@email.com', phone: '0812-xxxx', orders: 12, total: 'Rp 420rb', initial: 'BS', color: 'sky' },
    { name: 'Siti Rahayu', email: 'siti@email.com', phone: '0813-xxxx', orders: 8, total: 'Rp 280rb', initial: 'SR', color: 'teal' },
    { name: 'Andi Wijaya', email: 'andi@email.com', phone: '0814-xxxx', orders: 20, total: 'Rp 640rb', initial: 'AW', color: 'orange' },
    { name: 'Dewi Lestari', email: 'dewi@email.com', phone: '0815-xxxx', orders: 5, total: 'Rp 175rb', initial: 'DL', color: 'rose' },
    { name: 'Reza Kurniawan', email: 'reza@email.com', phone: '0816-xxxx', orders: 3, total: 'Rp 105rb', initial: 'RK', color: 'gold' },
    { name: 'Maya Fitriani', email: 'maya@email.com', phone: '0817-xxxx', orders: 1, total: 'Rp 20rb', initial: 'MF', color: 'indigo-400' },
  ]

  const getColorClass = (color) => {
    if (color.includes('indigo')) return 'bg-indigo-100 text-indigo-400'
    return `bg-${color}/10 text-${color}`
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="bg-white border border-gray-100 rounded-2xl px-4 py-3 w-full sm:w-80 flex items-center shadow-sm focus-within:ring-2 focus-within:ring-sky/20 transition-all">
          <span className="mr-3">🔍</span>
          <input type="text" placeholder="Cari nama / email pelanggan..." className="bg-transparent border-none outline-none text-sm w-full font-medium" />
        </div>
        <button 
          onClick={() => openModal('tambahPelanggan')}
          className="bg-sky text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl shadow-sky/20 hover:scale-105 transition-all w-full sm:w-auto"
        >
          + Tambah Pelanggan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {customers.map((c) => (
          <div key={c.email} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-2xl font-black mb-4 shadow-inner ${getColorClass(c.color)}`}>
                {c.initial}
              </div>
              <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-sky transition-colors">{c.name}</h3>
              <p className="text-xs font-bold text-gray-400 mt-1">{c.email} · {c.phone}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-50 w-full flex items-center justify-center gap-8">
                <div className="text-center">
                  <p className="text-xl font-black text-gray-900">{c.orders}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pesanan</p>
                </div>
                <div className="w-px h-8 bg-gray-50"></div>
                <div className="text-center">
                  <p className="text-xl font-black text-gray-900">{c.total}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Customers
