import Image, { StaticImageData } from 'next/image';
import c1 from '../../assets/card-city.jpg';
import '../../styles/CardCities.css'

interface CardProps {
  image: StaticImageData; 
  text: string; 
  title:string;
}
const cardsData = [
  { image: c1,title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
  { image: c1, title:'DUBAI' ,text: 'More than 20 courses' },
];

const Card: React.FC<CardProps> = ({ image, text,title }) => (
    <div className="w-[44%] h-[160px] md:w-[32%] md:h-[200px] relative mb-10">
      <Image src={image} alt='' className='w-full h-full rounded-2xl custom-shadow custom-gradient' width={400} height={200}/>
      <div className="absolute bottom-0 w-full h-full custom-gradient rounded-3xl">
        <div className="w-[100%] absolute bottom-4 left-[9.33px]">
          <h4 className='text-[20px] font-bold leading-[25.14px] text-[#FFFFFF]'>{title}</h4>
          <p className='text-[9px] font-light leading-[11.31px] text-[#FFFFFF]'>{text}</p>
        </div>
      </div>
    </div>
  );
  
  

export const CardView = () => {
  return (
    <div className="mt-4">
      <input type="text" placeholder="Search For Your City" className="hidden md:block w-[45%] mb-8 p-2 border-b-[1px] border-[#293352] outline-none placeholder:text-[20px] font-bold leading-5 text-[#8D8D8D]" />
      <div className=" flex justify-between flex-wrap">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} text={card.text} title={card.title} />
        ))}
      </div>
    </div>
  );
};
