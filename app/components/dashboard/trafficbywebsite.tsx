"use client";

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
        <div className="flex flex-col mt-7 ml-5 w-20">
          <div className="flex gap-0.5 w-full h-8">
            <img className="rounded-full w-3 h-0.5" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-3  h-0.5" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-3  h-0.5" src="/bar3.png" alt="Bar image" />
          </div>
          <div className="flex gap-0.5 w-full h-8 pt-2">
            <img className="rounded-full w-4.5  h-0.5" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-4.5  h-0.5" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-4.5  h-0.5" src="/bar3.png" alt="Bar image" />
          </div>
          <div className="flex gap-0.5 w-full h-8 pt-5">
            <img className="rounded-full w-3 h-0.5" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-3  h-0.5" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-3  h-0.5" src="/bar3.png" alt="Bar image" />
          </div>
          <div className="flex gap-0.5 w-full h-8 pt-7">
            <img className="rounded-full w-6.5  h-0.5" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-6.5  h-0.5" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-6.5  h-0.5" src="/bar3.png" alt="Bar image" />
          </div>
          <div className="flex gap-0.5 w-full h-8 pt-9">
            <img className="rounded-full w-2  h-0.5" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-2  h-0.5" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-2  h-0.5" src="/bar3.png" alt="Bar image" />
          </div>
          <div className="flex gap-0.5 w-full h-8 pt-10">
            <img className="rounded-full w-3.5  h-0.5" src="/bar1.png" alt="Bar image" />
            <img className="rounded-full w-3.5  h-0.5" src="/bar2.png" alt="Bar image" />
            <img className="rounded-full w-3.5  h-0.5" src="/bar3.png" alt="Bar image" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrafficByWebsite;