import Image from 'next/image'
import img_card from '../../assets/learning-education-ideas-insight-intelligence-study-concept.png'
import img_course from '../../assets/16.png'
import { IoIosArrowForward } from 'react-icons/io'
import ic1 from '../../assets/icons/Pin_alt_fill.svg'
import ic2 from '../../assets/icons/Time.svg'
import ic3 from '../../assets/icons/Date_range_fill.svg'
import ic4 from '../../assets/icons/Materials_fill.svg'
import Link from 'next/link'

export const CourseDetails = () => {
  return (
  <div className="">
      <section className="hidden course-details mx-auto mt-8 w-[89%] md:flex justify-between relative">
    <div className="info-course">
       <div className="w-[69%]">
         <h3 className="text-[36px] font-normal leading-[57.24px] tracking-[-0.67px] text-left text-[#293352] m-0 p-0">
            Driving Strategy with Leadership: Focus on Strategy & Innovation
        </h3>
        <p className="text-[25px] font-light leading-[40px] tracking-[-0.67px] text-left text-[#293352]">
            This course content essentially engages students in should-cost techniques, which are methods of
            analytically establishing costs, spotting areas that can bring in savings, and enhancing the cost
            effectiveness in project or purchase activities.
        </p>
        <div className=" flex gap-6 mt-12">
            <button className="flex justify-between text-[25px] font-normal leading-[20px] text-center py-4 px-4  rounded-[10px] cursor-pointer bg-[#293352] text-white border-0">
                More Details <IoIosArrowForward/>
            </button>
            <button className="flex justify-between text-[25px] font-normal leading-[20px] text-center py-4 px-4  rounded-[10px] cursor-pointer border border-[#293352] text-[#293352]">
                Register Now <IoIosArrowForward/>
            </button>
        </div>
       </div>
    </div>
<Image src={img_course} alt='' className='w-[151px] absolute -top-4 left-[62%] z-10'/>
    <div className="w-[28%] details-card border border-[#D4D4D4] rounded-[16px] p-5 absolute top-[-100px] -right-11 bg-white">
        <Image src={img_card} alt="" className="rounded-[8px]"  width={358} height={233}/>

        <div className="info-card">
            {[
                { icon: ic1, title: 'City', value: 'London' },
                { icon: ic2, title: 'DURATION', value: '5 Days' },
                { icon: ic3, title: 'Start Date', value: '23-2-2025' },
                { icon: ic3, title: 'End Date', value: '23-2-2025' },
                { icon:ic4, title: 'Remining', value: '11 Weeks longs' },
            ].map(({ icon, title, value }) => (
                <div className="row-card flex items-center my-2" key={title}>
                    <div className="row-title flex items-center">
                        <Image src={icon} alt="" width={20} height={20}/>
                        <p className="ml-2">{title}</p>
                    </div>
                    <p className="ml-auto">{value}</p>
                </div>
            ))}
        </div>

    </div>
</section>

<section className='block md:hidden w-[92.5%] mx-auto mt-[17px]'>
<h3 className="text-[20px] font-normal leading-[25.14px] tracking-[-0.67px] text-left text-[#293352] m-0 p-0">
            Driving Strategy with Leadership: Focus on Strategy & Innovation
        </h3>

        <div className="info-card">
            {[
                { icon: ic1, title: 'City', value: 'London' },
                { icon: ic2, title: 'DURATION', value: '5 Days' },
                { icon: ic3, title: 'Start Date', value: '23-2-2025' },
            ].map(({ icon, title, value }) => (
                <div className="row-card flex items-center my-2" key={title}>
                    <div className="row-title flex items-center">
                        <Image src={icon} alt="" width={20} height={20}/>
                        <p className="ml-2">{title}</p>
                    </div>
                    <p className="ml-auto">{value}</p>
                </div>
            ))}
        </div>

        <Link href='' className="flex w-[47%] text-[14px] font-normal leading-[10px] justify-center gap-2 py-[5px] px-2 items-center  rounded-[5px] cursor-pointer bg-[#293352] text-white border-0 mt-4">
                More Details <IoIosArrowForward/>
            </Link>
</section>
  </div>

  )
}
