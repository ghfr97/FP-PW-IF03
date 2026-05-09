import React from 'react'
import { useUIStore } from '../../store/uiStore'

const Toast: React.FC = () => {
  const { toast } = useUIStore()

  if (!toast.visible) return null

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className={`px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20 backdrop-blur-md ${
        toast.type === 'success' 
          ? 'bg-teal/90 text-white' 
          : 'bg-rose/90 text-white'
      }`}>
        <span className="text-xl">{toast.type === 'success' ? '✅' : '❌'}</span>
        <p className="font-bold tracking-tight">{toast.message}</p>
      </div>
    </div>
  )
}

export default Toast
