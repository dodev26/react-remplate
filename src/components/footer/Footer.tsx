import React from 'react'
import { Link } from 'react-router-dom'

import { Logo, zalo } from 'src/assets/img'
import { CONTACT } from 'src/constant/contact'
import path from 'src/constants/path'

const Footer = () => {
  return (
    <div>
      <section className='page-section' id='contact'>
        <div className='container'>
          <div className='text-center' data-aos='fade-up'>
            <h2 className='section-heading text-uppercase'>Liên Hệ</h2>
            <h3 className='section-subheading  text-yeelow'>thông tin liên hệ của chúng tôi</h3>
          </div>
          <div className='row text-white'>
            <h4 className='mb-4'>Liên hệ chúng tôi thông qua</h4>
            <div className='row'>
              <div className='col-12 col-md-4 mb-4 md:mb-0'>
                <div>
                  <span className='fw-bolder me-2 mb-4 block'>Số điện thoại : </span>
                  <ul className='flex flex-col gap-y-1 pl-0'>
                    {CONTACT.phone.map((item) => (
                      <li key={item}>
                        <a className='no-underline' href={`tel:${item}`}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='col-12 col-md-4 mb-4 md:mb-0'>
                <div>
                  <span className='fw-bolder me-2 mb-4 block'>Địa chỉ : </span>
                  <a
                    className='block no-underline'
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.google.com/maps/place/Cyber+Meow/@16.0590114,108.2083097,17z/data=!3m1!4b1!4m6!3m5!1s0x314219ea491209bf:0x2a5f450dcb3f4afe!8m2!3d16.0590114!4d108.2108846!16s%2Fg%2F11h4zggxzw'
                  >
                    09 Đào Duy Anh ,Thạc Gián , Thanh Khê, Đà Nẵng
                  </a>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <span className='fw-bolder me-2 mb-4 block'>Mạng xã hội:</span>
                <ul className='list-unstyled list-contact d-flex align-items-center my-4'>
                  <li>
                    <a
                      className='btn btn-light btn-social facebook mx-2 border-0'
                      href={CONTACT.fb}
                      aria-label='Facebook'
                    >
                      <i className='fab fa-facebook-f text-white' />
                    </a>
                  </li>
                  <li>
                    <a className='btn btn-light btn-social mx-2 border-0' href={CONTACT.zalo} aria-label='Zalo'>
                      <img loading='lazy' src={zalo} className='icon-zalo' alt='zalo' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer*/}
      <div className='footer py-4'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-4 text-lg-start'>Copyright © Quế company 2023</div>
            <div className='col-lg-4 my-lg-0 my-3'>
              <a className='btn btn-light btn-social facebook mx-2' href='#!' aria-label='Facebook'>
                <i className='fab fa-facebook-f text-white' />
              </a>
              <a className='btn btn-light btn-social mx-2' href='#!' aria-label='Zalo'>
                <img loading='lazy' src={zalo} className='icon-zalo' alt='zalo' />
              </a>
            </div>
            <div className='col-lg-4 text-lg-end'>
              <a className='link-dark text-decoration-none me-3' href='#!'>
                Privacy Policy
              </a>
              <a className='link-dark text-decoration-none' href='#!'>
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
