import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/user-settings/sidebar/Sidebar'

export default function UserSetting() {
  return (
    <div className='flex  space-x-5 bg-gray-100' >
      
      <Sidebar />
      <div className='flex-1 md:mx-4 bg-white'>
        <Outlet />
      </div>
    </div>
  )
}
