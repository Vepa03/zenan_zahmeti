import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between'>
        <a href='/'>Zenan</a>
        <ul className='hidden md:flex items-center gap-6 rounded-full px-12 py-3 
        bg-white shadow-sm bg-opacity-50'>
           <li><a href='/home' className='font-Ovo'>Home</a></li> 
           <li><a href='/product' className='font-Ovo'>Product</a></li> 
           <li><a href='/bag' className='font-Ovo'>Bag</a></li> 
           <li><a href='/contact' className='font-Ovo'>Contact</a></li> 
        </ul>
        <button href='/login' className='bg-green-600 rounded-full px-6 py-3 text-white hover:bg-green-700 font-bold '>Login</button>
    </nav>
    </>
  )
}

export default Navbar
