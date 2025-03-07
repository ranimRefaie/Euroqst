import Image, { StaticImageData } from 'next/image';
import c1 from '../../assets/card-course-1.jpg';
import c2 from '../../assets/card-course-2.jpg';
import c3 from '../../assets/card-course-3.jpg';
import c4 from '../../assets/card-course-4.jpg';
import c5 from '../../assets/card-course-5.jpg';
import { MdOutlineDateRange } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { WiTime3 } from 'react-icons/wi';
import Link from 'next/link';
import '@/styles/UpcomingCourse.css'

interface dataCards {
  title: string;
}
interface courseCards {
  image: StaticImageData;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  duration: string
}
export const SecCards: React.FC<dataCards> = ({ title }) => {
  const courses = [
    { image: c1, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c2, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c3, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c4, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c5, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
  ];

  return (
    <div className="w-[91%] mx-auto mt-10 mb-16">
      <h3 className='text-[36px] font-black leading-[68px] text-[#080808]'>{title}</h3>
      <div className="flex gap-2 md:gap-[16.94px] flex-wrap md:flex-nowrap justify-center">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};
export const CourseCard: React.FC<courseCards> = ({ image, title, startDate, endDate, location, duration }) => (
  <Link href='/course' className="w-[140px] h-[139px] md:w-[251px] md:h-[320px] relative card-course">
    <Image src={image} alt='' className='rounded-3xl w-full h-full  border border-[#ffffff]' width={250} height={319} />
    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,32,40,0.59)] to-[rgba(255,255,255,0.236)] rounded-3xl"></div>
    <div className="text-center absolute bottom-6 md:bottom-10 z-10">
      <div className="w-[90%] mx-auto pb-4 border-b-[0.55px] border-dashed border-[#FFFFFF]">
        <p className="text-[11.24px] font-bold text-[#FEFEFE] leading-[14.13px]">{title}</p>
      </div>

      <div className="w-[90%] mx-auto flex justify-between items-center mt-2">
        {startDate && endDate && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-[#FFFFFF] text-[8px] font-normal leading-[10.06px] gap-[1px]">
              <MdOutlineDateRange />
              <p>START: {startDate}</p>
            </div>
            <div className="hidden md:flex items-center text-[#FFFFFF] text-[8px] font-normal leading-[10.06px] gap-[1px]">
              <MdOutlineDateRange />
              <p>END: {endDate}</p>
            </div>
          </div>
        )}
        {location && (
          <div className="flex items-center text-[#FFFFFF] text-[8px] font-normal leading-[10.06px] gap-[1px]">
            <HiOutlineLocationMarker />
            <p>{location}</p>
          </div>
        )}
        {duration && (
          <div className="hidden md:flex items-center text-[#FFFFFF] text-[8px] font-normal leading-[10.06px] gap-[1px]">
            <WiTime3 />
            <p>{duration}</p>
          </div>
        )}
      </div>
    </div>
  </Link>
);
