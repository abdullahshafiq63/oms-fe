"use client";
import Image from "next/image";


interface SubActivitiesProps {
  icon: string;
  notification: string;
  time: string;
}

  const SubActivities: React.FC<SubActivitiesProps> = ({ icon, notification, time }) => {
  
    return (
      <div className="flex items-start w-full h-[54px] p-[8px] rounded-[12px] mt-2 pt-2">
        <p className="flex baseline h-5 " >
         <div className="rounded-8"><Image src={icon} alt="Icon" width={24} height={24} /></div>
        </p>

        <div className="flex flex-col  ml-2 ">
          <div className="font-sans text-[14px] text-left">
           {notification}
          </div>
          <div className="w-full text-[12px] opacity-40">{time}</div>
        </div>
      </div>
    );
  };
  
  export default SubActivities;