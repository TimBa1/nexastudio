import Image from 'next/image'
import React from 'react'
import plane from '../../assests/skylux/Airplane GIF.gif'
import Portfolios from '@components/components/Homepage/Portfolios'

function Skylux() {
    return (
        <div>
            <div className="bg-skylux py-4 px-20 flex items-end">
                <div data-aos="fade-up" className='lg:flex lg:flex-col hidden'>
                    <h2 className='lg:text-[64px] font-semibold'>Skylux</h2>
                    <h6>Travel. Enjoy. Experience.</h6>
                </div>
                
            </div>
            <div className='lg:w-[90%] w-[95%] lg:justify-between flex lg:flex-row flex-col-reverse  mt-5 mb-[5rem] mx-auto'>
                <div className='lg:w-[50%]'>
                    <div data-aos="fade-up" className='flex lg:hidden flex-col mb-3'>
                        <h2 className='lg:text-[64px] text-[30px] font-semibold'>Skylux</h2>
                        <h6>Travel. Enjoy. Experience.</h6>
                    </div>
                    <div data-aos="fade-up" className='lg:text-[20px] leading-[28px] lg:leading-[40px] text-sm' > Skylux was built to offer exceptional flying experiences, with a strong focus on meeting every client’s needs through aircraft that deliver comfort and excellence.</div>
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

            <div data-aos="fade-up" className='lg:w-[97%] w-[95%] mt-10 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727440304/billboard_2_uuuwwc.jpg' layout="responsive" // maintains the aspect ratio of the original image
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4  mx-auto flex flex-row lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727440250/Frame_2608_sf3r8z.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727440252/Frame_2609_lkrrdz.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4  mx-auto flex flex-row lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727440251/Frame_2608_1_bfvzwe.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727441391/Frame_2596_2_w4gkum.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image
                    src="https://res.cloudinary.com/djaurbhw8/image/upload/v1727446524/Logo_Animation_eytoot.gif"
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>

            <div className='lg:w-[90%] w-[95%] lg:my-20  my-[3.5rem] mx-auto'>
                <h2 className='lg:text-[64px] text-[30px] font-semibold'>Our Approach</h2>
                <div className=' w-full lg:w-[70%]  flex flex-col'>
                    <p className='lg:text-[20px] leading-[28px] lg:leading-[40px] text-sm'>Inspired by Skylux&apos;s smooth and attentive service, we developed a brand identity that reflects luxury and sophistication. We chose a colour palette that feels elegant and exclusive, combined with typography that is both clear and refined. Our design decisions were guided by Skylux&apos;s commitment to quality. From the logo to the visual style, we made sure every element aligned with the brand&apos;s promise of delivering a high-end, reliable experience.</p>
                </div>
            </div>

            {/* SECOND IMAGE SECTION */}
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex-row flex lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727444453/Typography_atzohv.gif'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727440251/Frame_2607_lloznd.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727444453/Color_Animation_v0qdpn.gif'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1728315504/UIanimation-ezgif.com-video-to-gif-converter_1_jv01xx.gif'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex-row flex lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727442222/Frame_2958_qusmbi.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439193/Frame_2608_2_d3kgam.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex-row flex lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%] lg:mb-0'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439192/Frame_2609_1_cuixlz.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439192/Frame_2606_ct9tqu.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>


            {/* THIRD IMAGE SECTION */}
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439195/Frame_2956_rndwf8.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex-row flex lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439192/Frame_2596_lxa1da.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439191/Frame_2954_kng2ge.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex-row flex lg:gap-4 gap-2'>
                <div className='w-[49.4%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439192/Frame_2609_2_p2alq8.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='w-[49.5%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439192/Frame_2615_xavz2q.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src={plane}
                    // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex-row flex lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439195/Frame_2609_3_ne9eah.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439192/Frame_2596_1_zmz6db.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex-row flex lg:gap-4 gap-2'>
                <div className='lg:w-[49.4%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439192/Frame_2597_tdqxyl.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
                <div className='lg:w-[49.5%] w-[49%]'>
                    <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439191/Frame_2615_1_jzwzcn.jpg'
                        width={688} // original width of the image
                        height={510} // original height of the image
                        alt=''
                        className='w-full h-auto'
                    />
                </div>
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439194/Frame_2961_fxoa8m.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
            <div className='lg:w-[97%] w-[95%] mt-2 lg:mt-4 mx-auto flex'>
                <Image src='https://res.cloudinary.com/djaurbhw8/image/upload/v1727439198/Frame_2978_cznaqu.jpg'
                    width={1920} // original width of the image
                    height={1080} // original height of the image
                    alt=''
                    className='w-full h-auto'
                />
            </div>
           

            <div data-aos="fade-up" className='w-[95%] mt-[5rem] mx-auto lg:w-[90%]'>
                <div className='lg:text-[60px] font-[vertigo] text-[32px] mb-[1rem]'>Portfolio</div>
                <Portfolios wrap arrow first={1} last={3} />
            </div>
        </div>
    )
}

export default Skylux