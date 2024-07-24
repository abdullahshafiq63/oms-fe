"use client";

import React from 'react';
import Chart from "./chart";


const UserStats: React.FC = () => {
    return (
      <div className="w-4/5 p-6 h-full rounded-2xl bg-slate-100">
        <div className="flex w-[750px] h-[22px] rounded-md gap-4">
          <div className="w-20 h-5 ml-6">Total Users</div>
          <div className="items-center space-x-2 ml-3 opacity-40">
            Total Products
          </div>
          <div className="items-center space-x-2 ml-3 opacity-40">
            Total Sales
          </div>
          <div className="opacity-40 ml-4">|</div>
          <div className="items-center space-x-2 ml-3 flex">
            <img src="/Vector (6).png" alt="This year icon" />
            <span className="ml-2">This year</span>
          </div>
          <div className="items-center space-x-2 ml-3 flex">
            <img src="/Vector (8).png" alt="Last year icon" />
            <span className="ml-2">Last year</span>
          </div>
        </div>
        <div className="h-full mt-4">
          <Chart />
        </div>
      </div>
    );
  };
  
  export default UserStats;