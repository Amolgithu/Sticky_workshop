import React from 'react'
import Stickyname from './Stickyname'
import Stickybody from './Stickybody'

const Stickynote = () => {
  return (
    <div className='absolute inline border-2 rounded-sm border-lime-700 bg-lime-200'>
        <Stickyname/>
        <Stickybody/>
    </div>
  )
}

export default Stickynote