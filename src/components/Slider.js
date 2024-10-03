'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Slider from "react-slick";

const Arrow = () => {
  return (
    <></>
  )
}

export default function AutoPlay({ image, rot }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    pauseOnHover: false,
    rtl: rot,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    ]
  };


  return (
    <div>
      <Slider {...settings}>
        {
          image.map((r) => (
            <div key={r} className="group/item relative" >
              <div className="relative">
                <Image
                  className="px-2 group/edit transition-all duration-300 ease-in-out"
                  src={r.img}
                  alt="img"
                  width={600}
                  height={500}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/item:bg-opacity-60 transition-all duration-300 ease-in-out"></div>
              </div>

              {/* Button that shows on hover */}
              <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover/item:opacity-100 transition-all duration-300 ease-in-out'>
                <Link href={`${r.link}`}>
                  <button className='lg:w-[250px] hover:bg-white hover:text-black focus:bg-blue-500 focus:text-white w-[150px] text-sm md:text-base font-medium md:font-semibold h-[55px] lg:h-[65px] text-[14px] flex uppercase justify-center items-center rounded-[10px] text-white border-white border-[2px];'><span className="mr-4">View Project</span> {'    '} <BsArrowUpRight /></button>
                </Link>
              </div>
            </div>

          ))
        }
      </Slider>
    </div>
  );
};
