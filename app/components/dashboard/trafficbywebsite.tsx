import React from 'react';

const TrafficByWebsite: React.FC = () => {
  return (
    <div className="w-1/5 p-6 h-full rounded-2xl bg-slate-100">
      <div>Traffic by Website</div>

      <div className="flex">
        <div className="flex flex-col gap-5 mt-5">
          <div>Google</div>
          <div>Youtube</div>
          <div>Instagram</div>
          <div>Google</div>
          <div>Pinterest</div>
          <div>Twitter</div>
        </div>

        <div className="flex flex-col mt-7 ml-5 w-[80px]">
          <div className="flex gap-[2px] w-full h-[34.33px]">
            <img className="rounded-full w-[9.71px] h-[2.33px]" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-[9.71px] h-[2.33px]" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-[9.71px] h-[2.33px]" src="/bar3.png" alt="Bar image" />
          </div>
          <div className="flex gap-[2px] w-full h-[34.33px] pt-2">
            <img className="rounded-full w-[18.5px] h-[2.33px]" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-[18.5px] h-[2.33px]" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-[18.5px] h-[2.33px]" src="/bar3.png" alt="Bar image" />
          </div>
          <div className="flex gap-[2px] w-full h-[34.33px] pt-4">
            <img className="rounded-full w-[11.67px] h-[2.33px]" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-[11.67px] h-[2.33px]" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-[11.67px] h-[2.33px]" src="/bar3.png" alt="Bar image" />
          </div>
          <div className="flex gap-[2px] w-full h-[34.33px] pt-5">
            <img className="rounded-full w-[25.33px] h-[2.33px]" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-[25.33px] h-[2.33px]" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-[25.33px] h-[2.33px]" src="/bar3.png" alt="Bar image" />
          </div>
          <div className="flex gap-[2px] w-full h-[34.33px] pt-7">
            <img className="rounded-full w-[8.71px] h-[2.33px]" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-[8.71px] h-[2.33px]" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-[8.71px] h-[2.33px]" src="/bar3.png" alt="Bar image" />
          </div>
          <div className="flex gap-[2px] w-full h-[34.33px] pt-9">
            <img className="rounded-full w-[14.4px] h-[2.33px]" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-[14.4px] h-[2.33px]" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-[14.4px] h-[2.33px]" src="/bar3.png" alt="Bar image" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrafficByWebsite;