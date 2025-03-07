
"use client";
import { TitleSection } from "@/components/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import c1 from '../../assets/card-course-1.jpg';
import c2 from '../../assets/card-course-2.jpg';
import c3 from '../../assets/card-course-3.jpg';
import c4 from '../../assets/card-course-4.jpg';
import c5 from '../../assets/card-course-5.jpg';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import '@/styles/UpcomingCourse.css'
import { CourseCard } from "../Course/SecCards";


export const UpcomingCourse = () => {
  const courses = [
    { image: c1, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c2, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c3, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c4, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c5, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c1, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c2, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c3, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c4, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },
    { image: c5, title: "Python for Beginners - Learn Programming from scratch", startDate: "23-2-2025", endDate: "23-2-2025", location: "LONDON", duration: "11 Weeks longs" },

  ];
  return (
    <div className="">
      <TitleSection title='UPCOMING COURSES' desc='Innovativeness within the framework of leading strategically as well as managing changes.' color='#000000' />
      
      {/* حاوية للكروت */}
      <div className="course-container">
        {/* استخدام Swiper للشاشات الكبيرة */}

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={2} // Show the main slide + parts of side slides
            spaceBetween={50}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              0: { // For screens <= 714px
                slidesPerView: 1,
                spaceBetween: 5,
              },
              721: { // For screens >= 721px
                slidesPerView: 2,
                spaceBetween: 10,
              },
              913: { // For screens >= 913px
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }} 
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 0.6,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="swiper-courses"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index} className="swiper-slide-custom">
                <CourseCard {...course} />
              </SwiperSlide>
            ))}
          </Swiper>


        {/* عرض الكروت بدون Swiper للشاشات الصغيرة */}
        <div className="mobile-course-view">
          {courses.map((course, index) => (
            <div key={index} className="course-card-mobile">
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

