import React from 'react';
import CardsComponent from './cardscomponent';

interface CardData {
  title: string;
  amount: string;
  backgroundColor: string;
  percent: string;
}

const cardData: CardData[] = [
  { title: "Views", amount: "7,625", backgroundColor: "#E3F5FF", percent: "+11.02%" },
  { title: "Visits", amount: "3,671", backgroundColor: "#E5ECF6", percent: "+11.02%" },
  { title: "Views", amount: "156", backgroundColor: "#E3F5FF", percent: "+11.02%" },
  { title: "Views", amount: "2,318", backgroundColor: "#E5ECF6", percent: "+11.02%" }
];

const CardList: React.FC = () => {
  return (
    <div className="flex gap-11 mt-7">
      {cardData.map((card, index) => (
        <CardsComponent
          key={index}
          title={card.title}
          amount={card.amount}
          backgroundColor={card.backgroundColor}
          percent={card.percent}
        />
      ))}
    </div>
  );
};

export default CardList;