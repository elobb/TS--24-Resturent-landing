import Image from 'next/image'
import React from 'react'

const BannerSection2 = () => {
  return (
    <div className='bg-[#D8E5D6]  p-5 md:p-6 lg:p-8  lg:p-12 rounded-2xl container flex flex-col md:flex-row items-center gap-6 justify-between'>
          <div className='space-y-3  w-full  lg:w-4/12'>
            <p className='section-tag'>Our Values</p>
            <h3 className='section-title'>Delicious food with meaning</h3>
            <p className='section-tag'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, provident! Maxime nam nihil rerum corporis, dicta nulla non doloremque minus?</p>
          </div>
          <div className='   h-[350px]  md:h-[400px]  lg:h-[500px] rounded-xl bg-white w-full lg:w-7/12'>
             <Image  src={'/Images/berries-1869421_1280.jpg'} width={700} height={700} alt='banner' className='w-full h-full object-cover rounded-xl'/>
          </div>
    </div>
  )
}

export default BannerSection2