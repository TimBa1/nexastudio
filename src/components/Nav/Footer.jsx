import Image from "next/image";
import React from "react";
import logo from '../../assests/icons/Asset 2.svg'
import Link from "next/link";
import { RiBehanceFill, RiLinkedinFill  } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";


function Footer() {
  return (
    <div className=" mt-[8rem]   bg-[rgba(30,30,30,1)] font-sans text-white">
      <div className="lg:w-[90%] pt-[5rem] px-4 lg:px-0 w-full mx-auto">
        <div className="flex mb-[4rem] lg:flex-row flex-col lg:justify-between">
          <div className="flex flex-col items center mb-8 lg:mb-0">
            <Image src={logo} className="h-[45px] md:w-[120px] w-[80px] lg:ml-[-1rem] mb-[10px]" alt='logo' />
            <div className="flex gap-9">
              <span className="box-text"><Link href='/about'></Link>About</span>
              <span className="box-text"><Link href='/portfolio'></Link>Portfolio</span>
              <span className="box-text"><Link href='/blog'></Link>Blog</span>
              <span className="box-text"><Link href='/contact-us'></Link>Contact Us</span>
            </div>
          </div>
          <div >
            <p className="text-[14px] lg:text-[20px] mb-4 ">Subscribe to our Newsletter</p>
            <div className="flex lg:flex-row flex-col items-center">
              <input className="lg:w-[586px] w-[100%] h-[60px] px-[10px] lg:mr-[10px] border-white border-[0.5px] lg:border-[1px]  bg-[rgba(255, 255, 255, 0.07)] rounded-[5px]" placeholder='Enter your Email' />
              <button className='lg:w-[150px] w-[100%] cursor-pointer mt-3 lg:mt-0 hover:bg-white hover:text-black focus:bg-blue-500 focus:text-white h-[60px] text-[16px] font-semibold flex uppercase justify-center items-center border-[1px] lg:border-[2px] border-white rounded-[10px] ' tabIndex={0}>Subscribe</button>
            </div>
          </div>
        </div></div>
      <div className="h-[.1px] mt-10 lg:mt-0 bg-white"></div>
      <div className="lg:w-[90%] mx-auto px-4 lg:px-0">
        <div className="lg:flex lg:flex-row-reverse flex-col mt-3 lg:justify-between ">
          <div className="lg:gap-5 gap-3 items-center pt-2 pb-2 lg:py-0 lg:justify-end flex">
            <a href='https://www.linkedin.com/company/nexa-hub' target="_blank">
              <RiLinkedinFill size={25} /></a>
            <a href='https://www.behance.net/nexahubnet' target="_blank" className="mt-1">
            <RiBehanceFill size={25} /></a>
            <a href='https://www.linkedin.com/company/nexa-hub' target="">
            <IoLogoInstagram size={25} /></a>
          </div>
          <div className="flex lg:my-6 my-2 lg:pr-4 px-0  items-center">
            <span className="font-sans w-full lg:text-left text-[10px] lg:text-sm">2023 Nexa Hub, Inc. All rights reserved.</span>
          </div>

        </div>
      </div>


    </div>
  );
}

export default Footer;
