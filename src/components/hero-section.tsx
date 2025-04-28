"use client"
import React from 'react'
import {  motion } from "motion/react";

const HeroSection = () => {
    return (
        <section className='container'>
            <div className='  h-[60vh] md:h-[80vh] w-full rounded-3xl bg-[url(/Images/dessert.jpg)] bg-cover flex  items-end justify-start'>
                <div className=" p-4  md:p-6 lg:p-10 space-y-4">
                    <motion.span
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: .3 }}
                        viewport={{ once: true, amount: .5 }}
                        className='text-gray-200 text-sm md:text-lg font-semibold inline-block'>Highlights</motion.span>
                    <motion.h2
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: .3, delay: .5 }}
                        viewport={{ once: true, amount: .5 }}
                        className='  text-2xl md:text-4xl lg:text-6xl font-bold  max-w-xl text-white'>Where every ingredient tells a story</motion.h2>
                    <motion.button
                        initial={{ scale:.3, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: .3, delay: .7 }}
                        viewport={{ once: true, amount: .5 }}
                        className='btn-2'>View Our Menus</motion.button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection