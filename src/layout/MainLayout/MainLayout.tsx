import React from 'react'
import { Outlet } from 'react-router-dom'
import { zalo } from 'src/assets/img'
import Footer from 'src/components/footer'
import Header from 'src/components/header'
import Stt from 'src/components/scrolltotop/Stt'
import { CONTACT } from 'src/constant/contact'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className='fixed-contact'>
        <ul className='list-unstyled d-flex flex-md-column gap-md-3 flex-row gap-1'>
          <li>
            <a
              className='btn btn-light btn-social facebook mx-2 border-0'
              href={CONTACT.fb}
              target='_blank'
              aria-label='Facebook'
              rel='noreferrer'
            >
              <i className='fab fa-facebook-f text-white' />
            </a>
          </li>
          <li>
            <a
              className='btn btn-light btn-social mx-2 border-0'
              href={CONTACT.zalo}
              target='_blank'
              aria-label='Zalo'
              rel='noreferrer'
            >
              <img loading='lazy' src={zalo} className='icon-zalo' alt='zalo' />
            </a>
          </li>
          <li>
            <a
              className='btn btn-light btn-telephone facebook mx-2 border-0'
              href={`tel:${CONTACT.phone[2]}`}
              aria-label='Zalo'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={16}
                height={16}
                fill='currentColor'
                className='bi bi-telephone-fill telephone-style text-white'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <Outlet />
      <Stt />
      <Footer />
    </div>
  )
}

export default MainLayout
