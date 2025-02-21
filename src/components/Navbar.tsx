"use client";
import { useState } from 'react'
import logo from '@/assets/logo.svg'
import menu from '@/assets/icons/Menu.svg'
import search from '@/assets/icons/Search.svg'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

import close from '@/assets/icons/close_ring.png'


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-between w-[94%] mx-auto items-center'>
      <div className="flex gap-16 items-center">
        <button className='cursor-pointer w-11' onClick={toggleMenu}>
          <Image src={menu} width={45} height={45} alt="" />
        </button>
        <button className='hidden md:block text-[#F1F1F1] border-2 py-[10px] px-[24px] rounded-[10px] cursor-pointer'>الدورات التدريبية</button>
      </div>

      <Image src={logo} width={367} height={84} alt="logo" className='w-[131px] md:w-[367px]' />

      <div className="hidden md:flex items-center gap-8">
        <input type="text" placeholder='Search For Your Course' className='w-[250px] border-b-[1px] border-[#ffffff] bg-transparent text-[#ffffff] p-[10px] outline-none rounded-[1px] placeholder:text-[#ffffff] placeholder:text-[19px] placeholder:font-bold' />
        <Image src={search} width={40} height={40} alt="" />
      </div>

      <button className='block md:hidden text-[#F1F1F1] border-2 py-[4px] px-[8px] rounded-[10px] cursor-pointer'>الدورات التدريبية</button>
      {/* ================================ */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-[#293352] p-4 z-20 rounded-[10px] pb-[149px]">
          <div className='flex justify-between w-[94%] mx-auto items-center'>
            <div className="flex gap-16 items-center">
              <button className='cursor-pointer w-11' onClick={toggleMenu}>
                <Image src={close} width={45} height={45} alt="" />
              </button>
              <button className='hidden md:block text-[#F1F1F1] border-2 py-[10px] px-[24px] rounded-[10px] cursor-pointer'>الدورات التدريبية</button>
            </div>

            <Image src={logo} width={367} height={84} alt="logo" className='w-[131px] md:w-[367px]' />

            <div className="hidden md:flex items-center gap-8">
              <input type="text" placeholder='Search For Your Course' className='w-[250px] border-b-[1px] border-[#ffffff] bg-transparent text-[#ffffff] p-[10px] outline-none rounded-[1px] placeholder:text-[#ffffff] placeholder:text-[19px] placeholder:font-bold' />
              <Image src={search} width={40} height={40} alt="" />
            </div>

            <button className='block md:hidden text-[#F1F1F1] border-2 py-[4px] px-[8px] rounded-[10px] cursor-pointer'>الدورات التدريبية</button>
          </div>
        <div className="w-[88.7%] mx-auto mt-10">
        <p className='text-[24px] md:text-[45px] leading-[57.24px] font-light text-[#FFFFFF]'>Browse by Subject Area</p>
          <div className="flex-col md:flex-row flex gap-0 md:gap-10 border-t border-[#FFFFFF] pt-[50px] mt-4">
            <ul className='flex flex-col gap-4'>
              <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/'>Home Page</Link></li>
              <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/category'>CATEGORIES</Link></li>
              <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/contact'>CONTACT US</Link></li>
            </ul>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/about'>ABOUT</Link></li>
              <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/city'>CITIES</Link></li>
              <li className='flex items-center gap-[13px] text-[20px] leading-[57.24px] font-light text-[#FFFFFF]'><IoIosArrowForward /> <Link href='/blogs'>BLOGS</Link></li>
            </ul>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};
