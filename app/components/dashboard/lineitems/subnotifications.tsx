"use client";
import Image from "next/image";

interface SubActivitiesProps {
  icon: string;
  notification: string;
  time: string;
}

const SubNotifications: React.FC<SubActivitiesProps> = ({ icon, notification, time }) => {
  return (
    <div className=" flex w-full h-14 p-2 gap-2 rounded-3 text-4 overflow-hidden">
      <div className="flex baseline h-5" >
        <div className="w-6 h-6 flex justify-center align-center w-6 h-6 p-1 rounded-lg ">
          <Image src={icon} alt="Icon" width={20} height={20} />
        </div>
      </div>
      <div className="flex flex-col ">
        <div className=" font-normal text-sm leading-5 text-left ">
           {notification}
        </div>
        <span className="w-52 text-xs opacity-40 ">{time}</span>
       </div>
    </div>
  );
};

export default SubNotifications;