import React, { useEffect } from 'react'
import classNames from 'classnames'

const Stt = () => {
  const [showScroll, setShowScroll] = React.useState(false)

  useEffect(() => {
    function handleScrollToTop() {
      if (window.scrollY > 100) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', handleScrollToTop)
    return () => {
      window.removeEventListener('scroll', handleScrollToTop)
    }
  })

  const scrollTopOnClick = () => {
    scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div
      className={classNames('scroll-top', {
        active: showScroll
      })}
      onClick={scrollTopOnClick}
      onKeyDown={scrollTopOnClick}
      role='button'
      tabIndex={0}
    >
      <a className='scroll-to-top js-scroll-trigger rounded' href='#page-top'>
        <svg
          className='svg-inline--fa fa-angle-up'
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='angle-up'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 384 512'
          data-fa-i2svg
        >
          <path
            fill='currentColor'
            d='M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z'
          />
        </svg>
      </a>
    </div>
  )
}

export default Stt
