"use client";
import React, { useState, useRef, useEffect } from 'react';
import '../styles/infoCourse.css';
import { IoIosArrowDown } from 'react-icons/io';

const DropdownButton: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
    <button 
        onClick={onClick} 
        className="mb-4 w-[100%] px-4 py-3 md:p-0 bg-[#FFFFFF0A] md:bg-transparent md:w-auto md:mb-0 relative text-[#ffffff] border-none cursor-pointer text-[20px] font-400 flex items-center gap-[14px] justify-between"
    >
        {label}
        <IoIosArrowDown />
    </button>
);


export const DropdownHeader = () => {
    const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
        startDate: false,
        endDate: false,
    });
    
    const dropdownRefs = {
        startDate: useRef<HTMLDivElement | null>(null),
        endDate: useRef<HTMLDivElement | null>(null),
    };

    const toggleDropdown = (key: string) => {
        setIsOpen(prevState => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const handleClickOutside = (event: MouseEvent) => {
        Object.values(dropdownRefs).forEach(ref => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(prevState => ({
                    ...prevState,
                    startDate: false,
                    endDate: false,
                }));
            }
        });
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex-col md:flex-row flex justify-between ">
            <div className="dropdown relative inline-block" ref={dropdownRefs.startDate}> 
                <DropdownButton label="START DATE" onClick={() => toggleDropdown('startDate')} />
                {isOpen.startDate && (
                    <div className="dropdown-content w-[90%] left-[5%] md:w-[230px] absolute z-10 rounded-[5px] border-[0.5px] border-[#D4D4D4] pl-[24px] top-[40px] bg-[#ffffff] pt-[23px] pb-8">
                        <div className="checkboxes flex flex-col gap-4">
                            {["Within next week", "Within next month", "Within next 3 months", "Within next 6 months", "Within next year", "Available any time"].map((option, index) => (
                                <label key={index} className='text-[16px] font-normal leading-[18.75px] text-[#293352]'>
                                    <input type="checkbox" /> {option}
                                </label>
                            ))}
                        </div>
                        <div className="choose-date mt-[88px]">
                            <p className='text-[16px] leading-[18.75px] text-[#293352] font-bold mb-2'>Starting After</p>
                            <input type="date" className="date-input" />
                        </div>
                    </div>
                )}
            </div>

            <div className="dropdown relative inline-block" ref={dropdownRefs.endDate}> 
                <DropdownButton label="END DATE" onClick={() => toggleDropdown('endDate')} />
                {isOpen.endDate && (
                    <div className="dropdown-content w-[90%] left-[5%] md:w-[230px]  absolute z-10 rounded-[5px] border-[0.5px] border-[#D4D4D4] pl-[24px] top-[40px] bg-[#ffffff] pt-[23px] pb-8">
                        <div className="checkboxes flex flex-col gap-4">
                        {["Within next week", "Within next month", "Within next 3 months", "Within next 6 months", "Within next year", "Available any time"].map((option, index) => (
                                <label key={index} className='text-[16px] font-normal leading-[18.75px] text-[#293352]'>
                                    <input type="checkbox" /> {option}
                                </label>
                            ))}
                        </div>
                        <div className="choose-date mt-[88px]">
                            <p className='text-[16px] leading-[18.75px] text-[#293352] font-bold mb-2'>Starting After</p>
                            <input type="date" className="date-input" />
                        </div>
                    </div>
                )}
            </div>

            {[ "VENUE", "CATEGORY", "DURATION"].map((label, index) => (
                <DropdownButton key={index} label={label} onClick={() => {}} />
            ))}
        </div>
    );
};
