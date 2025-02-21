import { CategoriesCard } from '@/components/CategoriesCard'
import { TitleSection } from '@/components/TitleSection'

export const Categories = () => {
  return (
    <div>
        <TitleSection title='Discover Categories' desc='Innovativeness within the framework of leading strategically as well as managing changes.'/>
        <div className="hidden w-[89%] my-[80px] mx-auto md:flex flex-wrap justify-center gap-6">
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
        </div>

        <div className="md:hidden w-[92.5%]  my-[80px] mx-auto flex flex-wrap justify-between">
        <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
          <CategoriesCard/>
        </div>
    </div>
  )
}
