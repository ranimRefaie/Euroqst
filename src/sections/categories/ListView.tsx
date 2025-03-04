import { LucideChevronRight } from "lucide-react";
import Link from "next/link";

interface CardProps {
  text: string; 
}
const Card: React.FC<CardProps> = ({  text }) => (
  <Link href='/category' className={`w-[90%] flex md:w-[100%] justify-between items-center py-6 px-4 rounded-2xl bg-[#293352] text-[#FFFFFF]`}>
      <p className="text-[12px]  md:text-[16px] font-normal leading-[20.11px]">{text}</p>
      <LucideChevronRight size={14} />
  </Link>
);

export const ListView = () => {
  const items = [
    { text: "Purchasing and Logistics and Inventory Management Courses",  },
    { text: "Purchasing and Logistics and Inventory Management Courses", },
    { text: "Purchasing and Logistics and Inventory Management Courses",  },
    { text: "Purchasing and Logistics and Inventory Management Courses", },
    { text: "Purchasing and Logistics and Inventory Management Courses",  },
    { text: "Purchasing and Logistics and Inventory Management Courses", },
    { text: "Purchasing and Logistics and Inventory Management Courses",  },
    { text: "Purchasing and Logistics and Inventory Management Courses", },
    { text: "Purchasing and Logistics and Inventory Management Courses",  },
  ];



  return (
     <div className="flex flex-col gap-4 my-8">
        {items.map((item, index) => (
          <div className="" key={index}>
            <Card text={item.text} />

          </div>
        ))}
      </div>

  );
};