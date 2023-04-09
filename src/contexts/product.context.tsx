import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { DETAIL_PRODUCT_AT_HOME } from 'src/data/DATA'
import { useModalContext } from './modal.context'
import Detail from 'src/components/detail'
import { Product as ProductType } from 'src/types/product.type'
import { useLocation } from 'react-router-dom'

interface ProductContextType {
  currentProduct: null | any
  setCurentProduct: React.Dispatch<React.SetStateAction<ProductContextType>>
}

const initialState: ProductContextType = {
  currentProduct: null,
  setCurentProduct: () => null
}
const ProductContext = createContext<ProductContextType>(initialState)

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentProduct, setCurentProduct] = useState<ProductContextType>(initialState.currentProduct)
  const { handleModal, modal } = useModalContext()
  const { search } = useLocation()

  const getIdFromNameId = (nameId: string) => {
    const arr = nameId.split('id=')
    return arr[arr.length - 1]
  }
  const idSelect = useMemo(() => getIdFromNameId(search), [search])

  useEffect(() => {
    if (idSelect || (!modal && idSelect)) {
      const data = DETAIL_PRODUCT_AT_HOME.find((item) => item.id === idSelect)
      document.title = data?.name || 'ĐỨC DUY HINH'
      data && handleModal(<Detail product={data as ProductType} />)
    } else {
      document.title = 'ĐỨC DUY HINH'
    }
  }, [idSelect])
  return <ProductContext.Provider value={{ currentProduct, setCurentProduct }}>{children}</ProductContext.Provider>
}

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }
  return context
}
export default ProductProvider
