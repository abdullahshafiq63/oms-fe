"use client";
import Image from "next/image";
import React from "react";
import { Card } from "antd";

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
  const cardStyle = {
    width: 275,
    height: 150,
    padding: 24,
    radius: 16,
    backgroundColor: backgroundColor,
  };

  const veiwStyle = {
    fontWeight: 600,
  };

  return (
    <div className="cards-container flex">
      <Card className="flex gap-y-7" style={cardStyle}>
        <p>{title}</p>
        <div className="gap-4"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <p 
            style={{
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            {amount}
          </p>
          <p 
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {percent}
            <span className="pl-2">
              <Image src="/ArrowRise.png" alt="ArrowRise" width={24} height={24} />
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CardsComponent;
