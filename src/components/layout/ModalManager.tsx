import React from 'react'
import { useUIStore } from '../../store/uiStore'
import Modal from '../ui/Modal'

const ModalManager: React.FC = () => {
  const { modals, closeModal, showToast } = useUIStore()

  const handleSave = (modalName: keyof typeof modals, message: string) => {
    closeModal(modalName)
    showToast(message)
  }

  return (
    <>
      {/* Modal Tambah Pesanan */}
      <Modal
        isOpen={modals.tambahPesanan}
        onClose={() => closeModal('tambahPesanan')}
        title="📦 Tambah Pesanan Baru"
        footer={
          <>
            <button 
              onClick={() => closeModal('tambahPesanan')}
              className="flex-1 py-4 rounded-2xl font-bold text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              Batal
            </button>
            <button 
              onClick={() => handleSave('tambahPesanan', '✅ Pesanan berhasil disimpan!')}
              className="flex-[2] py-4 rounded-2xl font-bold bg-sky text-white shadow-lg shadow-sky/20 hover:scale-[1.02] transition-all"
            >
              Simpan Pesanan
            </button>
          </>
        }
      >
        <form className="space-y-6">
          <div>
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Nama Pelanggan <span className="text-rose">*</span></label>
            <input type="text" placeholder="Cth: Budi Santoso" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Layanan <span className="text-rose">*</span></label>
              <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all appearance-none">
                <option value="">-- Pilih --</option>
                <option value="cuci">🫧 Cuci Saja</option>
                <option value="setrika">👔 Setrika Saja</option>
                <option value="lengkap">✨ Cuci + Setrika</option>
                <option value="express">⚡ Express</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Berat (kg) <span className="text-rose">*</span></label>
              <input type="number" step="0.5" placeholder="Cth: 3" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Tanggal Masuk <span className="text-rose">*</span></label>
              <input type="date" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all" />
            </div>
            <div>
              <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Total Estimasi</label>
              <input type="text" value="Rp 0" disabled className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-400 cursor-not-allowed" />
            </div>
          </div>
          <div>
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Catatan (opsional)</label>
            <textarea placeholder="Cth: Pakaian warna putih dipisah..." rows={3} className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all resize-none"></textarea>
          </div>
        </form>
      </Modal>

      {/* Modal Tambah Pelanggan */}
      <Modal
        isOpen={modals.tambahPelanggan}
        onClose={() => closeModal('tambahPelanggan')}
        title="👥 Tambah Pelanggan Baru"
        footer={
          <>
            <button 
              onClick={() => closeModal('tambahPelanggan')}
              className="flex-1 py-4 rounded-2xl font-bold text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              Batal
            </button>
            <button 
              onClick={() => handleSave('tambahPelanggan', '✅ Pelanggan berhasil disimpan!')}
              className="flex-[2] py-4 rounded-2xl font-bold bg-sky text-white shadow-lg shadow-sky/20 hover:scale-[1.02] transition-all"
            >
              Simpan Pelanggan
            </button>
          </>
        }
      >
        <form className="space-y-6">
          <div>
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Nama Lengkap <span className="text-rose">*</span></label>
            <input type="text" placeholder="Cth: Maya Fitriani" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Email <span className="text-rose">*</span></label>
              <input type="email" placeholder="email@domain.com" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all" />
            </div>
            <div>
              <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">No. HP <span className="text-rose">*</span></label>
              <input type="tel" placeholder="0812-xxxx-xxxx" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all" />
            </div>
          </div>
          <div>
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Alamat (opsional)</label>
            <input type="text" placeholder="Cth: Jl. Melati No. 5, Depok" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all" />
          </div>
        </form>
      </Modal>

      {/* Modal Tambah Layanan */}
      <Modal
        isOpen={modals.tambahLayanan}
        onClose={() => closeModal('tambahLayanan')}
        title="🧺 Tambah Layanan Baru"
        footer={
          <>
            <button 
              onClick={() => closeModal('tambahLayanan')}
              className="flex-1 py-4 rounded-2xl font-bold text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              Batal
            </button>
            <button 
              onClick={() => handleSave('tambahLayanan', '✅ Layanan berhasil disimpan!')}
              className="flex-[2] py-4 rounded-2xl font-bold bg-sky text-white shadow-lg shadow-sky/20 hover:scale-[1.02] transition-all"
            >
              Simpan Layanan
            </button>
          </>
        }
      >
        <form className="space-y-6">
          <div>
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Nama Layanan <span className="text-rose">*</span></label>
            <input type="text" placeholder="Cth: Cuci Sepatu" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all" />
          </div>
          <div>
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Deskripsi <span className="text-rose">*</span></label>
            <textarea placeholder="Jelaskan detail layanan..." rows={2} className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all resize-none"></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Harga / kg <span className="text-rose">*</span></label>
              <input type="text" placeholder="Rp 0" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all" />
            </div>
            <div>
              <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-2 px-1">Estimasi Waktu <span className="text-rose">*</span></label>
              <input type="text" placeholder="Cth: 2-3 hari" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 py-3 text-sm font-bold text-gray-800 dark:text-white outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-sky/20 transition-all" />
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default ModalManager
