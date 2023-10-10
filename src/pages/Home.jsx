import Logo from "../assets/tarotlogotrans.png";

const Home = () => {
  return (
    <div className=" text-center text-5xl uppercase font-bold">
      <p className="animate-fade-right pt-4">
        Welcome on Tatatarot! Pick a tarot card!
      </p>
      <div className="flex justify-center items-center pt-9">
        <img
          className="max-h-[60vh] max-w-[60vh] animate-wiggle animate-infinite"
          src={Logo}
        />
      </div>
    </div>
  );
};

export default Home;
