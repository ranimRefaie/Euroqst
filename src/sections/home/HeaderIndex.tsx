import { Navbar } from '@/components/Navbar'
import '../../styles/headerIndex.css'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io';

const DropdownButton: React.FC<{ label: string; }> = ({ label }) => (
  <button
    className="mb-4 w-[100%] px-4 py-3  md:px-[14.5px] md:py-[10.5px] rounded-[20px] bg-[#FFFFFF0A] md:bg-transparent md:w-auto md:mb-0  text-[#ffffff] border border-[#FFFFFF]  cursor-pointer text-[14px] font-medium leading-5 flex items-center gap-[8px] justify-between"
  >
    {label}
    <IoIosArrowDown />
  </button>
);

export const HeaderIndex = () => {
  return (
    <div className='h-auto header-home pb-4 md:pb-0 md:h-[74vh] '>
      <div className="main-header  w-full"><Navbar />
        <div className="mt-[60px] ">
          <h1 className='text-[40px] md:text-[55px] font-light leading-[57.24px] tracking-[-0.6655414700508118px] text-center text-[#ffffff]'>Professional and Lifelong Learning</h1>
          <p className='text-[20px] md:text-[30px] font-normal leading-[57.24px] tracking-[-0.6655414700508118px] text-center text-[#ffffff] mt-9'>In-House , Classroom , Online Courses</p>
          <div className="flex gap-5 justify-center mt-9 flex-wrap">
          <Link 
  href='/category' 
  className='text-[#FFFFFF] text-[18px] leading-[57.24px] font-normal w-[287px] h-[47px] flex justify-center items-center bg-[#293352] rounded-sm transition-transform duration-300 hover:scale-105'
>
  DISCOVER ALL CATEGORIES
</Link>

<Link 
  href='/city' 
  className='text-[#FFFFFF] text-[18px] leading-[57.24px] font-normal w-[287px] h-[47px] flex justify-center items-center bg-[#293352] rounded-sm transition-transform duration-300 hover:scale-105'
>
  DISCOVER ALL CITIES
</Link>
          </div>
        </div>

      </div>
      <div className="hidden hero-down absolute top-[92%] px-[44.49px] mx-auto bg-[#293352] rounded-[100px] md:flex  gap-8 justify-between py-[22px]">
        <button className='mb-[43px] w-[100%] px-4 py-3 md:px-[22px] md:py-[10.5px] rounded-[20px] bg-[#FFFFFF0A] md:bg-transparent md:w-auto md:mb-0  text-[#ffffff] border border-[#FFFFFF]  cursor-pointer text-[14px] font-medium flex items-center justify-center'>Enter Keyword</button>
        {["Select Category", "Select Date", 'Select Venue', 'Select Duration'].map((label, index) => (
          <DropdownButton key={index} label={label} />
        ))}
        <button className='text-[14px] font-medium leading-5 text-[#293352] bg-[#AFBFD3] rounded-[20px] border border-[#00000080] py-[10px] px-10'>Search</button>
      </div>

    </div>
  )
}
