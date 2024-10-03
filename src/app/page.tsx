import React from 'react';
import Image from "next/image";
import Header from "../components/Homepage/Header";
import Project from "../components/Homepage/Project";
import ChooseUs from "../components/Homepage/ChooseUs";
import Testimonial from "../components/Homepage/Testimonial";
import c3 from "../assests/c3.svg";
import c4 from "../assests/c4.svg";
import Head from "next/head";
import AutoPlay from "../components/Slider";

import s1 from "../assests/icons/s1.png";
import s2 from "../assests/icons/s2.png";
import s3 from "../assests/icons/s3.png";
import s4 from "../assests/icons/s4.png";
import s5 from "../assests/icons/s5.png";

import s6 from "../assests/icons/s6.png";
import s7 from "../assests/icons/s7.png";
import s8 from "../assests/icons/s8.png";
import s9 from "../assests/icons/s9.png";

const image1 = [{ img: s1, link: '/bloom' }, { img: s2, link: '/pure-journey' }, { img: s3, link: '/skylux' }, { img: s4, link: '/bloom' }, { img: s5, link: '/bloom' },];
const image2 = [{ img: s6, link: '/pure-journey' }, { img: s7, link: '/skylux' }, { img: s8, link: '/skylux' }, { img: s9, link: '/bloom' }, { img: s1, link: '/bloom' }];

export default function Home() {
  return (
    <>
      <main>
        <div className="">
          <Header />
          <Project />
          {/* <div data-aos="fade-up" className="glass-bg mt-[-4rem] lg:mt-[-6rem]">
            <div className="flex lg:flex-row lg:items-end lg:justify-between flex-col w-[90%] lg:w-[85%] mx-auto py-[40px] lg:py-[100px]">
              <div className="lg:text-[54px] text-[28px] font-semibold w-full lg:w-[80%]">
                Discover Your Brand&apos;s Potential with a Free Consultation!
              </div>
              <div className=" mt-10">
                <div className="btn-outline-sm">Start Here</div>
              </div>
            </div>
          </div> */}
          {/* <ChooseUs /> */}
        </div>
        <div className=" mt-[6rem] mb-[4rem]">
          <AutoPlay image={image1} rot={false} />
          <div className="mt-[14px]">
            <AutoPlay image={image2} rot={true} />
          </div>

        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col lg:w-[90%] w-[95%] mx-auto lg:pt-[100px]"
        >
          <Testimonial />
        </div>
      </main>
    </>
  );
}
