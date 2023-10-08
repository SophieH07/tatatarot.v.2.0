import React from "react";
import cards from "./cardList";

const Cards = () => {
  return (
    <div>
      {cards.map((card) => (
        <div
          key={card.name}
          className="inline-flex p-2 text-center uppercase font-medium"
        >
          <div>
            <p>{card.name}</p>
            <img width="250px" src={card.picture} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
