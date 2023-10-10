import React from "react";
import Logo from "../assets/tarotlogotrans.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-sky-700 bg-opacity-40 fixed w-full z-20 top-0 left-0 px-4">
      <div className="flex flex-wrap items-center justify-between p-2 uppercase">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-8 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold">Tatatarot</span>
        </Link>
        <div className="font-bold">
          <Link to="/cards" className="hover:text-sky-400 pr-2">
            Cards
          </Link>
          <Link to="/generator" className="hover:text-sky-400">
            Generate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
