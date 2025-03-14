"use client";
import { useState,useRef, useEffect } from 'react';
import '../styles/infoCourse.css';
import { IoIosArrowDown } from 'react-icons/io';

const DropdownButton: React.FC<{ label: string; options?: string[]; onSelect?: (option: string) => void; }> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="mb-4 w-[100%] px-4 py-3 md:px-[14.5px] md:py-[10.5px] rounded-[20px] bg-[#FFFFFF0A] md:bg-transparent md:w-auto md:mb-0 text-[#ffffff] border border-[#FFFFFF] cursor-pointer text-[14px] font-medium leading-5 flex items-center gap-[8px] justify-between"
        onClick={handleToggle}
      >
        {label}
        <IoIosArrowDown />
      </button>
      {isOpen && options && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded shadow-md mt-1 w-full">
          {options.map((option, index) => (
            <button
              key={index}
              className="block text-left w-full px-4 py-2 hover:bg-gray-200"
              onClick={() => {
                if (onSelect) onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const DropdownHeader = () => {
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isDateInputVisible, setDateInputVisible] = useState<boolean>(false);
  const dateInputRef = useRef<HTMLDivElement | null>(null);

  
  const toggleDateInput = () => {
    setDateInputVisible(!isDateInputVisible);
  };

  const handleClickOutsideDateInput = (event: MouseEvent) => {
    if (dateInputRef.current && !dateInputRef.current.contains(event.target as Node)) {
      setDateInputVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideDateInput);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDateInput);
    };
  }, []);

  return (
    <div className="flex-col md:flex-row flex justify-between w-[78%] gap-8 mx-auto">
      <button className='mb-[43px] w-[100%] px-4 py-3 md:px-[22px] md:py-[10.5px] rounded-[20px] bg-[#FFFFFF0A] md:bg-transparent md:w-auto md:mb-0 text-[#ffffff] border border-[#FFFFFF] cursor-pointer text-[14px] font-medium flex items-center '>Enter Keyword</button>
      
      <DropdownButton 
        label={selectedVenue || "Select Venue"} 
        options={['London', 'Australia', 'Istanbul']} 
        onSelect={setSelectedVenue} 
      />
      
      <div className="relative" ref={dateInputRef}>
        <button 
          className="mb-4 w-[100%] px-4 py-3 md:px-[14.5px] md:py-[10.5px] rounded-[20px] bg-[#FFFFFF0A] md:bg-transparent md:w-auto md:mb-0 text-[#ffffff] border border-[#FFFFFF] cursor-pointer text-[14px] font-medium flex items-center gap-[8px] justify-between" 
          onClick={toggleDateInput}
        >
          {selectedDate ? selectedDate : "Select Date"}
          <IoIosArrowDown />
        </button>
        {isDateInputVisible && (
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)} 
            className="absolute border rounded p-2 mt-1" 
          />
        )}
      </div>
      <DropdownButton 
        label={selectedCategory ||"Select Category" }
        options={['Category 1', 'Category 2', 'Category 3']} 
        onSelect={setSelectedCategory} 
      />
      
      <DropdownButton 
        label={selectedDuration ||"Select Duration" }
        options={['1 Day', '2 Days', '3 Days']} 
        onSelect={setSelectedDuration} 
      />
      
      <button className='text-[14px] font-medium leading-5 text-[#293352] bg-[#AFBFD3] rounded-[20px] border border-[#00000080] py-[10px] px-10'>Search</button>
    </div>
  );
};