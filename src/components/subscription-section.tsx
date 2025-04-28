import React from 'react'

const SubscriptionSection = () => {
  return (
    <div className='container py-12 md:py-24 flex   flex-wrap   gap-5 items-center'>
               <div className=' w-8/12 lg:w-6/12 space-y-2'>
                       <h3 className='section-title'>Keep up to date with us</h3>
                       <p className='section-tag'>Sign up to be the first to receive special news and event updates from us. </p>
               </div>
               <input type="text" name="" id="" placeholder='Your email address' className='outline px-4 py-2.5 border border-green-800 rounded-xl flex-1' />
               <button className='btn'>Sign up</button>
    </div>
  )
}

export default SubscriptionSection