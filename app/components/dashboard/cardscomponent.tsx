"use client";

import Image from "next/image";
import React from "react";

interface CardsComponentProps {
  backgroundColor: string;
  title: string;
  amount: string;
  percent: string;
  icon?: string; // Optional if not used
}

const CardsComponent: React.FC<CardsComponentProps> = ({
  backgroundColor,
  title,
  amount,
  percent,
  icon,
}) => {
  return (
    <div className="cards-container h-40 rounded-2xl flex w-1/4" style={{ backgroundColor }}>
      <div 
        className=" p-6  flex flex-col bg-{'{backgroundColor}'}"
      >
        <p>{title}</p>
        <div className="flex justify-between items-center mt-12 gap-4">
          <p className="text-2xl font-semibold">
            {amount}
          </p>
          <p className="flex items-center">
            {percent}
            <span className="pl-2">
              <Image src="/ArrowRise.png" alt="ArrowRise" width={24} height={24} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
