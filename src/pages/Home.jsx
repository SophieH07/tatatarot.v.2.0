import Logo from "../assets/tarotlogotrans.png";

const Home = () => {
  return (
    <div className=" text-center lg:text-5xl md:text-4xl sm:text-xl xl:text-6xl uppercase font-bold">
      <p className="animate-fade-right pt-4">
        Welcome on Tatatarot! Pick a tarot card!
      </p>
      <div className="flex justify-center items-center pt-9">
        <img
          className="max-h-[40vh] max-w-[40vh] animate-rotate-y animate-infinite animate-duration-[4000ms]"
          src={Logo}
        />
      </div>
    </div>
  );
};

export default Home;
