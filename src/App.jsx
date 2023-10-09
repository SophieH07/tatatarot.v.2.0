import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Generator from "./pages/Generator";
import Home from "./pages/Home";
import Cards from "./pages/Cards";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="generator" element={<Generator />} />
          <Route path="cards" element={<Cards />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
