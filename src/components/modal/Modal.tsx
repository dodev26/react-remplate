import React from 'react'
import { createPortal } from 'react-dom'
import { useModalContext } from 'src/contexts/modal.context'
import { motion } from 'framer-motion'
const Modal = () => {
  const { handleModal, modal, modalContent } = useModalContext()
  if (modal) {
    return createPortal(
      <div
        className='fixed top-0 left-0 z-[1111] flex h-screen w-full items-center justify-center overflow-hidden px-3'
        style={{ background: 'rgba(0,0,0,0.8)' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='h-full w-full'
        >
          <div className='relative  h-full w-full overflow-y-auto rounded bg-white p-3 pt-5 text-lg text-gray-800 shadow-lg'>
            <button
              className='absolute top-2 right-2 mb-3 h-8 w-8 self-end rounded-full bg-gray-300  font-bold text-red-700'
              onClick={() => handleModal(null)}
            >
              &times;
            </button>
            {modalContent}
          </div>
        </motion.div>
      </div>,
      document.querySelector('#modal-root') as HTMLElement
    )
  } else {
    return null
  }
}

export default Modal
