'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../assests/Frame 335.svg'
import icon1 from '../../assests/Frame 365.svg'
import icon2 from '../../assests/Frame 363.svg'
import icon3 from '../../assests/Frame 364.svg'
import icon4 from '../../assests/Frame 367.svg'
import icon5 from '../../assests/Frame 368.svg'
import icon6 from '../../assests/Frame 366.svg'
import img1 from '../../assests/Frame 2316.png'
import img2 from '../../assests/Frame 2317.png'
import img3 from '../../assests/Frame 2318.png'
import img4 from '../../assests/Frame 2319.png'
import img5 from '../../assests/Frame 2320.png'
import img6 from '../../assests/Ellipse 39.png'
import Accordion from '@components/components/Accordion'
import p5 from '../../assests/Frame 2021.png'
import rt1 from '../../assests/material-symbols_branding-watermark.svg'
import rt2 from '../../assests/material-symbols_motion-mode.svg'
import rt3 from '../../assests/ant-design_product-filled.svg'
import rt4 from '../../assests/icons/ph_plant-fill.svg'



const names = [
  {
    img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1728497424/Frame_3382_nwvtzm.jpg',
    name: "James Raphael",
    role: "Brand Consultant and Strategist"
  },
  {
    img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1728497421/Frame_3383_uxqgpy.jpg',
    name: "Ayomide Adegboyega",
    role: "Creative Director/Designer"
  },
  {
    img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1728497422/Frame_3384_ip2pst.png',
    name: "Jerome Oparah",
    role: "Lead Product Designer"
  },
  {
    img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1728497423/Frame_3385_wikzhj.jpg',
    name: "Timilehin Bakare",
    role: "Developer"
  },
  {
    img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1728497423/Frame_3386_au8grn.jpg',
    name: "T0di Bakare",
    role: "Content Writer"
  },
  {
    img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1728497423/Frame_3387_rvugy9.jpg',
    name: "Timilehin Bakare",
    role: "Developer"
  },
  {
    img: 'https://res.cloudinary.com/djaurbhw8/image/upload/v1728497424/Frame_3388_g4hccd.jpg',
    name: "Timilehin Bakare",
    role: "Developer"
  },
]

const values = [
  {
    img: icon2,
    title: "Creativity and Innovation",
    text: "We value the power of creative thinking and continuous innovation. We strive to push boundaries, explore new ideas, and challenge conventions to deliver fresh and inspiring design solutions.",
  },
  {
    img: icon3,
    title: "Client Centric and Approach",
    text: "Our clients are at the heart of everything we do. We prioritize understanding their needs, goals, and aspirations, ensuring that every design we create aligns perfectly with their vision and objectives.",
  },
  {
    img: icon6,
    title: "Quality and Excellence",
    text: "We are committed to delivering the highest quality of work. Attention to detail, precision, and a relentless pursuit of excellence define our approach to design, ensuring that every project we undertake meets the highest standards.",
  },
  {
    img: icon1,
    title: "Adaptability and Growth",
    text: "In an ever-evolving design landscape, we value adaptability and the willingness to embrace change. We continuously learn and grow, staying at the forefront of design trends and technologies to better serve our clients.",
  },
  {
    img: icon4,
    title: "Ethics and Sustainable Practice",
    text: "We are dedicated to conducting our design work ethically and responsibly. We embrace sustainable design principles, striving to minimize our environmental impact and promote social responsibility within the industry.",
  },
  {
    img: icon5,
    title: "Collaboration and Teamwork",
    text: "We believe in the power of collaboration. Our diverse team of designers, artists, and strategists work together seamlessly, leveraging their collective expertise to produce exceptional results.",
  },
]

const faq = [{
  question: 'What services do you offer?',
  answer: "We offer a wide range of design services including graphic design, web design, branding, UX/UI design, and more."
}, {
  question: "How do your design service cost?",
  answer: "Our pricing varies depending on the scope and complexity of the project. Contact us for a detailed quote."
},
{
  question: "What is your design process?",
  answer: "Our process includes initial consultation, research, conceptualization, design development, revisions, and final delivery."
},

{
  question: "How long will my project take?",
  answer: "The timeline depends on the specific needs and complexity of your project. We will provide an estimated timeline during our initial consultation."
},

{
  question: "Do you offer revisions?",
  answer: "Yes, we include a certain number of revisions in our packages to ensure your satisfaction with the final design."
},

{
  question: "How do you handle project communication?",
  answer: "We keep you informed throughout the project via regular updates, meetings, and email correspondence to ensure we meet your expectations."
},

]

function About() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="flex flex-col w-[95%] lg:w-[90%] mx-auto pt-[130px] justify-center lg:h-[100vh]">
        <div data-aos="fade-up" className='header-title leading-[76px] lg:leading tracking-tight lg:tracking-[-0.5rem] mb-8 lg:mb-0 lg:w-[80%]'>
          Imagination With a Plan
        </div>
      </div>
      <div>

      </div>
      <div className="flex flex-col overflow-hidden w-[95%] lg:w-[95%] mx-auto lg:mx-0 lg:ml-auto lg:pt-[100px]">
        <div className='flex lg:flex-row flex-col  justify-between'>
          <div className='w-[100%] lg:w-[90%] overflow-hidden'>
            <div data-aos="fade-up" className='lg:text-[40px] mb-[1.2rem] text-[24px]'>
              Nexa Studio is the nexus between creative innovation and strategic direction, offering a seamless blend of design expertise and brand strategy
            </div>
            <div data-aos="fade-up" className='lg:text-[20px] mt-10 text-[14px] mb-[1.2rem] font-medium'>
              Founded to address a crucial gap in the branding industry, we go beyond aesthetics, crafting
              brands that not only look exceptional but also thrive in competitive markets.

            </div>
            <div data-aos="fade-up" className='lg:text-[20px]  text-[14px] lg:leading-[40px] leading-[28px]'>
              Our approach ensures that every design choice is backed by a solid strategy, driving both visual appeal
              and business success.
            </div>
            <div data-aos="fade-up" className='lg:text-[20px] mt-10 text-[14px] lg:leading-[40px] leading-[28px]'>
              As a full-service creative agency, we deliver cohesive brand experiences across all
              touch points—whether it&apos;s a website, social media, or marketing collateral. We focus on
              aligning visual identity with brand objectives to enhance communication, deepen
              engagement, and amplify brand presence.

            </div>
            <div data-aos="fade-up" className='lg:text-[20px] mt-10 text-[14px] lg:leading-[40px] leading-[28px]'>
              Since our inception, we&apos;ve achieved significant milestones, partnering with distinguished
              clients both locally and internationally to create impactful branding solutions
            </div>
          </div>

          <div data-aos="fade-up" className='w-[100%] overflow-hidden  lg:mr-[-10rem] flex justify-center lg:mt-0 mt-[5rem] lg:w-[40%]'>
            <Image src={img} alt='logo' />
          </div>
        </div>
      </div>
      <div className='w-[95%] lg:w-[90%] mx-auto'>
        <div data-aos="fade-up" className=''>

          <div data-aos="fade-up" className='lg:text-[48px] mt-[4rem] text-[32px] font-semibold'>
            Our Services
          </div>
          <div className='lg:mt-[2rem] lg:hidden flex'>
            <Accordion />
          </div>
          <div data-aos="fade-up" className='lg:flex hidden mt-12  gap-5'>
            <div className='w-[300px] group/item h-[450px] flex flex-col justify-end py-4 px-[15px] bg-white hover:bg-[#0E45E6] text-black rounded-[10px]'>
            <div className='absolute top-3 left-3'><Image src={rt4} alt={'me'} /></div>
              <div className='text-[30px] group/edit group-hover/item:pb-3 group-hover/item:border-b-white group-hover/item:border-b-[1px] transition-all duration-300 ease-in-out'>
                <p className='text-[12px] font-medium underline group-hover/item:text-white'>01</p>
                <p className='w-[50%] group-hover/item:text-white'>
                  Brand Strategy
                </p>
              </div>
              <div className='group/edit group-hover/item:text-white overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out group-hover/item:max-h-96 group-hover/item:opacity-100 mt-4'>
                Transform your brand with our strategic expertise, delving into your essence, voice, and values. Beyond visuals, we craft a compelling identity for lasting impact.
              </div>
            </div>
            <div className='w-[300px] group/item h-[450px] relative flex flex-col justify-end py-4 px-[15px] bg-white hover:bg-[#0E45E6] text-black rounded-[10px]'>
              {/* Positioned at the top */}
              <div className='absolute top-3 left-3'><Image src={rt1} alt={'me'} /></div>

              <div className='text-[30px] group/edit group-hover/item:pb-3 group-hover/item:border-b-white group-hover/item:border-b-[1px]'>
                <p className='text-[12px] font-medium underline group-hover/item:text-white'>02</p>
                <p className='w-[50%] group-hover/item:text-white'>Brand Identity</p>
              </div>

              {/* Hidden content that appears on hover */}
              <div className='group/edit overflow-hidden group-hover/item:text-white max-h-0 opacity-0 transition-all duration-300 ease-in-out group-hover/item:max-h-96 group-hover/item:opacity-100 mt-4'>
                Define your visual narrative with us. Our expertise in visual identity goes beyond design, creating a distinctive brand language that captivates and resonates.
              </div>
            </div>
            <div className='w-[300px] group/item relative h-[450px] flex flex-col justify-end py-4 px-[15px] bg-white hover:bg-[#0E45E6] text-black  rounded-[10px]'>
              <div className='absolute top-3 left-3'><Image src={rt3} alt={'me'} /></div>
              <div className='text-[30px] group/edit group-hover/item:pb-3  group-hover/item:border-b-white group-hover/item:border-b-[1px]'>
                <p className='text-[12px]  font-medium underline group-hover/item:text-white'>03</p>
                <p className='w-[50%] group-hover/item:text-white'>
                  Product Design
                </p>
              </div>
              <div className='group/edit overflow-hidden group-hover/item:text-white max-h-0 opacity-0 transition-all duration-300 ease-in-out group-hover/item:max-h-96 group-hover/item:opacity-100 mt-4'>
                Craft seamless user journeys with our UX expertise. We blend research and design to ensure your audience enjoys intuitive, delightful interactions.</div>
            </div>
            <div className='w-[300px] relative group/item  h-[450px] flex flex-col justify-end py-4 px-[15px] bg-white hover:bg-[#0E45E6] text-black  rounded-[10px]'>
              <div className='absolute top-3 left-3'><Image src={rt2} alt={'me'} /></div>
              <div className='text-[30px] group/edit group-hover/item:pb-3  group-hover/item:border-b-white group-hover/item:border-b-[1px]'>
                <p className='text-[12px]  font-medium underline group-hover/item:text-white'>04</p>
                <p className='w-[50%] group-hover/item:text-white'>
                  Motion Design
                </p>
              </div>
              <div className='group/edit overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out group-hover/item:max-h-96 group-hover/item:text-white group-hover/item:opacity-100 mt-4'>
                Bring your brand to life with dynamic motion design. Our expertise adds a captivating dimension to your visual storytelling.</div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[95%] lg:w-[90%] mx-auto'>
        <div className='lg:mt-[200px]  mt-[100px] mb-[5rem]'>
          <div className='w-[100%]'>
            <div data-aos="fade-up" className='lg:text-[48px] mb-[1.2rem] text-[32px] font-semibold'>
              Mission Statement
            </div>
            <div data-aos="fade-up" className='lg:text-[23px] text-[20px] mb-[1.2rem] lg:leading-[40px] leading-[42px] font-medium'>
              Empowering Growth Through Design and Connection – Guiding Startups and Scaling Businesses to Craft Impactful Identities and Strategies.
            </div>
            <div data-aos="fade-up" className='lg:text-[16px] text-[14px] lg:leading-[30px] leading-[28px]'>
              Our mission at Nexa Hub is to be a driving force behind the success of startups and businesses poised for growth. We specialize in designing remarkable brand identities and creating strategies that propel them toward their objectives. Our commitment extends beyond design; we foster a vibrant community that shares the same goal. Together, we empower visionary innovators and business minds to forge a path of achievement, turning ideas into reality, and driving meaningful change.
            </div>
          </div>
        </div>
        <Image src={p5} alt='icon' />
        <div className='mt-[5rem]'>
          <div className='w-[100%]'>
            <div data-aos="fade-up" className='lg:text-[48px] mb-[1.2rem] text-[32px] font-semibold'>
              Vission Statement
            </div>
            <div data-aos="fade-up" className='lg:text-[23px] text-[20px] mb-[1.2rem] lg:leading-[40px] leading-[42px] font-medium'>
              Inspiring Transformative Growth – Where Businesses Flourish, Communities Blossom, and Innovation Prevails.
            </div>
            <div data-aos="fade-up" className='lg:text-[16px] text-[14px] lg:leading-[30px] leading-[28px]'>

              Nexa Hub envisions a future where transformational growth is the norm. We see a world where businesses not only succeed but truly flourish, creating ripples of positive impact. Our vision extends to vibrant communities that come to life, nurturing connections and collaboration. At the heart of it all, innovation prevails, driving advancements that shape industries and inspire progress. In this landscape, Nexa Hub stands as a catalyst for change, igniting a cycle of growth, empowerment, and boundless possibilities.            </div>
          </div>
        </div>
        <div className='mt-[100px]'>
          <div data-aos="fade-up" className='lg:text-[48px]  mb-[1.2rem] text-[32px] font-semibold'>
            Meet the team
          </div>
          <div className='flex flex-wrap mt-[100px] lg:gap-x-[1rem] gap-y-[3rem] justify-center'>
            {
              names.map((er) => (
                <div key={er} data-aos="fade-up" className='lg:min-w-[320px]  rounded-[10px] w-[170px] flex flex-col  items-center '>
                  <div className='  mb-[1rem] rounded-[10px]  '>
                    <Image src={er.img} alt={'icon'} width={350} height={350} className='rounded-[20px] ' />
                  </div>
                  <p className='text-normal text-center'>{er.name}</p>
                  <p className='text-[14px] lg:w-full w-[150px] text-center'>{er.role}</p>
                  {/* <div className=' flex mt-2 gap-3 text-[
#CFCFCF]'>
                    <BsLinkedin size={30}/> <ImBehance2 size={30} />
                  </div> */}
                </div>
              ))
            }

          </div>
        </div>
      </div >
      <div className='md:flex hidden flex-col w-[95%] mt-[6rem] lg:w-[90%] mx-auto ' >
        <div data-aos="fade-up" className='lg:text-[48px]  mb-[2rem] text-[32px] font-semibold'>
          Our Values
        </div>
        <div className='flex justify-center flex-wrap gap-6'>
          {
            values.map((er) => (
              <div data-aos="fade-up" key={er} className='px-[20px] glass-bg py-[30px] lg:pt-[60px] lg:pb-[40px] rounded-[20px] lg:w-[31.5%] w-full'>
                <Image src={er.img} alt={'icon'} className='mb-[40px] w-[60px]' />
                <p className='lg:text-[34px] mb-[20px] text-[22px] font-medium'>{er.title}</p>
                <p className='text-[14px] lg:text-[16px] leading-10'>{er.text}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className='flex md:hidden flex-col w-[95%] mt-[6rem] lg:w-[80%] mx-auto ' >
        <div data-aos="fade-up" className='lg:text-[48px]  mb-[2rem] text-[32px] font-semibold'>
          Our Values
        </div>
        <div className='flex justify-center flex-wrap gap-6'>
          {
            values.map((er) => (
              <div data-aos="fade-up" key={er} className='px-[20px] py-[30px] lg:pt-[60px]  lg:pb-[40px] rounded-[20px] lg:w-[320px] w-full'>
                <Image src={er.img} alt={'icon'} className='mb-[40px] w-[60px]' />
                <p className='lg:text-[22px] mb-[20px] text-[22px] font-medium'>{er.title}</p>
                <p className='text-[14px]'>{er.text}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className='flex flex-col w-[95%] mt-[6rem] lg:w-[90%] mx-auto ' >
        <div data-aos="fade-up" className='lg:text-[48px]  mb-[2rem] text-[32px] font-semibold'>
          Frequently Asked Questions
        </div>

        <div data-aos="fade-up" className="w-full  max-w-full space-y-8">
          {faq.map((item, index) => (
            <div data-aos="fade-up" key={index} className="">
              <button
                data-aos="fade-up"
                className="w-full flex justify-between border-b border-gray-700 items-center py-4 text-left text-white focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className='lg:text-[24px] text-[18px] font-medium'>{item.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform text-blue-600 transform ${activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
              >
                <p className="pt-4 ">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About