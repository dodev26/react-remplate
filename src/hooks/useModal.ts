import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useModal() {
  const [modal, setModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<React.ReactNode>(null)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modal])

  const handleModal = (content: React.ReactNode | string) => {
    if (modal) {
      setSearchParams({})
    }
    setModal(!modal)
    if (content) {
      setModalContent(content)
    }
  }
  return { modal, handleModal, modalContent }
}
