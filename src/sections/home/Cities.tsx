import { CardCities } from '@/components/CardCities'
import { TitleSection } from '@/components/TitleSection'
import { LucideArrowRight } from 'lucide-react'
import Link from 'next/link'


export const Cities = () => {
  return (
    <div>
      <TitleSection title='DISCOVER ALL CITIES' desc='Innovativeness within the framework of leading strategically as well as managing changes.'  color='#000000'/>

      <div className="hidden md:flex w-[93%] mx-auto gap-4 items-center">
        <CardCities />
        <CardCities />
        <CardCities />
        <CardCities />
        <CardCities />
        <Link href='/cities' className='flex items-center gap-2'>See All <span className='w-10 h-10 bg-[#AFBFD3] rounded-[50%] flex items-center justify-center transition-transform duration-300 hover:scale-105'><LucideArrowRight /></span> </Link>
      </div>

        <div className="w-[92.5%] mx-auto flex justify-between flex-wrap md:hidden mt-2">
        <CardCities />
        <CardCities />
        <CardCities />
        <CardCities />
        <CardCities />
        <CardCities />
        <CardCities />
        <CardCities />
        <CardCities />
        <CardCities />
        <CardCities />
        <CardCities />
        </div>
      </div>

  )
}
