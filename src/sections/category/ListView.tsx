import Image, { StaticImageData } from 'next/image';
import c1 from '../../assets/card-cat.jpg';

interface CardProps {
  image: StaticImageData; 
  text: string; 
}

const cardsData = [
  { image: c1, text: 'Customer service management' },
  { image: c1, text: 'Customer service management' },
  { image: c1, text: 'Customer service management' },
  { image: c1, text: 'Customer service management' },
  { image: c1, text: 'Customer service management' },
  { image: c1, text: 'Customer service management' },
  { image: c1, text: 'Customer service management' },
  { image: c1, text: 'Customer service management' },
  { image: c1, text: 'Customer service management' },
  { image: c1, text: 'Customer service management' },
  { image: c1, text: 'Customer service management' },
  { image: c1, text: 'Customer service management' },
];

const Card: React.FC<CardProps> = ({ image, text }) => (
  <div className="w-[140px] h-[160px] md:w-[264px] md:h-[337px] relative mb-10">
    <Image src={image} alt='' className='w-full h-full rounded-3xl' width={264} height={337}/>
    <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-3xl">
      <div className="w-[100%] text-center absolute bottom-7">
        <p className='text-[14px] font-bold leading-[17.6px] text-[#FFFFFF]'>{text}</p>
      </div>
    </div>
  </div>
);

export const ListView = () => {
  return (
    <div className="mt-4">
      <input type="text" placeholder="Search For Your City" className="hidden md:block w-[45%] mb-8 p-2 border-b-[1px] border-[#293352] outline-none placeholder:text-[20px] font-bold leading-5 text-[#8D8D8D]" />
      <div className="flex justify-between flex-wrap">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} text={card.text} />
        ))}
      </div>
    </div>
  );
};
