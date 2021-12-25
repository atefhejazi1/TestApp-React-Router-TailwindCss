import Heroseciton from "./Herosection/Heroseciton";
import HeroSectionImageFesba from "./Herosection/images/Herosection.jpg";
import Navbar from "./Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Product from "./Product/Product";

function App() {
  return (
    <div>
      <Navbar />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/bahaa">bahaa</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="bahaa" element={<h1>Bahaaaaadsasiouaosiup</h1>} />
      </Routes>
      <div>
        <Heroseciton
          image={HeroSectionImageFesba}
          heading="Web Development"
          desc="This is iasdlkjagsdk"
        />
        <Heroseciton
          image={HeroSectionImageFesba}
          heading="Front End  Development"
          desc="BLa BLa BLa"
          reverse="1"
        />
      </div>
    </div>
  );
}

export default App;
