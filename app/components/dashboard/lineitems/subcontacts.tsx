import Image from "next/image";

interface SubContactsProps {
  className?: string; // Optional className
  icon: string;
  notification: string;
}

const SubContacts: React.FC<SubContactsProps> = ({ className, icon, notification }) => {
  
  return (
    <div className="flex w-full h-[45px] p-[8px] rounded-[12px]">
      <div className=" h-5.5 text-xs " >
        <Image className="rounded-full" src={icon} alt="Icon" width={24} height={24} />
      </div>
      <div className="font-sans text-[14px] text-left ml-2">
         {notification}
        </div>
    </div>
  );
};

export default SubContacts;