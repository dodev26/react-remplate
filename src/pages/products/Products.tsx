import React from 'react'
import Product from 'src/components/product'
import { PRODUCT_AT_HOME } from 'src/data/DATA'

const Products = () => {
  return (
    <div>
      <header className='masthead products' id='products-banner'>
        <div className='container'>
          <div className='position-relative zid-5'>
            <div className='masthead-subheading'>
              <h1>TẤT SẢN PHẨM CỦA CHÚNG TÔI</h1>
            </div>
            <div className='masthead-heading text-capitalize'>Hương quế Đông Giang</div>
            <a className='text-white ' href='#products'>
              <i className='fa fa-chevron-down fa-3x' aria-hidden='true' />
            </a>
          </div>
        </div>
      </header>
      <section className='page-section bg-light position-relative' id='products'>
        <div className='sticky-bar d-flex flex-column gap-3'>
          <div>
            <a href='#que' className='d-block fw-bold text-decoration-none  p-2 text-white'>
              Quế
            </a>
          </div>
          <div>
            <a href='#hoi' className='d-block fw-bold text-decoration-none  p-2 text-white'>
              Hồi
            </a>
          </div>
          <div>
            <a href='#others' className='d-block fw-bold text-decoration-none  p-2 text-white'>
              Sản Phẩm Khác
            </a>
          </div>
        </div>
        <div className='container'>
          <div className='text-center' data-aos='fade-up'>
            <h2 className='section-heading text-uppercase'>Sản Phẩm</h2>
            <h3 className='section-subheading text-muted'>những sản phẩm nổi bật của chúng tôi.</h3>
          </div>
          <div className='list-product-alpha mb-5' id='que'>
            <div className='mb-4' data-aos='fade-up'>
              <h4 className='position-relative underline-color'>Quế</h4>
            </div>
            <div className='row' id='que-product'>
              {PRODUCT_AT_HOME.map((product) => (
                <Product className='col-lg-3 col-sm-6 mb-4' key={product.id} data={product} />
              ))}
            </div>
          </div>
          <div className='list-product-alpha mb-5' id='hoi'>
            <div className='mb-4' data-aos='fade-up'>
              <h4 className='position-relative underline-color'>Sản phẩm dược liệu</h4>
            </div>
            <div>Đang cập nhật ...</div>
          </div>
          <div className='list-product-alpha mb-5' id='hoi'>
            <div className='mb-4' data-aos='fade-up'>
              <h4 className='position-relative underline-color'>Hồi</h4>
            </div>
            <div>Đang cập nhật ...</div>
          </div>
          <div className='list-product-alpha' id='others'>
            <div className='mb-4' data-aos='fade-up'>
              <h4 className='position-relative underline-color'>Sản phẩm khác</h4>
            </div>
            <div>Đang cập nhật ...</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
