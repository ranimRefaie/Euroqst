"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import img from '../../assets/bg-card.jpg'
import '../../styles/UpcomingCourse.css'
import { TitleSection } from "@/components/TitleSection";



export const UpcomingCourse = () => {
  return (
    <div className="">
      <TitleSection title='UPCOMING COURSES' desc='Innovativeness within the framework of leading strategically as well as managing changes.' />

    </div>
  );
};

