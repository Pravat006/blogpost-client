import React from 'react'
//import ReadPost from '../post/ReadPost'
import { Outlet } from 'react-router-dom'

function Postlayout() {
  return (
    <div className='text-center'>

      <Outlet />

    </div>
  )
}

export default Postlayout