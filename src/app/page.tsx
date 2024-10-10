import React from 'react';
import Image from "next/image";
import Header from "../components/Homepage/Header";
import Project from "../components/Homepage/Project";
import ChooseUs from "../components/Homepage/ChooseUs";
import Testimonial from "../components/Homepage/Testimonial";
import Head from "next/head";
import AutoPlay from "../components/Slider";


const image1 = [
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727524647/Frame_2981_p4mf7q.png', link: '/bloom' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727550120/Frame_2606_1_tbfeyd.jpg', link: '/pure-journey' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727439191/Frame_2954_kng2ge.jpg', link: '/skylux' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727550116/Frame_2596_3_gqx0je.jpg', link: '/pure-journey' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727520088/Frame_2709_1_bqdega.jpg', link: '/bloom' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727520085/Frame_2705_zaxbac.jpg', link: '/bloom' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727441391/Frame_2596_2_w4gkum.jpg', link: '/skylux' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727440251/Frame_2607_lloznd.jpg', link: '/skylux' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727520086/Frame_2596_3_i6rfvr.jpg', link: '/bloom' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727550112/Frame_2615_2_waxixi.jpg', link: '/pure-journey' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727439192/Frame_2606_ct9tqu.jpg', link: '/skylux' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727520087/Frame_2596_4_yqu416.jpg', link: '/bloom' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727550115/Frame_2606_2_m6pybf.jpg', link: '/pure-journey' },
];
const image2 = [
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727439191/Frame_2954_kng2ge.jpg', link: '/skylux' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727520088/Frame_2708_2_sz9ymd.jpg', link: '/bloom' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727550117/Frame_2597_1_okvghy.jpg', link: '/pure-journey' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727520085/Frame_2709_oy0y6v.jpg', link: '/bloom' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727439192/Frame_2609_2_p2alq8.jpg', link: '/skylux' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727439192/Frame_2596_lxa1da.jpg', link: '/skylux' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727550115/Frame_2596_4_nkskom.jpg', link: '/pure-journey' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727439192/Frame_2596_1_zmz6db.jpg', link: '/skylux' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727550114/Frame_2608_4_vwdqtu.jpg', link: '/pure-journey' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727520085/Frame_2708_rcjy22.jpg', link: '/bloom' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727550114/Frame_2609_4_sctend.jpg', link: '/pure-journey' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727440250/Frame_2608_sf3r8z.jpg', link: '/skylux' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727520086/Frame_2708_1_hzilgb.jpg', link: '/bloom' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727439195/Frame_2609_3_ne9eah.jpg', link: '/skylux' },
  { img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1727550114/Frame_2598_tfkfwb.jpg', link: '/pure-journey' },

];

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
