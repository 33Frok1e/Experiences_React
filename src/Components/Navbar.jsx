import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

function Navbar() {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
    if(!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <div className='w-full flex justify-between p-4 items-center absolute'>
      <h1 className='text-white z-20 font-bold text-2xl'>Experiences</h1>
      <HiMenuAlt3 className='text-white z-20 cursor-pointer' size={25} onClick={handleNav} />
      <div className={nav ? 'text-gray-300 fixed left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 z-10 ease-in duration-300' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10' }>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-7'>Home</li>
          <li className='font-bold text-3xl p-7'>Destinations</li>
          <li className='font-bold text-3xl p-7'>Reservations</li>
          <li className='font-bold text-3xl p-7'>Ameneties</li>
          <li className='font-bold text-3xl p-7'>Rooms</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar