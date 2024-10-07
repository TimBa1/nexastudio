'use client'
import React, { useState } from 'react'
import avatar from '../../assests/avatar.svg'
import ellipse from '../../assests/icons/Ellipse 71.svg'
import vid from '../../assests/Frame 3085.png'
import video from '../../assests/video.MP4'
import Image from 'next/image'
import Backdrop from '../Nav/Backdrop'


function Testimonial() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(false)
    }

    return (
        <div>
            <div className=''>
                <div className='flex lg:flex-row flex-col justify-between'>
                    <div className='lg:w-[60%]'>
                        <div className='lg:text-[64px] text-[30px] font-semibold'>
                            Insight From Those Who Matter The Most
                        </div>
                    </div>
                </div>
                <div className='lg:w-[70%]'>
                    <div className='head-text'>
                       <span className='bg-[#0E45E6] text-white'> Formerly known as Nexa Hub</span>, Nexa Studio is more than just a design agency. Our clients
                        see us as a valuable partner, offering mentorship and strategic guidance that leads to real
                        business success.
                    </div>
                </div>
            </div>

            <div className='w-full flex mt-[3rem] no-scrollbar  overflow-x-auto'>
                <div className='lg:min-w-[540px] mr-[2rem] min-w-[298px] bg-gradient-to-t from-[rgba(78,78,78,0.5)] to-[rgba(30,30,30,0.5)] glass-bg rounded-[20px] px-[15px] py-[25px] lg:px-[25px] lg:py-[30px]'>
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

                <div className='lg:min-w-[540px] mr-[2rem] min-w-[298px] bg-gradient-to-t from-[rgba(78,78,78,0.5)] to-[rgba(30,30,30,0.5)] glass-bg rounded-[20px] px-[15px] py-[25px] lg:px-[25px] lg:py-[30px]'>
                    <p className='box-text'>Ohh My! The designs are so beautiful and eye catchy, I really love the color pallet you used for my brand, it came out so well, thank you so much Nexa Hub yours stood out among all the designers I’ve worked with.</p>
                    <div className='flex gap-6 mt-10 lg:mt-16'>
                        <Image src={ellipse} className='w-[70px] rounded-[50%] lg:w-[100px]' alt='img' />
                        <div className=''>
                            <div className='lg:[24px] lg:text-[32px] text-[20px] mt-3 font-medium'>
                                Rosepeditta
                            </div>
                            <p className=' text-[13px]'>Founder of Roseangellike Collection</p>
                        </div>
                    </div>

                </div>


                {/* {
                    !show && (<div onClick={() => setShow(true)}>
                        <Image src={'https://res.cloudinary.com/djaurbhw8/image/upload/v1727687120/Frame_3085_f97xzb.jpg'} width={485} height={345} alt='vid' className='rounded-[22px]' />
                    </div>)
                } */}


                {/* Video Modal */}
                {
                    !show && (<div className='flex justify-center rounded-t-[20px] items-center h-fit'>
                        <div className='ml-4 min-w-[250px] rounded-t-[20px] bg-white lg:min-w-[50%]'>

                            {/* Video Element */}
                            <video
                                className='lg:h-[353px] h-[310px] w-full rounded-t-[20px] min-w-[420px] lg:min-w-[480px]' // Updated to make it responsive
                                preload="auto"
                                controls // Changed to "auto" for better preloading
                                poster={'https://res.cloudinary.com/djaurbhw8/image/upload/v1727687120/Frame_3085_f97xzb.jpg'} // Poster for fallback display (optional)
                            >
                                <source src={video} type="video/mp4" className='lg:w-[380px] lg:h-auto h-[400] ' />
                                <track
                                    src="/path/to/captions.vtt"
                                    kind="subtitles"
                                    srcLang="en"
                                    label="English"
                                />
                                Your browser does not support the video tag.
                            </video>

                        </div>
                    </div>)
                }


            </div>

        </div>
    )
}

export default Testimonial