import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const navItems = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Our Menus",
        url: "/"
    },
    {
        name: "About Us",
        url: "/"
    },
    {
        name: "Contact Us",
        url: "/"
    },
]


const Footer = () => {
    return (
        <div className='pb-14'>
            <footer className='container    p-6  md:p-12 bg-[#D8E5D6] rounded-2xl'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                    <h4 className=' text-xl md:text-2xl font-bold'>Call us on +45 45****32</h4>
                    <button className='btn'>Make a Reservation</button>
                </div>
                <div className='flex items-center flex-wrap gap-6 justify-center py-12'>
                    {
                        navItems.map((item, index) => (
                            <Link key={index} href={item.url} className=' font-medium text-gray-800 hover:text-gray-500 duration-200 '>{item.name}</Link>
                        ))
                    }               
               </div>
               <hr  className='border-gray-400/50'/>
               <div className='  space-y-3  py-5'>
                <p className='text-sm  font-medium text-gray-600 text-center'>Copyright © Grand Restaurant Theme Demo by ThemeGoods</p>
               <div className='flex items-center justify-center gap-4 py-6 flex-wrap'>
                <Link href={'/'}>
                       <FaFacebook className='w-5 h-5 text-gray-500 hover:text-white'/>  
                </Link>
                <Link href={'/'}>
                       <FaTwitter className='w-5 h-5 text-gray-500 hover:text-white'/>  
                </Link>
                <Link href={'/'}>
                       <FaYoutube className='w-5 h-5 text-gray-500 hover:text-white'/>  
                </Link>
                <Link href={'/'}>
                       <FaLinkedin className='w-5 h-5 text-gray-500 hover:text-white'/>  
                </Link>
               </div>
               </div>
            </footer>
        </div>
    )
}

export default Footer