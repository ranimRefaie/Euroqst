import React from 'react'

interface TitleSectionProps {
  title: string;
  desc: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ title, desc }) => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-[20px] leading-[25.14px] md:text-[48px] md:leading-[60.34px] md:font-normal  font-bold text-[#293352]">{title}</h1>
      <p className='text-xs leading-[15.08px] font-normal md:text-xl md:leading-[37px] mt-3 text-[#000000]'>{desc}</p>
    </div>
  );
};
