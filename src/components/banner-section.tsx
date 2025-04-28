import React from 'react'

const BannerSection = () => {
  return (
    <section className='container'>
            <div className='  h-fit md:h-[80vh] w-full rounded-3xl bg-[url(/Images/bowl.jpg)] bg-cover  '>
                        <div className=" p-4  md:p-6  lg:p-10 space-y-4">
                                <span className='text-gray-200 text-sm md:text-lg font-semibold inline-block'>Our Restaurant</span>
                                <h2 className='  text-2xl md:text-4xl lg:text-6xl font-bold  max-w-xl text-white'>A culinary adventure for all the senses</h2>
                                <button className='btn-2'>Learn More</button>
                        </div>
            </div>
    </section>  )
}

export default BannerSection