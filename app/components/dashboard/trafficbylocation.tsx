import React from 'react';
import { Progress } from 'antd';


interface ProgressItem {
  percent: number;
  strokeColor: string;
}

interface LocationItem {
  color: string;
  country: string;
  percentage: string;
}

const TrafficByLocation: React.FC = () => {
  const progressItems: ProgressItem[] = [
    { percent: 95, strokeColor: 'linear-gradient(to right, #3b82f6, #ffffff, #ef4444)' },
    { percent: 75, strokeColor: 'linear-gradient(to right, #ef4444, #ffffff, #ef4444)' },
    { percent: 60, strokeColor: 'linear-gradient(to right, #10b981, #ffffff, #ef4444)' },
    { percent: 50, strokeColor: 'linear-gradient(to right, #ffffff, #ef4444, #ffffff)' },
    { percent: 30, strokeColor: 'linear-gradient(to right, #10b981, #ffffff, #10b981)' },
    { percent: 99, strokeColor: 'linear-gradient(to right, #000000, #ffffff)' },
  ];

  const locationItems: LocationItem[] = [
    { color: 'bg-gradient-to-r from-blue-500 via-white to-red-500', country: 'United States', percentage: '50%' },
    { color: 'bg-gradient-to-r from-red-500 via-white to-red-500', country: 'Canada', percentage: '40%' },
    { color: 'bg-gradient-to-r from-green-500 via-white to-red-500', country: 'Mexico', percentage: '30%' },
    { color: 'bg-gradient-to-r from-white via-red-500 to-white', country: 'England', percentage: '20%' },
    { color: 'bg-gradient-to-r from-green-500 via-white to-green-500', country: 'Pakistan', percentage: '10%' },
    { color: 'bg-gradient-to-r from-black via-white to-black', country: 'Other', percentage: '5%' },
  ];

  return (
    <div className="w-1/2 p-6 h-full rounded-2xl bg-slate-100">
      Traffic by Location
      <div className="flex justify-between">
        <div className="pt-4 sh-full">
          <div className="flex flex-col gap-[10px]" style={{ width: 250 }}>
            {progressItems.map((item, index) => (
              <Progress
                key={index}
                percent={item.percent}
                strokeColor={item.strokeColor}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-46 pt-4 sh-full gap-3 rounded-4">
          {locationItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 ${item.color} rounded-full`}></div>
              <div className="flex-1 text-left">{item.country}</div>
              <div className="text-left ml-8">{item.percentage}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrafficByLocation;
