import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Logo } from 'src/assets/img'
import path from 'src/constants/path'

const Header = () => {
  const [show, setShow] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const isDesktop = Boolean(window.innerWidth > 992)
  const desktopStyle = {
    backgroundColor: show ? '#212529' : 'transparent'
  }
  const progressScroll = useRef(null)

  const mobileStyle = {
    backgroundColor: '#212529'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && isDesktop) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      if (!isDesktop) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isDesktop])

  useEffect(() => {
    const handleProgressScroll = () => {
      if (progressScroll.current) {
        const progress = progressScroll.current as HTMLDivElement
        const percentScroll = Math.round((window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 100)
        progress.style.width = `${percentScroll}%`
      }
    }
    window.addEventListener('scroll', handleProgressScroll)
  }, [])

  return (
    <nav
      style={isDesktop ? desktopStyle : mobileStyle}
      className='navbar navbar-expand-lg navbar-dark fixed-top'
      id='mainNav'
    >
      <div className='progress-scroll' ref={progressScroll} />
      <div className='position-relative container'>
        <NavLink className='navbar-brand' to={path.home}>
          <img loading='lazy' src={Logo} alt='duc huy hinh logo brand' className='img-fluid' />
        </NavLink>
        <button
          onClick={toggleMenu}
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          Danh Mục
          <svg
            className='svg-inline--fa fa-bars ms-1'
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='bars'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            data-fa-i2svg
          >
            <path
              fill='currentColor'
              d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z'
            />
          </svg>
          {/* <i class="fas fa-bars ms-1"></i> Font Awesome fontawesome.com */}
        </button>
        <div
          className={classNames('navbar-collapse block transition-all', {
            hidden: !showMenu
          })}
          id='navbarResponsive'
        >
          <ul className='navbar-nav text-uppercase ms-auto py-lg-0 py-4'>
            <li className='nav-item'>
              <NavLink onClick={() => setShowMenu(false)} className='nav-link' to='/'>
                Trang Chủ
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink onClick={() => setShowMenu(false)} className='nav-link' to={path.products} id='products-link'>
                Sản Phẩm
              </NavLink>
              {/* <div class="dropdown-menu w-100 mt-0 animate slideIn" aria-labelledby="navbarDropdown"
                      style="border-top-left-radius: 0;border-top-right-radius: 0;">
                      <div class="container ">
                          <div class="row my-4">
                              <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                  <div class="list-group list-group-flush">
                                      <span class="list-group-item  border-0 fw-bold ">Quế</span>
                                      <a href="" class="list-group-item list-group-item-action">Quế ống điếu</a>
                                      <a href="" class="list-group-item list-group-item-action">Quế ống sáo</a>
                                      <a href="" class="list-group-item list-group-item-action">Quế cắt thanh</a>
                                      <a href="" class="list-group-item list-group-item-action">Quế cắt tròn</a>
                                      <a href="" class="list-group-item list-group-item-action">Quế cắt vuông</a>
                                  </div>
                              </div>
                              <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                  <div class="list-group list-group-flush">
                                      <span class="list-group-item  border-0 fw-bold ">Hồi</span>
                                      <a href="" class="list-group-item list-group-item-action">Hồi Nguyên
                                          Cánh</a>
                                      <a href="" class="list-group-item list-group-item-action">Hồi Vụn</a>
                                      <a href="" class="list-group-item list-group-item-action">Bột Hồi</a>
                                  </div>
                              </div>
                              <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                  <div class="list-group list-group-flush">
                                      <span class="list-group-item  border-0 fw-bold ">Mỹ Nghệ Quế</span>
                                      <a href="" class="list-group-item list-group-item-action">HỘP QUẾ VUÔNG</a>
                                      <a href="" class="list-group-item list-group-item-action">HỘP QUẾ TRÒN</a>
                                      <a href="" class="list-group-item list-group-item-action">HỘP QUẾ CHỮ NHẬT
                                      </a>
                                  </div>
                              </div>
                              <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                  <div class="list-group list-group-flush">
                                      <span class="list-group-item  border-0 fw-bold ">Sản Phẩm Khác</span>
                                      <a href="./products.html" class="list-group-item list-group-item-action">Xem
                                          Thêm</a>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> */}
            </li>
            <li className='nav-item'>
              <HashLink onClick={() => setShowMenu(false)} className='nav-link' smooth to='/#about'>
                Về Chúng Tôi
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink onClick={() => setShowMenu(false)} className='nav-link' smooth to='/#contact'>
                Liên Hệ
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
