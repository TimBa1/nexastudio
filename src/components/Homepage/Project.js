import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import rounded from '../../assests/wire-round.svg'
import Image from 'next/image'
import Portfolios from './Portfolios'




function Project() {
    return (
        <div className='flex flex-col w-[97%] mx-auto'>
            <Portfolios first={0} last={4} />
            {/* <div className='flex justify-between overflow-hidden mt-[2rem] items-center'>
                <div className=''></div>
                <Image
                    src={rounded}
                    className="lg:w-[300px] w-[150px]"
                    style={{ animation: "rot 7s linear infinite" }}
                    alt="Spinning Image"
                    data-aos="fade-up" 
                />
            </div> */}

        </div>
    )
}

export default Project