import React from 'react'
import logo from '../assets/images/logo.png'

export const Sign_in = () => {
  return (
    <section className='backdrop-blur-3xl flex justify-center py-20 relative before:absolute before:right-96 before:top-16 before:bg-primary/80 before:rounded-full before:size-40 md:before:size-48 lg:before:size-56 before:-z-[1] before:blur-[105px]'>
      <div className="container flex justify-center items-center z-[10]">
        <div className='place-self-center'>
          <img src={logo} alt="Hastakala Logo" width={158} height={38} loading='lazy' className='place-self-center mb-12 -z-[2]'/>
          <div className='relative bg-slate-300 max-sm:w-[300px] w-[400px] px-9 py-12 border-2 border-white rounded-xl'>
            <div >
              <label htmlFor="Email" className='font-inter text-base'>Email</label><br />
              <input className='w-full border border-black rounded-3xl py-2 px-5 mt-4' type="email" id="Email" />
            </div>
            <div className='mt-6'>
              <label htmlFor="password" className='font-inter text-base'>Password</label><br />
              <input className='w-full border border-black rounded-3xl py-2 px-5 mt-4' type="password" id="password" />
            </div>
            <div className='mt-14 place-self-center text-center'>
              <a href="#" className='bg-primary px-5 py-3 w-64 mb-4 block text-center text-white rounded-3xl'>Sign In</a>
              <span>Don't have account access? <a href="#" className='text-primary'>Sign Up</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sign_in
