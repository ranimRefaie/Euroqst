"use client";
import Link from 'next/link';





const Enquire: React.FC = () => {

    return (
        <div className="w-[89%] mx-auto mt-[104px]">
            <h5 className="text-[36px] font-black leading-[57.24px] text-[#293352]">Enquire</h5>
            <form className="mt-6 mb-[91px]">
                <div className="flex flex-col w-full mt-4">
                    <label>Full Name</label>
                    <input type="text" className="mt-2 border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none" placeholder="Aleen" />
                </div>

                <div className="flex flex-col w-full mt-4">
                    <label>Course</label>
                    <select className="mt-2 border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none">
                        <option value=""> Course</option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                        <option value="course3">Course 3</option>
                    </select>
                </div>

                <div className="flex flex-col w-full mt-4">
                    <label>Phone</label>
                    <input type="text" className="mt-2 border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none"  />

                </div>

                <div className="flex flex-col w-full mt-4">
                    <label>Email</label>
                    <input type="email" className="mt-2 border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none" placeholder="example@gmail.com" />
                </div>

                <div className="mt-4">
                    <label>Message</label>
                    <textarea className="w-full h-[106.5px] border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none" placeholder="Write your message.."></textarea>
                </div>

                <div className="flex justify-end mt-6">
                    <Link href='' className='bg-[#293352] px-[72px] py-[10px] rounded-[10px] text-[14px] leading-5 text-center text-[#FFFFFF]'>Submit</Link>
                </div>
            </form>
        </div>
    );
};

export default Enquire;

