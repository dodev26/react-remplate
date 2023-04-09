import React from 'react'
import { Link, createSearchParams } from 'react-router-dom'

interface IProduct {
  className?: string
  data: {
    id: string
    img: string
    name: string
  }
}

const Product = ({ className = 'col-lg-4 col-sm-6 mb-4', data }: IProduct) => {
  const { id, img, name } = data || {}

  return (
    <div className={className}>
      <div className='products-item' data-aos='fade-up'>
        <Link
          className='products-link'
          data-bs-toggle='modal'
          to={{
            pathname: ``,
            search: createSearchParams({
              detail: String(name),
              id: String(id)
            }).toString()
          }}
        >
          <div className='products-hover'>
            <div className='products-hover-content'>
              <i className='fa fa-search fa-3x' />
            </div>
          </div>
          <img loading='lazy' className='img-fluid' src={img} alt='${product.name}' />
        </Link>
        <div className='products-caption'>
          <div className='products-caption-heading'>{name}</div>
          <div className='products-caption-subheading text-muted'>(click để xem chi tiết)</div>
        </div>
      </div>
    </div>
  )
}

export default Product
