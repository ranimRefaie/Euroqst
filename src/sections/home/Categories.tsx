import { CategoriesCard } from '@/components/CategoriesCard'
import { TitleSection } from '@/components/TitleSection'

export const Categories = () => {
  return (
    <div>
      <TitleSection title='Discover Categories' desc='Innovativeness within the framework of leading strategically as well as managing changes.' color='#293352' />
      <div className="hidden w-[89%] mb-16 mx-auto md:flex flex-wrap justify-center gap-6">
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </div>

      <div className="md:hidden w-[92.5%]  my-[80px] mx-auto flex flex-wrap justify-between">
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </div>
    </div>
  )
}
