import { useState } from "react";
import cardList from "../components/cardList";

const Generator = () => {
  const [randomCard, setRandomCard] = useState(null);
  const [clicked, setClicked] = useState(false);

  const pickRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cardList.length);
    setRandomCard(cardList[randomIndex]);
    setClicked(true);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="justify-center items-center text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
          onClick={pickRandomCard}
        >
          Pick a Random Card
        </button>
        {randomCard && (
          <div className="animate-jump-in animate-duration-[900ms] animate-delay-1000">
            <p className="font-bold uppercase py-4">{randomCard.name}</p>
            <img
              className="max-h-[30em]"
              src={randomCard.picture}
              alt={randomCard.name}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Generator;
