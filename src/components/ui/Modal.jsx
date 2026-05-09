const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
          <h2 className="font-syne font-extrabold text-gray-900 text-xl">{title}</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 hover:bg-gray-50 text-gray-400 hover:text-gray-900 transition-all font-bold"
          >
            ✕
          </button>
        </div>
        
        <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {children}
        </div>

        {footer && (
          <div className="p-8 border-t border-gray-50 bg-gray-50/30 flex gap-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
