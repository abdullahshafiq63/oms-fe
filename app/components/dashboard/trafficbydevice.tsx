"use client";

import React from "react";

// Define the types for props and devices
export interface Device {
  name: string;
  bars: string[];
}

export interface TrafficByDeviceProps {
  devices: Device[];
}

const TrafficByDevice: React.FC<TrafficByDeviceProps> = ({ devices }) => {
  return (
    <div className="w-1/2 p-6 h-full rounded-2xl bg-slate-100">
      Traffic by Device
      <div className="flex h-[196px] mt-4">
        <div className="flex flex-col w-[23px] gap-7">
          {["30K", "20K", "10K", "0"].map((value, index) => (
            <div
              key={index}
              className="text-black opacity-40 font-inter text-[12px] font-normal leading-[18px] text-right"
            >
              {value}
            </div>
          ))}
        </div>
        <div className="flex w-[345px] h-[196px] justify-between pb-6">
          <div className="flex items-center ml-2">
            {devices.map((device, index) => (
              <div
                key={index}
                className="text-black opacity-40 h-full w-[70.5px] flex flex-col-reverse text-center items-center "
              >
                {device.name}
                {device.bars.map((bar, barIndex) => (
                  <img
                    key={barIndex}
                    className="w-[28px] h-[21px]"
                    src={bar}
                    alt="bar"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficByDevice;
