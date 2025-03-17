"use client";
import Link from 'next/link';

const InputField: React.FC<{ label: string; type?: string; placeholder?: string; isSelect?: boolean }> = ({ label, type = "text", placeholder, isSelect }) => (
    <div className="flex flex-col w-full mt-4">
        <label  className="text-[12px] font-bold leading-5 text-[#293352]">{label}</label>
        {isSelect ? (
            <select className="mt-2 border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none">
                <option value="">Course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
            </select>
        ) : (
            <input type={type} className="mt-2 border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none" placeholder={placeholder} />
        )}
    </div>
);

const Enquire: React.FC = () => {
    return (
        <div className="w-[89%] mx-auto mt-[40px]">
            <h5 className="text-[36px] font-black leading-[57.24px] text-[#293352]">Enquire</h5>
            <form className="mt-6 mb-[91px]">
                <InputField label="Full Name" placeholder="Aleen" />
                <InputField label="Course" isSelect />
                <InputField label="Phone" />
                <InputField label="Email" type="email" placeholder="example@gmail.com" />
                <div className="mt-4">
                    <label  className="text-[12px] font-bold leading-5 text-[#293352]">Message</label>
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
