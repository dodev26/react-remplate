import React from 'react'
import { useModalContext } from 'src/contexts/modal.context'
import { Product } from 'src/types/product.type'
import { getNamePropertyVi } from 'src/utils/utils'

interface IDetail {
  product: Product
}

const Detail = ({ product }: IDetail) => {
  const { handleModal } = useModalContext()
  return (
    <div className='mx-auto w-full sm:max-w-md md:max-w-xl'>
      <h2 className='text-center'>{product.name}</h2>
      <div className='mt-4'>
        <img
          loading='lazy'
          src={product.img}
          className='h-[300px] w-full overflow-hidden object-cover lg:h-[400px]'
          alt={product.name}
        />
      </div>
      <div className='mt-4'>
        <h3>Chi tiết sản phẩm</h3>
        <ul className='p-0'>
          {Object.keys(product.detail).map((key: string) => (
            <li key={key}>
              - <span className='mr-3 inline-block'>{getNamePropertyVi(key)}: </span>
              {product.detail[key as keyof typeof product.detail]}
            </li>
          ))}
        </ul>
      </div>
      <div className='d-flex flex-column align-items-start justify-content-start gap-2'>
        <h3> Giao hàng và thanh toán</h3>
        <div>
          <ul className='list-inline d-flex flex-column align-items-baseline gap-2'>
            <li>Giao hàng trên toàn quốc</li>
            <li>Thanh toán: bằng tiền mặt hoặc chuyển khoản</li>
          </ul>
        </div>
      </div>
      <div className='d-flex  align-items-center justify-content-center gap-3'>
        <a
          href='tel:121212'
          className='btn d-block d-md-none btn-primary btn-md  d-flex align-items-center text-uppercase'
          type='button'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={16}
            height={16}
            fill='currentColor'
            className='bi bi-telephone-fill telephone-style mx-1 text-white'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
            />
          </svg>
          Liên Hệ
        </a>
        <button
          onClick={() => handleModal(null)}
          className='btn btn-danger btn-md text-uppercase'
          data-bs-dismiss='modal'
          type='button'
        >
          <i className='fas fa-xmark me-1' />
          Trở về
        </button>
      </div>
    </div>
  )
}

export default Detail
