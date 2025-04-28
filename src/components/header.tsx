"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AnimatePresence, motion } from "motion/react";

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


const Header = () => {
  const [isActive, setActive] = useState(false)


  return (
    <>
      <header className=' sticky top-0 left-0 w-full z-20 py-2.5 md:py-4 lg:py-6 bg-white/20 backdrop-blur-sm'>
        <div className='container flex gap-4 justify-between items-center overflow-x-clip'>
          <Link href={'/'} className='text-xl font-bold  text-black'>LOGO</Link>
          <motion.nav
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .3 }}
            viewport={{ once: true, amount: .5 }}
            className=' hidden lg:flex gap-8 items-center '>
            {
              navItems.map((item, index) => (
                <Link key={index} href={item.url} className=' font-medium text-gray-800 hover:text-gray-500 duration-200 '>{item.name}</Link>
              ))
            }
          </motion.nav>
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .3, delay: .4 }}
            viewport={{ once: true, amount: .5 }}
            className='btn hidden md:block'>
            Make a Reservation
          </motion.button>
          <button onClick={() => setActive(!isActive)} className='btn   lg:hidden  !px-3.5   '>
            <FaBars />
          </button>
        </div>
      </header>

      {
        isActive &&
        <AnimatePresence>
          <div className='fixed z-30 top-0 left-0 w-full h-full bg-black/20 backdrop-blur-md flex '>
            <div onClick={() => setActive(false)} className='flex-1 h-full'>

            </div>
            <motion.div initial={{ translateX: 200 }} whileInView={{ translateX: 0 }} transition={{ duration: .2 }} className='bg-white w-10/12 max-w-md p-6'>
              <div className='  flex  flex-col gap-10 '>
                <Link href={'/'} className='text-xl font-bold  text-black'>LOGO</Link>
                <nav className=' flex flex-col gap-2 '>
                  {
                    navItems.map((item, index) => (
                      <Link key={index} href={item.url} className=' font-medium text-gray-800 hover:text-gray-500 duration-200 '>{item.name}</Link>
                    ))
                  }
                </nav>
                <button className='btn  '>
                  Make a Reservation
                </button>

              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      }
    </>
  )
}

export default Header