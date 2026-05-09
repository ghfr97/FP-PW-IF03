import { useUIStore } from '../../store/uiStore'

const Toast = () => {
  const { message, visible, type } = useUIStore((state) => state.toast)

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-500 flex items-center px-6 py-3 rounded-2xl shadow-2xl ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${
        type === 'success' ? 'bg-gray-900 text-white' : 'bg-rose text-white'
      }`}
    >
      <span className="font-semibold">{message}</span>
    </div>
  )
}

export default Toast
