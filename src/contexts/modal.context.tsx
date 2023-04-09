import { createContext, useContext, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Detail from 'src/components/detail'
import Modal from 'src/components/modal'
import { DETAIL_PRODUCT_AT_HOME } from 'src/data/DATA'
import useModal from 'src/hooks/useModal'

interface IModalContext {
  modal: boolean
  handleModal: (content: React.ReactNode | string) => void
  modalContent: React.ReactNode
}
const initialState: IModalContext = {
  modal: false,
  handleModal: () => null,
  modalContent: null
}
const ModalContext = createContext<IModalContext>(initialState)

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const { modal, handleModal, modalContent } = useModal()

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [modal])

  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  )
}

const useModalContext = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }
  return context
}

export { ModalProvider, useModalContext }
