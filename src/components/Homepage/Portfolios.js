import Image from 'next/image'
import React from 'react'
import p1 from '../../assests/skylux/Airplane@7x-20.jpg'
import p2 from '../../assests/brand-strategy/new cover.jpg'
import p3 from '../../assests/brand-strategy/final.jpg'
import p4 from '../../assests/pure-journey/PJC Shoes.jpg'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

const content = [
    {
        img: p1,
        title: 'Skylux',
        text: "Brand Strategy & Identity, Product Design, Web Content",
        href: '/skylux',
        buttons: ['     Product Design', '    Brand Identity', 'Development']
    },
    {
        img: p2,
        title: 'Bloom',
        text: "Brand Strategy & Identity, Product Design, Web Content",
        href: '/bloom',
        buttons: ['Product Design', 'Brand Identity',]
    },
    {
        img: p4,
        title: 'Pure Journey Customs',
        text: "Brand Strategy & Identity, Product Design, Web Content",
        href: '/pure-journey',
        buttons: ['Product Design', 'Brand Identity', 'Development']

    },
    {
        img: p3,
        title: 'Brand Strategy',
        text: "Brand Strategy & Identity, Product Design, Web Content",
        href: '/brand-strategy',
        buttons: ['Product Design', 'Brand Identity', 'Development']
    },
]

function Portfolios({ arrow, wrap, first, last }) {
    return (
        <div>
            <div className='flex w-full lg:gap-[4rem] flex-wrap justify-center'>
                {
                    content?.slice(first, last)?.map((e) => (
                        <div key={e} className={`rounded-[20px] ${wrap ? 'w-full lg:w-[46.5%] rounded-[20px]' : "w-full  "} `}>
                            <Link href={e.href}>
                                <Image data-aos="fade-up" src={e.img} alt='img' objectFit='cover' className={`my-[2rem] w-full ${wrap ? "rounded-t-[20px]" : ""}`} />
                                <div className={`${wrap ? "" : " lg:w-[93%] w-full mx-auto"}`}>
                                    <div data-aos="fade-up" className='lg:text-[70px] font-[vertigo] leading-8 lg:leading-[70px] text-[35px]'>
                                        {e.title}
                                    </div>
                                    <div data-aos="fade-up" className='flex justify-between items-center'>
                                        <div className={`${arrow?"lg:gap-3":"lg:gap-6"} mt-2 flex gap-3 lg:mb-0 mb-2`}>
                                            {
                                                e.buttons.map((e) => (
                                                    <button key={e} className='lg:w-[170px] w-[100px] h-[25px] text-[12px] rounded-[5px] text-[#767676] lg:text-[20px] lg:h-[45px] lg:rounded-[10px] border-[1px] border-[#767676]'>
                                                        {e}
                                                    </button>
                                                ))
                                            }
                                        </div>
                                        {
                                            arrow && (<div className='flex w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] justify-center border-[1px] border-white items-center rounded-full'>
                                                <BsArrowUpRight />
                                            </div>)
                                        }

                                    </div>
                                </div>


                            </Link>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Portfolios