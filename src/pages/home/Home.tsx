import { Link } from 'react-router-dom'
import Product from 'src/components/product'
import path from 'src/constants/path'
import { PRODUCT_AT_HOME } from 'src/data/DATA'
import data_about, { photos } from './constants/constants'
import { useState } from 'react'
import Gallery from 'react-photo-gallery'
import { motion } from 'framer-motion'

const Home = () => {
  const [showMore, setShowMore] = useState<number[]>([])
  const [showMoreAbout, setShowMoreAbout] = useState<boolean>(false)
  const handleShowMore = (id: number) => {
    const findIndex = showMore.findIndex((item) => item === id)
    if (findIndex === -1) {
      setShowMore([...showMore, id])
    } else {
      setShowMore(showMore.filter((item) => item !== id))
    }
  }
  return (
    <>
      <div>
        <header className='masthead'>
          <div className='container'>
            <div className='position-relative zid-5'>
              <div className='d-flex flex-column align-items-center' data-aos='fade-right'>
                <div className='masthead-subheading text-start'>
                  <h1 className='text-yeelow'>ĐỨC DUY HINH</h1>
                </div>
                <div className='masthead-heading text-capitalize lh-1  text-center'>Hương quế ĐÔNG GIANG</div>
                <a className='btn btn-primary btn-xl text-uppercase' href='#products'>
                  Xem Sản Phẩm
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Services*/}
        <section className='page-section bg-light' id='products'>
          <div className='container'>
            <div className='text-center' data-aos='fade-up'>
              <h2 className='section-heading text-uppercase'>Sản Phẩm</h2>
              <h3 className='section-subheading text-muted'>những sản phẩm nổi bật của chúng tôi.</h3>
            </div>
            <div className='row' id='products-at-home'>
              {PRODUCT_AT_HOME.slice(0, 3).map((product) => (
                <Product key={product.id} data={product} />
              ))}
            </div>

            <div className='col-12 mt-4 text-center'>
              <Link
                className='btn btn-primary btn-xl text-uppercase transition-all hover:shadow-lg'
                to={path.products}
                data-aos='fade-up'
              >
                Xem Thêm
              </Link>
            </div>
          </div>
        </section>

        <section className='page-section' id='about'>
          <div className='container'>
            <div className='text-center' data-aos='fade-up'>
              <h2 className='section-heading text-uppercase'>Về Chúng Tôi</h2>
              <h3 className='section-subheading text-muted'>Sự Hình Thành và Phát triển.</h3>
              <div className='my-5' data-aos='fade-up'>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className='pe-lg-3 text-start'>
                      <h3 className='company-name mb-4'>
                        <span className='text-yeelow'>ĐỨC</span> DUY <span className='text-yeelow'>HINH</span>
                      </h3>

                      <div className='flex flex-col'>
                        <p>
                          Chúng tôi là một doanh nghiệp tại TP.Đà Nẵng, tiên phong trong đầu tư, nghiên cứu, phát triển
                          và bảo vệ giống quế thuần túy của Quảng Nam.
                        </p>

                        <p>
                          Với gần 30 năm kinh nghiệm trong lĩnh vực trồng và chế biến quế, chúng tôi tự hào là một trong
                          những đơn vị hàng đầu của miền trung trong lĩnh vực nuôi trồng và sản xuất các sản phẩm từ
                          quế.Mục tiêu của chúng tôi là đem đến cho khách hàng những sản phẩm chất lượng nhất, an toàn
                          nhất và giá cả hợp lý nhất.
                          {!showMoreAbout && (
                            <button
                              onClick={() => setShowMoreAbout(!showMoreAbout)}
                              className='inline-block text-xs underline transition-all hover:text-yellow-400'
                            >
                              xem thêm
                            </button>
                          )}
                          {showMoreAbout && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                              Xa hơn nữa , chúng tôi luôn nung nấu quyết tâm bảo vệ và duy trì giống quế thuần túy đặc
                              trưng của vùng miền trung , góp phần bảo tồn và phát triển nguồn tài nguyên , làm đa dạng
                              hóa sản phẩm nông nghiệp của đất nước.{' '}
                              <button
                                onClick={() => setShowMoreAbout(!showMoreAbout)}
                                className='inline-block text-xs underline transition-all hover:text-yellow-400'
                              >
                                thu gọn
                              </button>
                            </motion.div>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className='ratio ratio-16x9 w-100 h-100'>
                      <iframe
                        className='w-100 h-100'
                        src='https://www.youtube.com/embed/a2mM5QI0uDY'
                        title='YouTube video player'
                        frameBorder={0}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row text-center' data-aos='fade-up'>
              {data_about.length > 0 &&
                data_about.map((item) => (
                  <div className='col-md-4 text-center' key={item.id}>
                    <img
                      src={item.img}
                      loading='lazy'
                      alt='img'
                      className='img-fluid transi transition-all duration-200 hover:grayscale'
                    />
                    <h4 className='my-3'>{item.title}</h4>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                      <p
                        className={`text-muted transition-all ${showMore.includes(item.id) ? 'line-clamp-0' : 'line-clamp-2'
                          }`}
                      >
                        {item.desc}
                      </p>
                    </motion.div>
                    <button
                      onClick={() => handleShowMore(item.id)}
                      className={`mx-auto flex items-center ${showMore.includes(item.id) ? 'bg-gray-400' : 'bg-yeelow'
                        }   p-2  text-xs text-white shadow-md focus:outline-1 `}
                    >
                      {showMore.includes(item.id) ? (
                        <>
                          Thu gọn
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='ml-1 h-4 w-4 text-white transition-all'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18'
                            />
                          </svg>
                        </>
                      ) : (
                        <>
                          Xem thêm
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='ml-1 h-4 w-4 text-white transition-all'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section className='page-section' id='gallery'>
          <div className='container'>
            <div className='text-center' data-aos='fade-up'>
              <h2 className='section-heading text-uppercase'>Hình Ảnh</h2>
              <h3 className='section-subheading text-muted'>Hoạt động sản xuất</h3>
            </div>
            <div>
              <Gallery photos={photos} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
