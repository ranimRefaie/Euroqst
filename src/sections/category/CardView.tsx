import { LucideChevronRight } from "lucide-react";

interface CardProps {
  isHighlighted: boolean; 
  text: string; 
}
const Card: React.FC<CardProps> = ({ isHighlighted, text }) => (
  <div className={`w-[100%] flex md:w-[45%] justify-between items-center py-6 px-4 rounded-2xl ${isHighlighted ? 'bg-[#293352] text-[#FFFFFF]' : 'text-[#293352] border-2 border-[#AFBFD3]'}`}>
      <p className="text-[16px] font-normal leading-[20.11px]">{text}</p>
      <LucideChevronRight size={14} />
  </div>
);

export const CardView = () => {
  const items = [
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
  ];

  const itemsMobile = [
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
    { text: "Customer service management", highlighted: true },
    { text: "Customer service management", highlighted: false },
  ];

  return (
    <div className="mt-4">
      <input type="text" placeholder="Search For Your City" className="hidden md:block w-[45%] mb-8 p-2 border-b-[1px] border-[#293352] outline-none placeholder:text-[20px] font-bold leading-5 text-[#8D8D8D]" />
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div className="hidden gap-2 md:flex justify-between" key={index}>
            <Card isHighlighted={item.highlighted} text={item.text} />
            <Card isHighlighted={item.highlighted} text={item.text} />
          </div>
        ))}

{itemsMobile.map((item, index) => (
          <div className="flex flex-col gap-2 md:hidden justify-between" key={index}>
            <Card isHighlighted={item.highlighted} text={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
};
