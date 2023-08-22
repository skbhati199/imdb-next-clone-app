import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-center items-center dark:bg-gray-600 p-4 bg-amber-100 lg:text-lg'>
      <NavbarItem title="Trending" param="fetchTredning" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
