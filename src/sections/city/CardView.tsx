import Image, { StaticImageData } from 'next/image';
import c1 from '../../assets/city-1.jpg';
import '../../styles/CardCities.css'

interface CardProps {
  image: StaticImageData; 
  text: string; 
  title:string;
}
const cardsData = [
  { image: c1,title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
  { image: c1, title:'London' ,text: 'More Than 40 Course' },
];

const Card: React.FC<CardProps> = ({ image, text,title }) => (
    <div className="card-city w-[44%] h-[133px] md:w-[30.3%] md:h-[133px] relative mb-10">
      <Image src={image} alt='' className='w-full h-full rounded-2xl' width={400} height={200}/>
      <div className="main-card-city absolute bottom-0 w-full h-full  rounded-3xl">
    
        <div className="w-[100%] text-center flex flex-col items-center justify-center h-full">
        <h4 className='text-[30px] font-bold leading-[37.71px] text-[#FFFFFF]'>{title}</h4>
        <p className='text-[15px] font-normal leading-[18.86px] text-[#FFFFFF] p-[4px] border-t border-dashed border-[#FFFFFF] mt-6'>{text}</p>
        </div>
      </div>
    </div>
  );
  
  

export const CardView = () => {
  return (
         <div className=" flex justify-between flex-wrap  mt-8 mb-20">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} text={card.text} title={card.title} />
        ))}
      </div>
  );
};
