import Link from "next/link";


const InputField: React.FC<{ label: string; type?: string; placeholder?: string }> = ({ label, type = "text", placeholder }) => (
    <div className="flex flex-col w-full mt-4">
        <label className="text-[12px] font-bold leading-5 text-[#293352]">{label}</label>
        <input type={type} className="mt-2 border border-[#87898FDE] rounded-lg px-2 py-[5px] outline-none" placeholder={placeholder} />
    </div>
);

const Register: React.FC = () => {
    return (
        <div className="w-[89%] mx-auto mt-[40px] mb-16">
            <h5 className="text-[36px] font-black leading-[57.24px] text-[#293352]">Register</h5>
            
            <form className="mt-6 mb-4">
                <h6 className="text-[20px] font-black text-[#293352]">Contact information</h6>
                <div className="flex-col md:flex-row flex gap-4">
                    <InputField label="Full Name" placeholder="Aleen" />
                    <InputField label="Last Name" placeholder="Aleen" />
                </div>
                <div className="flex-col md:flex-row flex gap-4">
                    <InputField label="Email" type="email" placeholder="example@gmail.com" />
                    <InputField label="Position" placeholder="Aleen" />
                </div>
                <InputField label="Mobile number" />
            </form>

            <form className="mb-4">
                <h6 className="text-[20px] font-black text-[#293352]">Company information</h6>
                <div className="flex-col md:flex-row flex gap-4">
                    <InputField label="Company" placeholder="example@gmail.com" />
                    <InputField label="City" placeholder="example@gmail.com" />
                </div>
                <InputField label="Address" type="email" placeholder="example@gmail.com" />
            </form>

            <form className="mb-4">
                <h6 className="text-[20px] font-black text-[#293352]">Company information</h6>
                <div className="flex-col md:flex-row flex gap-4">
                    <InputField label="First Name" placeholder="Aleen" />
                    <InputField label="Last Name" placeholder="Aleen" />
                </div>
                <div className="flex-col md:flex-row flex gap-4">
                    <InputField label="Email" type="email" placeholder="Aleen" />
                    <InputField label="Position" placeholder="Aleen" />
                </div>

                <InputField label="Mobile number" />
            </form>

            <div className="flex justify-end mt-6">
                    <Link href='' className='bg-[#293352] px-[72px] py-[10px] rounded-[10px] text-[14px] leading-5 text-center text-[#FFFFFF]'>Submit</Link>
                </div>
        </div>
    );
};

export default Register;
