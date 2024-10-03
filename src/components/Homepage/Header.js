'use client'
import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'


function Header() {
  return (
    <>
      <div className=' flex flex-col w-[90%] mx-auto  pt-[40px] justify-center h-[60vh] lg:h-[100vh]'>
        <h1 data-aos="fade-up" className='font-[700] mt-[80px] lg:mb-0 mb-[1rem] leading-[76px] lg:leading lg:mt-0 tracking-tight lg:tracking-[-0.5rem] header-title'>
          El <span className='ml-[-1.1rem] mr-[-0.2rem]   lg:ml-[-2rem] lg:mr-[-0.5rem]'>e</span>vate<br /> <span className='mr-[-1.7rem]  lg:mr-[-3.4rem]'>Y</span> our Brand
        </h1>
        <Link href='/portfolio'>
          <button data-aos="fade-up" className='btn-outline'>
            View All Projects
            <span className='ml-2 font-extrabold'><FiArrowUpRight /></span>
          </button>
        </Link>
      </div>
    </>
  )
}

export default Header