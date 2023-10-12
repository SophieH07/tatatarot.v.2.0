import { useState } from "react";
import cardList from "../components/cardList";

const Generator = () => {
  const [randomCards, setRandomCards] = useState(cardList);
  const [picked, setPicked] = useState(false);
  function getRandomCards(number) {
    const shuffledCards = [...randomCards].sort(() => 0.5 - Math.random());
    const selected = shuffledCards.slice(0, number);
    setRandomCards(selected);
    setPicked(true);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="justify-center items-center text-center">
        <div className="inline-flex items-center">
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
          <div className="pl-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
              onClick={getRandomCards}
            >
              Pick Random Cards
            </button>
          </div>
        </div>
        <div>
          {picked &&
            randomCards.map((c) => (
              <div key={c.name}>
                <p>{c.name}</p> <img className="max-w-[14em]" src={c.picture} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Generator;
