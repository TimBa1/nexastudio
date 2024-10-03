import React from 'react'
import c1 from '../../assests/c1.svg'
import c2 from '../../assests/c2.svg'
import Image from 'next/image'

function ChooseUs() {
    return (
        <div className='mt-[8rem] flex flex-col w-[90%] lg:w-[80%] mx-auto'>
            <div className='head-title'>
                Why Choose Us?
            </div>
            <div className='flex gap-[2rem] lg:flex-row flex-col justify-center'>
                <div className='lg:bg-[#181818] flex lg:flex-col flex-col-reverse lg:w-[650px] lg:p-[15px] rounded-[5px]' >
                    <Image src={c1} className='mb-4' alt="" />
                    <div>
                        <p className='box-text flex items-center'><span className='bg-white hidden lg:flex w-[5px] h-[13px]'></span>Unleashing Imagination, Crafting Brilliance</p>
                        <div className='box-title'>
                            Creative Excellence
                        </div>
                        <p className='box-text'>At Nexa, we&apos;re dedicated to pushing the boundaries of creativity. Our team of passionate artists, designers, and visionaries transforms ideas into stunning visual experiences that captivate and inspire. Explore a world where imagination knows no limits.</p>
                        <p className=' mt-[1rem] mb-4 uppercase lg:mt-[4rem] underline' >Browse Our Service</p>
                    </div>

                </div>
                <div className='lg:bg-[#181818] flex lg:flex-col flex-col lg:w-[650px] lg:p-[15px] rounded-[5px]' >
                    <Image src={c2} className='mb-4' alt="" />
                    <div>
                        <p className='box-text flex items-center'><span className='bg-white hidden lg:flex w-[5px] h-[13px]'></span>Designing Success, One Strategy at a Time</p>
                        <div className='box-title'>
                            Strategic Design Solutions
                        </div>
                        <p className='box-text'>We believe that great design should do more than just look good; it should deliver results. With a focus on strategy and innovation, our agency creates designs that resonate with your audience and drive meaningful outcomes. Discover how our designs can elevate your brand and achieve your goals. </p>
                        <p className=' mt-[1rem] mb-4 lg:mt-[4rem] uppercase underline' >Browse Our Service</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ChooseUs