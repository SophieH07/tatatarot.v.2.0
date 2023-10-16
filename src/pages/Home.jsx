import Logo from "../assets/tarotlogotrans.png";

const Home = () => {
  return (
    <div className=" text-center">
      <p className="animate-fade-right lg:text-5xl md:text-4xl sm:text-xl xl:text-6xl uppercase font-bold pt-4">
        Welcome on Tatatarot! Pick a tarot card!
      </p>
      <div className="flex justify-center items-center pt-9">
        <img
          className="max-h-[40vh] max-w-[40vh] animate-rotate-y animate-infinite animate-duration-[4000ms]"
          src={Logo}
        />
      </div>
      <p className="animate-fade-right pt-8">
        Logo designed with{" "}
        <a className="hover:text-cyan-600" href="https://www.canva.com/">
          Canva
        </a>
        , card pictures created with{" "}
        <a className="hover:text-cyan-600" href="https://app.leonardo.ai/">
          Leonardo.ai
        </a>
      </p>
      <p>Website made with Vite & React & Tailwind CSS</p>
      <p className="animate-fade-right">
        Created by
        <a
          className="hover:text-cyan-600"
          href="https://zsofiaportfolio.netlify.app/"
        >
          Zsófia
        </a>
      </p>
    </div>
  );
};

export default Home;
