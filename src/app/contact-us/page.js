import Portfolios from '@components/components/Homepage/Portfolios'
import React from 'react'

function ContactUs() {
    return (
        <>

            <div className="flex flex-col w-[95%] lg:w-[90%] mx-auto pt-[40px] lg:pt-[250px]">
                <div className='font-[700] mt-[80px]  lg:mt-0 header-title'>
                    Connect <br />With Us
                </div>

                <div className='w-full mt-12 lg:mt-[7rem] lg:w-[60%] mx-auto '>
                    <p className=' mt-5 lg:mt-8 w-full'>
                        <input placeholder="Name" type='text' />
                    </p>

                    <p className='mt-5 lg:mt-8 w-full'>
                        <input placeholder="Phone Number" type='number' />
                    </p>
                    <p className='mt-5 lg:mt-8 w-full'>
                        <input placeholder="Work Email" type='email' />
                    </p>

                    <p className='mt-5 lg:mt-8 w-full custom-select'>
                        <select id='select' placeholder='select'>
                            <option className='font-medium' value="">Select</option>
                            <option className='font-medium py-4' value="">Start a Project</option>
                            <option className='font-medium py-4' value="">Schedule a Call</option>
                        </select>

                    </p>
                    <p className='mt-5 lg:mt-8 w-full'>
                        <textarea placeholder="Message"></textarea>

                    </p>
                    <div className='mt-5 lg:mt-8 btn-outline' tabIndex={0}>
                        Send Message
                    </div>
                </div>

            </div>
            <div data-aos="fade-up" className='w-[95%] mt-[5rem] mx-auto lg:w-[90%]'>
                <div className='lg:text-[60px] font-[vertigo] text-[32px] mb-[1rem]'>Portfolio</div>
                <Portfolios wrap arrow />
            </div>
        </>

    )
}

export default ContactUs