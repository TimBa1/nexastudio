'use client'
import Image from 'next/image'
import p3 from '../../assests/brand-strategy/Nexa Brand Strategy Worksheet (1).gif'
import { useState } from 'react'
import avatar from '../../assests/avatar.svg'
import Portfolios from '@components/components/Homepage/Portfolios'

const faq = [
  {
    question: "Consumer Insight and Research",
    answer: "Understanding your audience on a deeper level is crucial to creating a brand that resonates. We delve into consumer behavior and preferences to uncover insights that shape your strategy."
  },
  {
    question: "Brand Segmentation",
    answer: "Not all customers are the same. By segmenting your market, we ensure your brand speaks directly to the distinct needs and desires of each group, maximizing relevance and impact."
  },

  {
    question: "Brand Differentiation and Positioning",
    answer: "Going to market with the same positioning as an existing competitor will quickly make your brand obsolete. We help you find gaps in the market that you can claim and be remembered for."
  },

  {
    question: "Perceptual Map",
    answer: "Your brand's place in the competitive landscape isn't always clear. We create perceptual maps that visually illustrate where your brand stands and where it could go."
  },

  {
    question: "Brand Naming and Tagline",
    answer: "A name and tagline are often the first things your audience encounters. We craft these elements to capture attention, convey your brand's essence, and stick in the minds of your customers."
  },

  {
    question: "Brand Personality/Dimension and Archetype",
    answer: "Brands that connect emotionally leave a lasting impact. We define a personality and archetype for your brand that fosters a strong, relatable identity."
  },

  {
    question: "Brand Image, Mission, Vision, and Core Values",
    answer: "A brand without clear values and direction is easily lost in the noise. We help you define and articulate a compelling brand image, mission, vision, and core values that guide every decision."
  },

  {
    question: "Brand Manifesto",
    answer: "A powerful manifesto can be the rallying cry for both your team and your audience. We help you declare your brand's purpose and vision in a way that inspires and mobilizes."
  },

  {
    question: "Brand House",
    answer: "Complexity can dilute your brand's message. We organize all elements of your brand into a cohesive structure that ensures clarity and consistency across every touch-point."
  },

  {
    question: "Brand Ladder",
    answer: "Moving from features to emotions is key to deeper customer connections. We build a strategic hierarchy that links what your brand offers to how it makes people feel."
  },

  {
    question: "Workshop and Brand Sprints",
    answer: "Speed and agility are crucial in today's market. Our workshops and sprints quickly bring your team together to develop and refine brand strategies that works."
  },

  {
    question: "Ongoing Brand Consultancy",
    answer: "The market never stands still, and neither should your brand. We offer ongoing consultancy to ensure your brand adapts and evolves as your business grows."
  }
]
export default function BrandStrategy() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="w-[95%] lg:w-[90%] mx-auto pt-[130px] lg:pt-[200px] ">
        <div className="flex flex-col justify-center">
          <div data-aos="fade-up" className='header-title leading-[68px] '>
            Brand Strategy
          </div>
        </div>
        <div className='lg:text-[20px] mt-4 lg:mt-[5rem] text-sm'>
          <div className='flex lg:flex-row flex-col-reverse'>
            <div data-aos="fade-up" className='flex flex-col lg:leading-10 leading-7 mt-4 lg:mt-0  lg:w-1/2 w-full '>At Nexa Studio, our process starts with a deep-dive discovery session to understand the true
              essence of your brand—its core values, mission, and unique message. We collaborate
              closely with your leadership team to craft a custom strategy that not only resonates with your</div>
            <div data-aos="fade-up" className='flex lg:w-1/2 gap-1 lg:gap-2 w-full lg:justify-end'>
              <span className='md:flex hidden'>
                <button className='lg:w-[198px] w-[113px] h-[25px] text-[12px] rounded-[5px] text-[#767676] lg:text-[16px] lg:h-[47px] lg:rounded-[5px] border-[1px] border-[#767676]'>
                  Brand Positioning
                </button>
              </span>
              <span className=''>
                <div className='lg:gap-2 gap-1 flex lg:flex-col  lg:mb-0 mb-2'>
                  <button className='lg:w-[198px] w-[140px] h-[25px] text-[12px] rounded-[5px] text-[#767676] lg:text-[16px] lg:h-[47px] lg:rounded-[5px] border-[1px] border-[#767676]'>
                    Market Differentiation
                  </button>
                  <button className='lg:w-[198px]  w-[148px] h-[25px] text-[12px] rounded-[5px] text-[#767676] lg:text-[16px] lg:h-[47px] lg:rounded-[5px] border-[1px] border-[#767676]'>
                    Audience Engagement
                  </button>
                </div>
              </span>
            </div>
          </div>
          <div data-aos="fade-up" className='lg:text-[48px] mt-14 lg:mt-20 mb-[2rem] text-[32px] font-semibold'>
            Our Approach
          </div>
          <div className='flex mt-14 lg:mt-20 lg:flex-row flex-col-reverse'>
            <div className='flex mt-14 lg:mt-0 flex-col lg:w-1/2 w-full'>
              <div data-aos="fade-up" className='lg:leading-10 leading-7 '>We develop critical tools such as brand positioning statements and perceptual maps,
                ensuring they remain confidential to safeguard your brand’s unique strategy</div>
              <div data-aos="fade-up" className='lg:mt-20 mt-14 lg:leading-10 leading-7 '>Once the strategy is solidified, we equip your team to integrate it seamlessly across all
                facets of the business. This ensures that every employee—whether in leadership or support
                roles—consistently reflects the intended brand image, whether that’s fostering a culture of
                innovation, friendliness, or professionalism.</div>
            </div>
            <div data-aos="fade-up" className='flex lg:w-1/2 w-full items-center lg:justify-end'><Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727565720/Union_jlqvcl.jpg' 
              width={1920} // original width of the image
              height={1080} // original height of the image
              alt=''
              className='w-full h-auto'
            /></div>
          </div>
          <div className='flex mt-20 lg:flex-row flex-col'>
            <div data-aos="fade-up" className='flex lg:w-1/2 w-full items-center justify-start'><Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727565721/Union_1_gjlmxa.jpg' 
              width={1920} // original width of the image
              height={1080} // original height of the image
              alt=''
              className='w-full h-auto'
            /></div>
            <div data-aos="fade-up" className='flex flex-col lg:w-1/2 w-full'>
              <div className='mb-16 mt-14 lg:mt-0 lg:leading-10 leading-7 '>
                To keep your brand strategy on course, we conduct quarterly evaluations and provide
                additional workshops as needed. We also offer annual training sessions to reinforce the
                strategy, helping to embed it into your company&apos;s culture over the long term—typically
                spanning 5 to 10 years. Our mission is to help shape and sustain a brand perception that
                aligns perfectly with your long-term vision              </div>
              {/* <button className='btn-outline'>READ ABOUT US <FiArrowRight /></button> */}
            </div>

          </div>

        </div>
      </div>

      <div className='flex flex-col lg:w-[90%] w-[95%] lg:mt-[6rem]  mx-auto '>
        <Image src={p3} alt='icon' />
      </div>
      <div className='flex flex-col lg:w-[90%] w-[95%] mt-[3rem] lg:mt-[6rem] mx-auto ' >
        <div data-aos="fade-up" className='lg:text-[48px]  mb-[2rem] text-[32px] font-semibold'>
          Brand Strategy Services
        </div>
        <div data-aos="fade-up" className="w-full  max-w-full space-y-8">
          {faq.map((item, index) => (
            <div data-aos="fade-up" key={index} className="w-[95%] md:w-[80%] mx-auto">
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
        <div data-aos="fade-up" className='lg:text-[48px] mt-14 lg:mt-20 mb-[2rem] text-[32px] font-semibold'>
          Client Review
        </div>
        <div className='w-full flex mt-[3rem] no-scrollbar  overflow-x-auto'>
          {
            [1, 2, 3, 4, 5].map((e) => (
              <div key={e} className='lg:min-w-[470px] mr-[2rem] glass-bg min-w-[298px] bg-gradient-to-t from-[rgba(78,78,78,0.5)] to-[rgba(30,30,30,0.5)] rounded-[20px] px-[15px] py-[25px] lg:px-[25px] lg:py-[30px]'>
                <p className='box-text'>“If you ever need a service (remote or not), that can project the details of your mind and communicate your values, Nexa Hub is where you find one. I engaged them to get a design for an affiliate marketing online training I organised. And I wasn&apos;t disappointed.”</p>
                <div className='flex gap-6 mt-8'>
                  <Image src={avatar} className='w-[70px] lg:w-[100px]' alt='img' />
                  <div className=''>
                    <div className='lg:[24px] lg:text-[32px] text-[20px] mt-3 font-medium'>
                      Victor Momodu
                    </div>
                    <p className=' text-[13px]'>Founder Gad Legal Consult</p>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>

      <div data-aos="fade-up" className='w-[95%] mt-[5rem] mx-auto lg:w-[90%]'>
        <div className='lg:text-[60px] font-[vertigo] text-[32px] mb-[1rem]'>Portfolio</div>
        <Portfolios wrap arrow first={0} last={2} />
      </div>
    </>
  )
}