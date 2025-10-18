import React from 'react'
import {FaInstagram, FaLinkedin, FaPhone, FaMail} from 'react-icons/fa'
import {LuMail} from 'react-icons/lu'
const Footer = () => {
  return (
    <div className='bg-gray-100 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
        <div className='p-5'>
            <ul>
                <p className='text-gray-800 font-bold text-3xl pb-6'>Zenan<span className='text-green-600'>Zahmeti</span></p>
                <div className='flex gap-6 pb-5'>
                    <FaLinkedin className='text-2xl curser-pointer hover:text-gray-500' />
                    <FaInstagram className='text-2xl curser-pointer hover:text-gray-500' />
                    <FaPhone className='text-2xl curser-pointer hover:text-gray-500' />
                    <LuMail className='text-2xl curser-pointer hover:text-gray-500' />
                </div>
            </ul>
        </div>
        <div>
            <ul>
                <p>category</p>
                <li>el ishleri</li>
                <li>tikin</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
