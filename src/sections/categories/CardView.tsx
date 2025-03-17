import Image, { StaticImageData } from 'next/image';
import c1 from '../../assets/city-1.jpg';
import Link from 'next/link';

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
];

const Card: React.FC<CardProps> = ({ image, text }) => (
  <Link href='/courses' className="w-[140px] h-[160px] md:w-[31%] md:h-[133px] relative mb-8 transition-transform duration-300 hover:scale-105">
    <div className="w-full h-full absolute top-0 left-0 bg-[#29335299] rounded-[13.94px]"></div>
    <Image src={image} alt='' className='w-full h-full rounded-[13.94px]' width={264} height={337}/>
      <div className="w-[100%] text-center absolute bottom-7">
        <p className='text-[23px] font-bold leading-[25px] text-[#FFFFFF] p-1'>{text}</p>
    </div>

  </Link>
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

