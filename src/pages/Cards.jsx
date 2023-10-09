import React from "react";
import cards from "../components/cardList";

const Cards = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        {cards.map((card) => (
          <div
            key={card.name}
            className="relative inline-flex justify-between text-center uppercase font-bold m-3 transition duration-300 ease-in-out hover:scale-110"
          >
            <img src={card.picture} className="max-w-[15em]" />

            <span className="absolute inset-0 pt-36 transition-all transform opacity-0 hover:bg-white hover:bg-opacity-70 hover:opacity-100 text-3xl text-black">
              {card.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
//
