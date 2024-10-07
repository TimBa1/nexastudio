'use client'
import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const AccordionItem = ({ title, content, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [col,setCol] = useState('bg-white')

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : '0px';

    }
  }, [isOpen]);

  return (
    <div data-aos="fade-up"  className=" text-black rounded-lg mb-1">
      <button
        className={`w-full flex justify-between items-center p-4 focus:outline-none transition-colors duration-200 ${isOpen ? 'bg-[#0E45E6] text-white' : 'bg-white'}`}
        onClick={() => setIsOpen(!isOpen)}
      
      >
        <span className={`text-lg font-medium ${isOpen ? ' text-white' : 'text-black'} hover:bg-red text-gray-800`}>{title}</span>
        <span
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'
            }`}
        >
          <MdKeyboardArrowDown />
        </span>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden glass-bg rounded-[8px] ${isOpen ? 'mb-2' : 'bg-white'} text-white transition-all duration-200`}
        style={{ maxHeight: '0px' }}
      >
        <div className="p-4 text-white">{content}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <AccordionItem
        title="Brand Strategy"
        color='bg-purple-300'
        content="Transform your brand with our strategic expertise, delving into your essence, voice, and values. Beyond visuals, we craft a compelling identity for lasting impact.
"
      />
      <AccordionItem
        title="Product Desgin"
        color='bg-green-300'
        content="Craft seamless user journeys with our UX expertise. We blend research and design to ensure your audience enjoys intuitive, delightful interactions.             
"
      />
      <AccordionItem
        title="Brand Identity"
        color='bg-yellow-300'
        content="Define your visual narrative with us. Our expertise in visual identity goes beyond design, creating a distinctive brand language that captivates and resonates.            
"
      />
      <AccordionItem
        title="Motion Design"
        color='bg-blue-300'
        content=" Bring your brand to life with dynamic motion design. Our expertise adds a captivating dimension to your visual storytelling.   
"
      />
    </div>
  );
};

export default Accordion;
