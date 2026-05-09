import { create } from 'zustand'

export const useUIStore = create((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  
  toast: {
    message: '',
    visible: false,
    type: 'success'
  },
  showToast: (message, type = 'success') => {
    set({ toast: { message, visible: true, type } })
    setTimeout(() => {
      set((state) => ({ toast: { ...state.toast, visible: false } }))
    }, 3000)
  },

  modals: {
    tambahPesanan: false,
    tambahPelanggan: false,
    tambahLayanan: false,
  },
  openModal: (modalName) => set((state) => ({
    modals: { ...state.modals, [modalName]: true }
  })),
  closeModal: (modalName) => set((state) => ({
    modals: { ...state.modals, [modalName]: false }
  })),
}))
