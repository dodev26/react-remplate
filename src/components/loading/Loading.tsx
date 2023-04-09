import React from 'react'

const Loading = () => {
  return (
    <div className='fixed inset-0 h-screen w-full bg-black'>
      <div className='h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-gray-900'></div>
    </div>
  )
}

export default Loading
