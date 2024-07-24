import Image from "next/image";


interface SubActivitiesProps {
  icon: string;
  notification: string;
  time: string;
}

const SubNotifications: React.FC<SubActivitiesProps> = ({ icon, notification, time}) => {
  

  return (
    <div className=" flex w-full h-[54px] p-[8px] gap-[8px] rounded-[12px] text-[16px] overflow-hidden">
      <p className="flex baseline h-5 text-xs" >
        <div className="w-6 h-6 flex justify-center align-center w-[24px] h-[24px] p-[4px] rounded-lg ">
          <Image src={icon} alt="Icon" width={20} height={20} />
        </div>
      </p>

      <div className="flex flex-col ">
        <div className=" font-normal text-[14px] leading-[20px] text-left ">
           {notification}
        </div>
        <span className="w-[200px] text-[12px] opacity-40 ">{time}</span>
       </div>
    </div>
  );
};

export default SubNotifications;