import Image, { StaticImageData } from 'next/image';
import c1 from '../../assets/card-course-1.jpg';
import Link from 'next/link';
import '../../styles/CardViewCity.css'

interface CardProps {
  image: StaticImageData; 
  text: string; 
}

const cardsData = [
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
  { image: c1, text: 'Python for Beginners - Learn Programming from scratch' },
 
];


const Card: React.FC<CardProps> = ({ image, text }) => (
  <Link href='/courses' className="view-city w-[140px] h-[160px] md:w-[31%] md:h-[200px] relative mb-8 transition-transform duration-300 hover:scale-105">
    
    <Image src={image} alt='' className='w-full h-full rounded-[13.94px]' width={264} height={337}/>
      <div className="w-[100%] text-center absolute top-[40%] z-10 ">
        <p className='text-[20px] font-bold leading-[25.14px] text-[#FFFFFF] p-1'>{text}</p>
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

