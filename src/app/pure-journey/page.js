import React from 'react'
import img7 from '../../assests/pure-journey/Color GIF.gif'
import Portfolios from '@components/components/Homepage/Portfolios'

import Image from 'next/image'

function PureJourney() {
    return (
        <div>
            <div className="bg-pure py-4 px-20 flex items-end">
                <div data-aos="fade-up" className='lg:flex text-white lg:flex-col hidden'>
                    <h2 className='lg:text-[64px] font-semibold'>Pure Journey</h2>
                    <h6>Customs</h6>
                </div>

            </div>
            <div className='lg:w-[90%] w-[95%] lg:justify-between flex lg:flex-row flex-col-reverse  mt-5 mb-[5rem] mx-auto'>
                <div className='lg:w-[56%]'>
                    <div className='flex lg:hidden flex-col mb-3'>
                        <h2 data-aos="fade-up" className='lg:text-[64px] text-[30px] font-semibold'>Pure Journey</h2>
                        {/* <h6 data-aos="fade-up" >Motto or brand solgan</h6> */}
                    </div>
                    <div data-aos="fade-up" >
                        <p className='lg:text-[20px] leading-[28px] lg:leading-[40px] text-sm mb-4'>
                            Pure Journey Customs (PJC) approached us to develop a logo and
                            brand identity for their innovative shoe customization business.
                        </p>
                        <p className='lg:text-[20px] leading-[28px] lg:leading-[40px] text-sm'>
                            Their mission is to breathe
                            new life into pre-loved shoes through creative customization, while fostering environmental
                            sustainability. Serving both kids and adults, PJC offers personalised, vibrant, and eco-
                            conscious footwear.
                        </p>
                    </div>
                </div>

                <div data-aos="fade-up" className='flex lg:w-1/2 gap-1 lg:gap-2 w-full lg:justify-end'>
                    <span className='md:flex hidden'>
                        <button className='lg:w-[198px] w-[113px] h-[25px] text-[12px] rounded-[5px] text-[#767676] lg:text-[16px] lg:h-[47px] lg:rounded-[5px] border-[1px] border-[#767676]'>
                            Product Design
                        </button>
                    </span>
                    <span className=''>
                        <div className='lg:gap-2 gap-1 flex lg:flex-col  lg:mb-0 mb-2'>
                            <button className='lg:w-[198px] w-[140px] h-[25px] text-[12px] rounded-[5px] text-[#767676] lg:text-[16px] lg:h-[47px] lg:rounded-[5px] border-[1px] border-[#767676]'>
                                Brand Design
                            </button>
                            <button className='lg:w-[198px]  w-[148px] h-[25px] text-[12px] rounded-[5px] text-[#767676] lg:text-[16px] lg:h-[47px] lg:rounded-[5px] border-[1px] border-[#767676]'>
                                Development
                            </button>
                        </div>
                    </span>
                </div>
            </div>


            <div className='w-[95%] mt-1 lg:mt-5 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439564/updated-colors_rcecrg.gif'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='w-[95%] mt-1 lg:mt-5 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550113/Frame_3088_2_wldno1.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='w-[95%] mt-1 lg:mt-5 mx-auto flex'>
                <Image src='    https://res.cloudinary.com/djaurbhw8/image/upload/v1727550117/Frame_2604_wkwd8i.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>

            <div className='lg:w-[90%] w-[95%] lg:my-20  my-[3.5rem] mx-auto'>
                <h2 className='lg:text-[64px] text-[30px] font-semibold mb-4'>Our Approach</h2>
                <div className=' w-full lg:w-[70%]  flex flex-col'>
                    <p className='lg:text-[20px] leading-[28px] lg:leading-[40px] text-sm'>We crafted a logo that encapsulates PJC&apos;s playful yet eco-friendly ethos. The spiral design symbolizes transformation and boundless creativity, while the bold, lively colors resonate with their diverse audience. From packaging to animations, each element was meticulously designed to reflect the brand&apos;s commitment to sustainability and personalization, making every pair of shoes a unique, memorable journey for the wearer.</p>
                </div>
            </div>
            <div className='w-[95%] mt-2 lg:mt-4 mx-auto flex lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439565/gif_ta4tqh.gif'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>

                <div className='lg:w-[49.5%] w-[49%]'>
                    {/* video */}
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550120/Frame_2606_1_tbfeyd.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src={img7}
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550117/Frame_3091_vb6i31.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex-row flex lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%] '>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550116/Frame_2596_3_gqx0je.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550115/Frame_2606_2_m6pybf.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>

            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex flex-row  lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%] '>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550114/Frame_2598_tfkfwb.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550117/Frame_2597_1_okvghy.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>

            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550121/Frame_2614_mfiykv.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>

            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex flex-row  lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%] '>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550115/Frame_2596_4_nkskom.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550114/Frame_2608_4_vwdqtu.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>

            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550124/Frame_2634_drujph.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727549741/Visuals_lbtvde.png'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>


            <div className='lg:w-[97%] w-[95%]  mt-2 lg:mt-4 mx-auto flex flex-row  lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550112/Frame_2615_2_waxixi.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727550114/Frame_2609_4_sctend.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>


            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727549722/Thank_you_Card_z0azyn.png'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>

            <div data-aos="fade-up" className='w-[95%] mt-[5rem] mx-auto lg:w-[90%]'>
                <div className='lg:text-[60px] font-[vertigo] text-[32px] mb-[1rem]'>Portfolio</div>
                <Portfolios wrap arrow first={0} last={2} />
            </div>

        </div>
    )
}

export default PureJourney