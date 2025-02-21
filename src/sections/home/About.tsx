import Image from "next/image"
import img_about from '@/assets/Frame 1000006755.png'
import { TitleSection } from "@/components/TitleSection"
import { DarkButton } from "@/components/DarkButton"

export const About = () => {
  return (
    <section className="bg-[#F8F8F8] p-1">
    <TitleSection title='ABOUT EURO QUEST ACADEMEY' desc='Innovativeness within the framework of leading strategically as well as managing changes.'/> 

    <div className="flex-col w-[89%] flex md:flex-row mx-auto my-[64px] justify-center gap-11">
        <Image src={img_about}  alt=""  width={624} height={476}/>
        <div className="about-description">
            <h1 className="text-[20px] leading-[20.11px] md:text-[48px] md:leading-[72px] font-normal text-[#293352]"> EUROQUEST</h1>
            <p className="text-xs leading-[15.08px] md:text-[14px] font-normal md:leading-[30px] text-[#080808] my-6">Balanced Score Training Center is an international training institute that seeks to enhance
                organizational performance and professional skills through its structured programs across different
                organizational levels. Our aim is to help organizations and people with creative training and
                consulting solutions that combine theoretical knowledge with practical application, with a view to
                achieving effective and lasting outcomes
            </p>
<DarkButton/>
        </div>
    </div>
</section>
  )
}
