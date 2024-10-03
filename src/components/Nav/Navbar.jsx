"use client";

import React from "react";
import logo from "../../assests/icons/Asset 2.svg"
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { GoArrowRight } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";



function Navbar({ openSideDrawer, open }) {
  const location = usePathname();

  return (
    <>
      <div className=" w-[100%] mx-auto z-50 fixed bg-[#141414] top-0 flex flex-col ">
        <div className="flex w-full lg:pl-0 pl-4 lg:w-[90%] lg:mx-auto lg:py-[10px] py-[15px] items-center justify-between">
          <Link href="/">
            <Image src={logo} className={`${location === '/' ? "text-white" : 'text-[#767676]'} h-[40px] md:w-[120px] w-[80px] cursor-pointer`} alt="logo" />
          </Link>
          <div className="flex gap-12 items-center">
            <div className={`${location === '/about' ? "text-white" : 'text-[#767676] hover:text-white'} text-[16px] font-medium lg:flex hidden`}> <Link href='/about'>About</Link></div>
            <div className={`${location === '/portfolio' ? "text-white" : 'text-[#767676] hover:text-white'} text-[16px] font-medium lg:flex hidden`}> <Link href='/portfolio'>Portfolio</Link> </div>
            <div className={`${location === '/contact-us' ? "text-white" : 'text-[#767676] hover:text-white'} text-[16px] font-medium lg:flex hidden`}> <Link href='/contact-us'>Contact Us</Link> </div>
            <div className={`${location === '/blog' ? "text-white" : 'text-[#767676] hover:text-white'} text-[16px] font-medium lg:flex hidden`}><Link href='/blog'>Blog</Link> </div>
            <div className='lg:flex hidden'>
              <Link href='/contact-us'>
                <button className='btn-outline'>
                  Start your Project <GoArrowRight size={25} />
                </button>
              </Link>
            </div>
            <div className="lg:hidden text-white mr-4" onClick={openSideDrawer}>
              {
                open ? <IoCloseSharp size={25} /> : <RxHamburgerMenu size={25} />
              }
            </div>
          </div>
        </div>
        <div className="bg-gradient">
        </div>
      </div>

    </>
  );
}

export default Navbar;
