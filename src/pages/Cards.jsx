import React from "react";
import cards from "../components/cardList";

const Cards = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {cards.map((card) => (
        <div
          key={card.name}
          className="animate-fade relative inline-flex justify-center text-center uppercase font-bold m-3 transition duration-300 ease-in-out hover:scale-110"
        >
          <img src={card.picture} className="max-w-[14em]" />

          <span className="absolute inset-0 pt-36 transition-all transform opacity-0 hover:bg-white hover:bg-opacity-70 hover:opacity-100 text-3xl text-black">
            {card.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Cards;
