"use client";
import Image from "next/image";

interface SubActivitiesProps {
  icon: string;
  notification: string;
  time: string;
}

  const SubActivities: React.FC<SubActivitiesProps> = ({ icon, notification, time }) => {
    return (
      <div className="flex items-start p-2 mt-1">
        <div className="flex baseline h-5 " >
         <div className="rounded-8"><Image src={icon} alt="Icon" width={24} height={24} /></div>
        </div>
        <div className="flex flex-col  ml-2 ">
          <div className="font-sans text-sm text-left">
           {notification}
          </div>
          <div className="text-xs opacity-40">{time}</div>
        </div>
      </div>
    );
  };
  
  export default SubActivities;