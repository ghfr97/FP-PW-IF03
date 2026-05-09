import { create } from 'zustand'

interface UIState {
  isSidebarOpen: boolean
  toggleSidebar: () => void
  theme: 'light' | 'dark'
  toggleTheme: () => void
  toast: {
    message: string
    visible: boolean
    type: 'success' | 'error'
  }
  showToast: (message: string, type?: 'success' | 'error') => void
  modals: {
    tambahPesanan: boolean
    tambahPelanggan: boolean
    tambahLayanan: boolean
  }
  openModal: (modalName: keyof UIState['modals']) => void
  closeModal: (modalName: keyof UIState['modals']) => void
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  
  theme: 'light',
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),

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
