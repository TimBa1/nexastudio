import React from 'react'
import Portfolios from '../../components/Homepage/Portfolios'
import { GoArrowRight } from "react-icons/go";

function Portfolio() {
    return (
        <>
            <div className="flex flex-col px-4 lg:px-0 lg:w-[90%] w-[95%] mx-auto pt-[40px] lg:pt-[250px]">
                <div className='font-[700] mt-[80px] mb-8 lg:mt-0 header-title leading-[76px] lg:leading tracking-tight lg:tracking-[-0.5rem]'>
                Tailored Experiences
                </div>

                {/* <div className='mb-[4rem]'>
                    <button className='btn-outline'>
                        Read About Us {'            '} <GoArrowRight size={25} />
                    </button>
                </div> */}

            </div>
            <div className='lg:w-[97%] px-4 lg:px-0 mx-auto'>
                <Portfolios />
            </div>

        </>
    )
}

export default Portfolio