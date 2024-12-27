import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div
            className="h-screen bg-cover flex items-center justify-center m-0 "
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/10533140/pexels-photo-10533140.jpeg?auto=compress&cs=tinysrgb')",                    
            }}
        >
            <Outlet />
        </div>
  )
}

export default Layout