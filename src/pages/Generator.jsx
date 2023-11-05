import { useState } from "react";
import cardList from "../components/cardList";
import { useEffect } from "react";

const Generator = () => {
  const [randomCards, setRandomCards] = useState([]);
  let number = 0;

  useEffect(() => {
    getRandomCards(number);
  }, [number]);

  function getRandomCards(value) {
    number = value;
    const shuffledCards = [...cardList].sort(() => 0.5 - Math.random());
    const selected = shuffledCards.slice(0, value);
    setRandomCards(selected);
  }

  return (
    <div>
      <div>
        <div className="w-screen text-center pb-10">
          <select
            name="number-cards"
            id="number-cards"
            className="p-2 bg-black rounded bg-opacity-10 lg:text-lg md:text-base sm:text-sm border border-white m-4"
            onChange={(e) => getRandomCards(e.target.value)}
          >
            <option className="bg-slate-800" value="0">
              How many cards?
            </option>
            <option className="bg-slate-800" value="1">
              One
            </option>
            <option className="bg-slate-800" value="3">
              Three
            </option>
            <option className="bg-slate-800" value="6">
              Six
            </option>
            <option className="bg-slate-800" value="12">
              Twelve
            </option>
          </select>
        </div>
        <div className="w-[90%] text-center">
          {randomCards.map((card) => (
            <div
              key={card.name}
              className="inline-flex justify-center items-center animate-jump-in"
            >
              <div className="relative inline-flex justify-center text-center uppercase font-bold m-6 transition duration-300 ease-in-out hover:scale-110">
                <img
                  src={card.picture}
                  className="lg:max-w-[16em] max-w-[10em]"
                />
                <span className="cursor-default absolute inset-0 pt-20 lg:pt-28 sm:pt-16 md:pt-10 transition-all transform opacity-0 hover:bg-white hover:bg-opacity-70 hover:opacity-100 text-3xl sm:text-xl md:text-xl text-black">
                  {card.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Generator;
