// import React from 'react'
import Logo from '../logo'
function NavComponent() {
  return (
    <nav className='text-white flex items-center justify-between py-6 w-[90%] mx-auto sticky top-0 z-10 bg-[#0B1120]'>
      <Logo />
      <div className='flex gap-6'>
        <p> Docs </p>
        <p> Components </p>
        <p> Blog </p>
        <p> Showcase </p>
      </div>
    </nav>
  )
}

export default NavComponent
