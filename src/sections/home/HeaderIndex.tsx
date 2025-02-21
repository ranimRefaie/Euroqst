import { Navbar } from '@/components/Navbar'
import '../../styles/headerIndex.css'
import search from '@/assets/icons/Search.svg'
import Image from 'next/image'


export const HeaderIndex = () => {
  return (
    <div className='header-home pb-4 md:pb-0 md:h-[70vh]'>
      <Navbar />
      <div className="main-header">
        <h1 className='text-[40px] md:text-[55px] font-light leading-[57.24px] tracking-[-0.6655414700508118px] text-center text-[#ffffff]'>Professional and Lifelong Learning</h1>
        <p className='text-[20px] md:text-[30px] font-normal leading-[57.24px] tracking-[-0.6655414700508118px] text-center text-[#ffffff] mt-6'>In-House , Classroom , Online Courses</p>
      </div>
      <div className="w-[94%] mx-auto flex items-center gap-8 mt-4 md:hidden">
        <input type="text" placeholder='Search For Your Course' className='w-[100%] border-b-[1px] border-[#ffffff] bg-transparent text-[#ffffff] p-[10px] outline-none rounded-[1px] placeholder:text-[#ffffff] placeholder:text-[14px] placeholder:font-bold' />
        <Image src={search} width={16} height={16} alt="" />
      </div>
    </div>
  )
}
