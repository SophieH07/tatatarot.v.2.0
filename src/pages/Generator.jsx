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
    <div className="flex justify-center items-center">
      <div className="justify-center items-center text-center">
        <div className="inline-flex items-center pb-4">
          <select
            name="number-cards"
            id="number-cards"
            className="p-2 bg-none bg-black rounded bg-opacity-10 text-lg"
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
        <div>
          {randomCards.map((card) => (
            <div key={card.name} className="inline-flex animate-jump-in">
              <div className="relative inline-flex justify-center text-center uppercase font-bold m-4 transition duration-300 ease-in-out hover:scale-110">
                <img src={card.picture} className="max-w-[14em]" />
                <span className="cursor-default absolute inset-0 pt-36 transition-all transform opacity-0 hover:bg-white hover:bg-opacity-70 hover:opacity-100 text-3xl text-black">
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
