import Image, { StaticImageData } from 'next/image';
import c1 from '../../assets/city-1.jpg';
// import c1 from '../../assets/category/cat-1.jpg';
// import c2 from '../../assets/category/cat-2.jpg';
// import c3 from '../../assets/category/cat-3.jpg';
// import c4 from '../../assets/category/cat-4.jpg';
// import c5 from '../../assets/category/cat-5.jpg';
// import c6 from '../../assets/category/cat-6.jpg';
// import c7 from '../../assets/category/cat-7.jpg';
// import c8 from '../../assets/category/cat-8.jpg';
// import c9 from '../../assets/category/cat-9.jpg';
// import c10 from '../../assets/category/cat-10.jpg';
// import c11 from '../../assets/category/cat-11.jpg';

interface CardProps {
  image: StaticImageData; 
  text: string; 
}

const cardsData = [
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  { image: c1, text: 'Human Resource, Personnel, and Training' },
  // { image: c2, text: 'Management &amp; Leadership' },
  // { image: c3, text: 'Project, Contract, Procurement' },
  // { image: c4, text: 'Health, Safety &amp; Security' },
  // { image: c5, text: 'Administration and Secretaries' },
  // { image: c6, text: 'Finance and Accounting' },
  // { image: c7, text: 'PR &amp; Customer Service' },
  // { image: c8, text: 'Information Technology' },
  // { image: c9, text: 'Engineering, Oil and Gas' },
  // { image: c10, text: 'Water Engineering and Management' },
  // { image: c11, text: 'Information Technology Courses and Social Networks' },
];

const Card: React.FC<CardProps> = ({ image, text }) => (
  <div className="w-[140px] h-[160px] md:w-[31%] md:h-[133px] relative mb-8 ">
    <div className="w-full h-full absolute top-0 left-0 bg-[#29335299] rounded-[13.94px]"></div>
    <Image src={image} alt='' className='w-full h-full rounded-[13.94px]' width={264} height={337}/>
      <div className="w-[100%] text-center absolute bottom-7">
        <p className='text-[23px] font-bold leading-[25px] text-[#FFFFFF] p-1'>{text}</p>
    </div>

  </div>
);

export const CardView = () => {
  return (
      <div className="w-full mt-8  mx-auto md:w-[98%] flex justify-center md:justify-start flex-wrap   gap-[33px]">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} text={card.text} />
        ))}
      </div>
  );
};

