import { Navbar } from '@/components/Navbar'
import '../../styles/headerIndex.css'
import search from '@/assets/icons/Search.svg'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io';

const DropdownButton: React.FC<{ label: string; }> = ({ label }) => (
  <button
    className="mb-4 w-[100%] px-4 py-3 md:px-[8px] md:py-[6px] rounded-[20px] bg-[#FFFFFF0A] md:bg-transparent md:w-auto md:mb-0  text-[#ffffff] border border-[#FFFFFF]  cursor-pointer text-[14px] font-medium flex items-center gap-[8px] justify-between"
  >
    {label}
    <IoIosArrowDown />
  </button>
);

export const HeaderIndex = () => {
  return (
    <div className='header-home pb-4 md:pb-0 md:h-[70vh]'>
      <div className="main-header  w-full"><Navbar />
        <div className="mt-[102px] ">
          <h1 className='text-[40px] md:text-[55px] font-light leading-[57.24px] tracking-[-0.6655414700508118px] text-center text-[#ffffff]'>Professional and Lifelong Learning</h1>
          <p className='text-[20px] md:text-[30px] font-normal leading-[57.24px] tracking-[-0.6655414700508118px] text-center text-[#ffffff] mt-6'>In-House , Classroom , Online Courses</p>
          <div className="flex gap-5 justify-center mt-11 flex-wrap">
            <Link href='/category' className='text-[#FFFFFF] text-[18px] leading-[57.24px] font-normal w-[287px] h-[47px] flex justify-center items-center  bg-[#293352] rounded-sm'>DISCOVER ALL CATEGORIES</Link>
            <Link href='/city' className='text-[#FFFFFF] text-[18px] leading-[57.24px] font-normal w-[287px] h-[47px] flex justify-center items-center  bg-[#293352] rounded-sm'>DISCOVER ALL CITIES</Link>
          </div>
        </div>
       
      </div>
      <div className="hero-down absolute top-[90%] w-[78%] mx-auto bg-[#293352] rounded-[100px] flex justify-around py-[22px]">
          {["Enter Keyword", "Select Category", "Select Date", 'Select Venue', 'Select Duration'].map((label, index) => (
            <DropdownButton key={index} label={label} />
          ))}
          <button className='text-[14px] font-medium leading-5 text-[#293352] bg-[#AFBFD3] rounded-[20px] border border-[#00000080] py-[10px] px-10'>Search</button>
        </div>
      <div className="w-[94%] mx-auto flex items-center gap-8 mt-4 md:hidden relative z-10">
        <input type="text" placeholder='Search For Your Course' className='w-[100%] border-b-[1px] border-[#ffffff] bg-transparent text-[#ffffff] p-[10px] outline-none rounded-[1px] placeholder:text-[#ffffff] placeholder:text-[14px] placeholder:font-bold' />
        <Image src={search} width={16} height={16} alt="" />
      </div>
    </div>
  )
}
