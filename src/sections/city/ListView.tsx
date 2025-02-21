import Link from 'next/link';
import React from 'react'
import { SlArrowRight } from 'react-icons/sl';
interface CardProps {
  city: string;
}
const cardsData = [
  { city: 'London' },
  { city: 'DUBAI' },
  { city: 'Malio' },
  { city: 'Malio' },
  { city: 'London' },
  { city: 'DUBAI' },
  { city: 'Malio' },
  { city: 'Malio' },
  { city: 'London' },
  { city: 'DUBAI' },
  { city: 'Malio' },
  { city: 'Malio' },
  { city: 'London' },
  { city: 'DUBAI' },
  { city: 'Malio' },
  { city: 'Malio' },
  { city: 'London' },
  { city: 'DUBAI' },
  { city: 'Malio' },
  { city: 'Malio' },
];

const Card: React.FC<CardProps> = ({ city }) => (
  <div className="w-[78%] flex items-center md:w-[19%]">
    <span className='text-[#080808] text-[22px] font-black leading-[27.65px] px-2 py-[18px] border border-[#F3F2F8] rounded-l-2xl' style={{
      boxShadow: '0px 4px 4px 0px rgba(9, 11, 33, 0.02)'
    }}>{city}</span>
    <Link href='' className='flex items-center gap-6 bg-[#293352] px-[17px] py-[18px] border border-[#F3F2F8] text-[#FFFFFF] text-[22px] leading-[27.65px] font-bold rounded-r-2xl' style={{
      boxShadow: ' 0px 4px 4px 0px rgba(9, 11, 33, 0.02)'
    }}>Search  <SlArrowRight /></Link>
  </div>
);
export const ListView = () => {
  return (
    <div className="mt-4">
      <input type="text" placeholder="Search For Your City" className="hidden md:block w-[45%] mb-8 p-2 border-b-[1px] border-[#293352] outline-none placeholder:text-[20px] font-bold leading-5 text-[#8D8D8D]" />
      <div className=" flex justify-center md:justify-between flex-wrap gap-16">
        {cardsData.map((card, index) => (
          <Card key={index} city={card.city} />
        ))}
      </div>
    </div>
  )
}
