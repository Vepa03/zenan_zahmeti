import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between'>
        <a href='/'>Zenan</a>
        <ul className='hidden md:flex items-center gap-6 rounded-full px-12 py-3 border border-gray-500'>
           <li><a href='/home'>Home</a></li> 
           <li><a href='/product'>Product</a></li> 
           <li><a href='/bag'></a>Bag</li> 
           <li><a href='/contact'></a>Contact</li> 
        </ul>
        <div className='rounded-full border px-6 py-3 border-gray-500'>
            <a href='/login'>Login</a>
        </div>
    </nav>
    </>
  )
}

export default Navbar
