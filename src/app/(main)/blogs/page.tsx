"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import c1 from '../../../assets/image-blogs.jpg'


interface CardProps {
    title: string;
    desc: string;
      image: StaticImageData;
}

const cardsData = [
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },
    { image: c1, title: 'how trends in digital marketing are redefining online strategies in 2024', desc: 'how trends in digital marketing are redefining online strategies in 2024' },

];

const Card: React.FC<CardProps> = ({ image, title, desc }) => (
    <div  className="w-[100%] md:w-[32%] mt-8 mb-16 flex flex-col gap-2 p-4 rounded-lg border border-[#D9D9D9]">
        <Image src={image} width={377} height={100} alt="" className="w-[100%]" />
        <h5 className="text-[20px] leading-7 font-bold text-[#1E1E1E] mt-2">{title}</h5>
        <p className="text-xs leading-[19.6px] text-[#757575]">{desc}</p>
        <div className="flex justify-end ">                    <Link href='/blog' className="flex py-[2px] px-[40px] rounded-lg items-center gap-[6.5px] bg-[#293352] text-[#FFFFFF] text-[14px] font-bold leading-[28.6px]">Read more <FaArrowRight /></Link>
        </div>
    </div>
);
const Blogs: React.FC = () => {

    return (
        <div className="w-[89%] mx-auto  mt-8">
            <Link href='' className=" flex gap-2 items-center text-4xl font-black leading-[57.24px] text-[#293352]"><FaArrowLeft /> Discover Blogs </Link>
            <p className="text-[20px] font-normal leading-[25.14px] text-[#000000] mt-8">
                Browse our collection of career-enhancing articles designed to keep you informed and updated on the latest trends and developments within the contemporary workforce. These insightful pieces cover a wide range of topics, offering valuable advice and practical tips to help you navigate and succeed in today’s ever-changing professional landscape.
            </p>

            <div className="flex flex-wrap justify-between">
            {cardsData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} desc={card.desc}/>
        ))}
            </div>
        </div>
    );
};

export default Blogs;

