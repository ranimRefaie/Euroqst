
import Image from 'next/image';
import check from '../../../assets/icons/Check_ring.svg'
import Link from 'next/link';
import '@/styles/coursePage.css'

import { InfoCourseSec } from '@/sections/Course/InfoCourseSec';
import { TableInfo } from '@/sections/Course/TableInfo';
import { SecCards } from '@/sections/Course/SecCards';
import { CourseModules } from '@/sections/Course/CourseModules';
import { IoCloseOutline } from 'react-icons/io5';

const Course: React.FC = () => {


  const info_course_1 = [
    'Financial analysts and accountants looking to deepen their analytical skills.',
    'Managers and team leaders involved in budgeting and forecasting.',
    'Business executives seeking to align financial planning with strategic objectives.',
    'Students and professionals interested in developing expertise in financial management.',
  ];

  const info_course_2 = [
    'Financial analysts and accountants looking to deepen their analytical skills.',
    'Managers and team leaders involved in budgeting and forecasting.',
    'Business executives seeking to align financial planning with strategic objectives.',
    'Business executives seeking to align financial planning with strategic objectives.',
    'Students and professionals interested in developing expertise in financial management.',
    'Students and professionals interested in developing expertise in financial management.',
    'Students and professionals interested in developing expertise in financial management.',
  ];



  return (
    <div>
      <div className="hidden md:block">
       
      </div>



      {/* <div className=" relative block hero-course md:hidden">
        <div className="relative z-10 ">
          <div className="bg-[#293352] py-[10px]">
            <Navbar />
          </div>
          <div className="w-[92.5%] mx-auto text-[#FFFFFF] mt-6">
            <p className='text-[16px] font-normal'>Administration and Secretaries - Management & Leadership</p>
            <h1 className='text-[36px] leading-[45.25px] md:text-[40px] font-normal mt-2'>Effective Office Management</h1>
            <p className='w-auto md:w-[888px] text-[14px] md:text-[16px] font-normal leading-[20.11px] mt-4'>
              Effective office management plays a crucial role in enhancing organizational efficiency and productivity. It
              encompasses planning, organizing, and coordinating various administrative activities to ensure a smooth workflow and a positive work environment. This course aims to equip participants with essential knowledge and skills for managing offices effectively, ultimately leading to improved team performance and
              <br /> communication.
            </p>
          </div>
        </div>
      </div> */}




     <div className="relative">
     <div className="container-table py-[54px] flex items-center justify-center border-b-[1.5px] border-[#293352] pb-4 bg-slate-400">
        <TableInfo />
      </div>
     </div>
      <div className="w-[97%] md:w-[88%] mx-auto mt-10">
        <div className="hidden md:flex border border-[#F3F2F8] rounded-xl  py-[14px] justify-between mb-4 px-4">
          <div className="flex items-center gap-2">
            <span className='w-8 h-8 bg-[#FCF4E9] rounded-xl flex justify-center items-center'>
              <Image src={check} alt='' width={24} height={24} /></span>

            <div className="">
              <p className='text-[14.5px] font-normal leading-5 text-[#1A1A25]'>You Can Request This Course IN  House Or Online Easly</p>
              <p className='text-[13px] font-normal leading-[18.2px] text-[#808192]'>Just Click at button and fill shorted form , and congrats you are request  at support team.</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Link href='' className='text-[14px] font-bold leading-[19.6px] text-center text-[#293352]  py-[10px] px-6 border rounded-[10px] border-[#293352]'>
              Request In House
            </Link>

            <Link href='' className='text-[14px] font-bold leading-[19.6px] text-center text-[#FFFFFF]  py-[10px] px-6  rounded-[10px] bg-[#293352]'>
              Request Online
            </Link>
            <IoCloseOutline size={32} className='text-[#1A1A25]' />
          </div>
        
        </div>

        <div className=" mt-4 mb-20">
            <p className='text-[16px] font-normal '>Administration and Secretaries - Management & Leadership</p>
            <h1 className='text-[40px] font-normal mt-4 '>Effective Office Management</h1>
            <p className=' text-[16px] font-normal leading-[20.11px] capitalize'>
            Effective office management plays a crucial role in enhancing organizational efficiency and productivity. It encompasses planning, organizing, and coordinating various administrative activities to ensure a smooth workflow and a positive work environment. This course aims to equip participants with essential knowledge and skills for managing offices effectively, ultimately leading to improved team performance and communication.

            </p>
          </div>
        <div className="w-[92%] ml-3 md:w-full md:ml-0">
        <InfoCourseSec title="Target Audience" items={info_course_1} />
        <InfoCourseSec title="Course Objectives" items={info_course_2} />

        <CourseModules />
      </div>
      </div>
     
      <SecCards title='More Courses' />
    </div>
  );
};

export default Course;
