import React from 'react'
import Portfolios from '@components/components/Homepage/Portfolios'
import Image from 'next/image'

function Bloom() {
    return (
        <div>
            <div className="bg-bloom py-4 px-20 flex items-end">
                <div data-aos="fade-up" className='lg:flex lg:flex-col hidden'>
                    <h2 className='lg:text-[64px] font-semibold'>Bloom</h2>
                    <h6>Empowering autistic voices to thrive and inspire.</h6>
                </div>

            </div>
            <div className='lg:w-[90%] w-[95%] lg:justify-between flex lg:flex-row flex-col-reverse  mt-5 mb-[5rem] mx-auto'>
                <div className='lg:w-[45%]'>
                    <div className='flex lg:hidden flex-col mb-3'>
                        <h2 data-aos="fade-up" className='lg:text-[64px] text-[30px] font-semibold'>Bloom</h2>
                        <h6 data-aos="fade-up" >Empowering autistic voices to thrive and inspire</h6>
                    </div>
                    <div data-aos="fade-up" className='lg:text-[20px] leading-[28px] lg:leading-[40px] text-sm'>Bloom, a nonprofit dedicated to supporting autistic children, approached us with the need for a brand identity that would resonate with their audience and elevate awareness of their mission.
                    </div>
                </div>

                <div data-aos="fade-up" className='lg:gap-6 flex gap-3 lg:mb-0 mb-2'>
                    <button className='lg:w-[170px] w-[100px] h-[25px] text-[12px] rounded-[5px] text-[#767676] lg:text-[20px] lg:h-[45px] lg:rounded-[10px] border-[1px] border-[#767676]'>
                        Product Design
                    </button>
                    <button className='lg:w-[170px] w-[100px] h-[25px] text-[12px] rounded-[5px] text-[#767676] lg:text-[20px] lg:h-[45px] lg:rounded-[10px] border-[1px] border-[#767676]'>
                        Brand Identity
                    </button>
                </div>
            </div>
            <div className='w-[95%] mt-1 lg:mt-5 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520089/Frame_2601_irsw2u.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='w-[95%] mt-2 lg:mt-4 mx-auto flex lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520195/Logo-Gif_ayra4v.gif'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    {/* video */}
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520086/Frame_2596_3_i6rfvr.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='w-[95%] mt-2 lg:mt-4 mx-auto flex lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520087/Frame_2596_4_yqu416.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    {/* video */}
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520084/Frame_2597_1_afjbex.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>


            <div className='lg:w-[90%] w-[95%] mt-8 lg:mt-5 mb-[5rem] mx-auto'>
                <div className='lg:w-[75%] w-full'>
                    <div className='lg:text-[20px] leading-[28px] lg:leading-[40px] text-sm'>
                        They sought a logo and cohesive branding that would create an emotional connection while maintaining flexibility across digital and print platforms, including their website and promotional materials.
                    </div>
                </div>
            </div>

            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex-row flex lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] '>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727521621/COLOURS-GIF_t9en60.gif'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520197/new-Type_f7jfrc.gif'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>

            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex flex-row  lg:gap-4 gap-2'>
                <div className='w-[49.4%]  '>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520085/Frame_2705_zaxbac.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='w-[49.5%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520084/Frame_2706_hbrx95.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='lg:w-[90%] w-[95%] lg:my-20  my-[3.5rem] mx-auto'>
                <h2 className='lg:text-[64px] text-[30px] mb-4 font-semibold'>Our Approach</h2>
                <div className=' w-full lg:w-[70%]  flex flex-col'>
                    <p className='lg:text-[20px] leading-[28px] lg:leading-[40px] text-sm'>We crafted a logo incorporating an infinity symbol to represent boundless potential and a smiley face to symbolize joy and optimism. The bright, welcoming color palette, paired with modern, legible typography, was carefully chosen to evoke warmth and accessibility. Every design element, from the logo to branded materials, aligns with Bloom&apos;s mission, ensuring they leave a lasting and positive impression across all touch points.</p>
                </div>
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520094/Frame_2707_syu3gs.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520094/Frame_2725_a5vwbx.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%]  mt-2 lg:mt-4 mx-auto flex flex-row  lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520085/Frame_2708_rcjy22.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520085/Frame_2709_oy0y6v.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>

            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520152/sign_post_2_xvfikk.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520098/Frame_2726_ytnvta.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex flex-row  lg:gap-4 gap-2'>
                <div className='w-[49.4%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520086/Frame_2708_1_hzilgb.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='w-[49.5%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520088/Frame_2709_1_bqdega.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>

            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727524481/Frame_2614_1_brkgsc.png'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727524481/Frame_2715_adlyl4.png'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520148/Frame_2704_wdi3yw.png'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>

            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520149/Frame_2704_1_elr2mx.png'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex flex-row  lg:gap-4 gap-2'>
                <div className='w-[49.4%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727520088/Frame_2708_2_sz9ymd.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='w-[49.5%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727524647/Frame_2981_p4mf7q.png'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727524482/Frame_2716_xoupmn.png'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>

            <div data-aos="fade-up" className='w-[95%] mt-[5rem] mx-auto lg:w-[90%]'>
                <div className='lg:text-[60px] font-[vertigo] text-[32px] mb-[1rem]'>Portfolio</div>
                <Portfolios wrap arrow first={2} last={4} />
            </div>
        </div>
    )
}

export default Bloom