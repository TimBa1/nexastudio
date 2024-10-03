import React from 'react'
import p1 from '../../assests/Rectangle 393.png'
import p2 from '../../assests/Rectangle 394.png'
import p3 from '../../assests/Rectangle 395.png'
import Image from 'next/image'
import Portfolios from '@components/components/Homepage/Portfolios'
import Link from 'next/link'
function Blog() {
    return (
        <div className="flex flex-col w-[95%] lg:w-[90%] mx-auto pt-[100px] lg:pt-[250px]">
            <div className='flex lg:justify-between flex-col lg:flex-row pb-[50px] lg:pb-[100px] border-b-[1px] border-b-[#2F2F2F] relative'>
                {/* Image Section */}
                <div className='lg:w-[45%] mb-16 lg:mb-0'>
                    <Image
                        src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727565721/Rectangle_393_uytoxd.jpg'
                        width={500} // Original width
                        height={600} // Original height
                        alt=''
                        className='w-full rounded-[20px] h-auto'
                    />
                </div>

                {/* Text Section */}
                <div className='lg:w-[48%] relative pt-[1rem] flex flex-col justify-center'>
                    {/* Large "01" Number (Positioned Behind) */}
                    <div className='text-[#ffffff] opacity-20 text-[120px] lg:text-[160px] font-bold absolute left-0 top-[-4rem] lg:top-0 z-0'>
                        01
                    </div>

                    {/* Text Content (On Top of "01") */}
                    <div className='relative z-10 lg:pl-[2.2rem]'>
                        <div className='lg:text-[40px] font-[vertigo] lg:leading-[60px] leading-7 text-[25px] font-semibold mb-8'>
                            Top Tips for Selecting the Right Brand Agency for Your Business Growth
                        </div>

                        <div className='lg:text-[20px] lg:leading-[40px] text-[15px] mb-8 lg:mb-16'>
                            No matter what stage your business is in—whether you’re a startup entering the market or an established company looking to scale...
                        </div>

                        {/* Button */}
                        <Link href='/blog1'>
                            <button className='lg:w-[142px] lg:mb-0 mb-8 focus:bg-blue-500 focus:text-white hover:bg-white hover:text-black w-[220px] h-[65px] text-[14px] font-semibold flex uppercase justify-center items-center rounded-[15px] text-white border-white border-[1px]'>
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>



            <div className='flex lg:justify-between mt-[50px] lg:mt-[100px] flex-col lg:flex-row pb-[50px] lg:pb-[100px] border-b-[1px] border-b-[#2F2F2F]'>

                <div className='lg:w-[48%] relative pt-[1rem] flex flex-col justify-center'>
                    {/* Large "01" Number (Positioned Behind) */}
                    <div className='text-[#ffffff] opacity-20 text-[120px] lg:text-[160px] font-bold absolute left-0 top-[-4rem] lg:top-[-1.8rem] z-0'>
                        02
                    </div>

                    {/* Text Content (On Top of "01") */}
                    <div className='relative z-10 lg:pl-[2.2rem]'>
                        <div className='lg:text-[40px] font-[vertigo] lg:leading-[60px] leading-7 text-[25px] font-semibold mb-8'>
                            Storytelling in Branding: How to Build Authentic  Connections with Your Audience
                        </div>

                        <div className='lg:text-[20px] lg:leading-[40px] text-[15px] mb-8 lg:mb-16'>
                            In today’s competitive business landscape, effective branding is crucial to standing out. But what really makes a brand memorable?                        </div>

                        {/* Button */}
                        <Link href='/blog2'>
                            <button className='lg:w-[142px] lg:mb-0 mb-8 focus:bg-blue-500 focus:text-white hover:bg-white hover:text-black w-[220px] h-[65px] text-[14px] font-semibold flex uppercase justify-center items-center rounded-[15px] text-white border-white border-[1px]'>
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='lg:w-[45%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727565721/Rectangle_394_jgi9lt.jpg'
                        width={500} // original width of the image
                        height={600} // original height of the image
                        alt=''
                        className='w-full h-auto rounded-[20px]'
                    />
                </div>
            </div>

            <div className='flex lg:justify-between mt-[50px] lg:mt-[100px] flex-col lg:flex-row pb-[50px] lg:pb-[100px] border-b-[1px] border-b-[#2F2F2F]'>
                <div className='lg:w-[45%] mb-16 lg:mb-0'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727565719/Rectangle_395_am261x.jpg'
                        width={500} // original width of the image
                        height={600} // original height of the image
                        alt=''
                        className='w-full h-auto rounded-[20px]'
                    />
                </div>
                <div className='lg:w-[48%] relative pt-[1rem] flex flex-col justify-center'>
                    {/* Large "01" Number (Positioned Behind) */}
                    <div className='text-[#ffffff] opacity-20 text-[120px] lg:text-[160px] font-bold absolute left-0 top-[-4rem] lg:top-[.5rem] z-0'>
                        03
                    </div>

                    {/* Text Content (On Top of "01") */}
                    <div className='relative z-10 lg:pl-[2.2rem]'>
                        <div className='lg:text-[40px] lg:leading-[60px] leading-7 text-[25px] font-semibold mb-8'>
                            Branding vs. Marketing: Why Knowing the Difference is Crucial for Business Growth                        </div>

                        <div className='lg:text-[20px] lg:leading-[40px] text-[15px] mb-8 lg:mb-16'>
                            Branding and marketing are both critical to a company’s success, yet these terms are often confused. While they work together,                        </div>

                        {/* Button */}
                        <Link href='/id'>
                            <button className='lg:w-[142px] lg:mb-0 mb-8 focus:bg-blue-500 focus:text-white hover:bg-white hover:text-black w-[220px] h-[65px] text-[14px] font-semibold flex uppercase justify-center items-center rounded-[15px] text-white border-white border-[1px]'>
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className='w-[95%] mt-[5rem] mx-auto lg:w-[90%]'>
                <div className='lg:text-[60px] font-[vertigo] text-[32px] mb-[1rem]'>Portfolio</div>
                <Portfolios first={0} last={2} wrap arrow />
            </div>
        </div>
    )
}

export default Blog