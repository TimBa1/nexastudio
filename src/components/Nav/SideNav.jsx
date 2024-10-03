'use client'
import { FiArrowUpRight } from 'react-icons/fi';
import Backdrop from './Backdrop';
import Link from 'next/link';

const SideDrawer = ({ open, closed }) => {
  return (
    <>
      
      <div
        className={`fixed w-full h-[320px] top-0 rounded-b-lg z-10 bg-[#141414] border-b border-b-[#ffff]   py-8  shadow-small transition-transform duration-300 ease-out lg:hidden ${open ? 'translate-y-[72px]' : '-translate-y-full'
          }`}
      >
        <div className='lg:hidden p-0'>
          <Link href='/about'><div className="text-white text-small  hover:bg-blue-500 px-5 pb-3 lg:hidden flex" onClick={closed}> About</div></Link>
          <Link href='/blog'><div className="text-white text-small  hover:bg-blue-500 px-5 py-3 lg:hidden flex" onClick={closed}>Blogs </div></Link>
          <Link href='/portfolio'> <div className="text-white  hover:bg-blue-500 text-small px-5 py-3 lg:hidden flex" onClick={closed}> Portfolio </div></Link>
          <Link href='/contact-us'> <div className="text-white hover:bg-blue-500 px-5 text-small py-3 lg:hidden flex" onClick={closed}> Contact Us </div></Link>
          <div className='px-5 py-3'>
            <button className=' btn-outline'>View all Projects <span className='ml-2 font-extrabold'><FiArrowUpRight /></span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
