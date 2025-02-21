// src/app/page.tsx
import { About } from "@/sections/home/About";
import { Categories } from "@/sections/home/Categories";
import { Cities } from "@/sections/home/Cities";
import { CourseDetails } from "@/sections/home/CourseDetails";
import { HeaderIndex } from "@/sections/home/HeaderIndex";
import { InfoCourse } from "@/sections/home/InfoCourse";
import { UpcomingCourse } from "@/sections/home/UpcomingCourse";

export default function Home() {
  return (

  <div className="">
        <HeaderIndex />
     <InfoCourse />
       <CourseDetails />
      <UpcomingCourse />
      <About />
      <Cities />
      <Categories />
  </div>
  );
}
