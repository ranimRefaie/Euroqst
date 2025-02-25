import Link from 'next/link';
import React from 'react'
// import { SlArrowRight } from 'react-icons/sl';
interface CardProps {
  city: string;
}
const cardsData = [
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
  { city: 'Amesterdam' },
];

const Card: React.FC<CardProps> = ({ city }) => (
  <Link href='' className='w-[25%] text-center  bg-[#293352] px-[17px] py-[18px]  text-[#FFFFFF] text-[19px] leading-[23.88px] font-normal rounded-[10px]' style={{
    boxShadow: ' 0px 4px 4px 0px rgba(9, 11, 33, 0.02)'
  }}>{city}  </Link>
);
export const ListView = () => {
  return (
         <div className=" flex justify-center md:justify-between flex-wrap gap-16 mt-8 mb-20">
        {cardsData.map((card, index) => (
          <Card key={index} city={card.city} />
        ))}
      </div>
  )
}
