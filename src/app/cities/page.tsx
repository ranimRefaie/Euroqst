"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import { CardView } from "@/sections/cities/CardView";
import {ListView}  from "@/sections/cities/ListView";
import Link from "next/link";
import { MdOutlineGridView } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";




const Cities: React.FC = () => {
  const [view, setView] = useState<'card' | 'list'>('card');
  return (
      <div>
          <Header />
          <div className=" w-[89%] mx-auto  mt-8">
              <div className="flex justify-between items-center mb-8">
                  <Link href='' className=" flex gap-2 items-center text-4xl font-black leading-[57.24px] text-[#293352]"><FaArrowLeft/> DISCOVER CITIES </Link>
                  <div className="flex">
                      <button
                          onClick={() => setView('card')}
                          className={`px-4 py-[15px] flex gap-1 items-center text-center ${view === 'card' ? 'bg-[#AFBFD3] border border-[#EBEEF2] text-white' : 'bg-white border border-[#EBEEF2] text-[#293352]'} rounded-l-lg`}
                      >
                          <MdOutlineGridView />
                          <span className="hidden md:block">Show Cards View</span>
                      </button>
                      <button
                          onClick={() => setView('list')}
                          className={`px-4 py-[15px] flex gap-1 items-center text-center ${view === 'list' ? 'bg-[#AFBFD3] border border-[#EBEEF2] text-white' : 'bg-white border border-[#EBEEF2] text-[#293352]'} rounded-r-lg`}
                      >
                          <IoIosMenu />
                          <span className="hidden md:block">Show List View</span>
                      </button>
                  </div>
              </div>
              <p className="text-[20px] font-normal leading-[25.14px] text-[#000000]">
              Discover the vibrant cities where we offer our top-tier training courses, meticulously designed to meet the evolving demands of the modern workforce.                </p>
          </div>
          <div className="w-[88%] mx-auto">
              {view === 'card' && <CardView />}

              {view === 'list' && <ListView />}
          </div>       
      </div>
  );
};

export default Cities;