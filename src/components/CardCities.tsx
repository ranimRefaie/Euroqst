import Image from 'next/image'
import city from '../assets/card-city.jpg'
export const CardCities = () => {
  return (
    <div className="w-[43.75%] h-[338px] mb-2 md:w-[17%] md:mb-0 relative cursor-pointer transition-transform duration-300 hover:scale-105">
      <Image src={city} alt='' className='rounded-3xl w-full h-full' width={224} height={338} />
      <div className="absolute bottom-10 left-4
">
        <h4 className="text-[32px] font-bold text-[#FFFFFF]">DUBAI</h4>
        <p className='text-[14px] font-light text-[#FFFFFF]'>More than 20 courses</p>
      </div>
    </div>


  )
}


