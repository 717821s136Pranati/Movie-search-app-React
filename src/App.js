import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Movie";
import Series from "./pages/Series"
import Pagenotfound from "./pages/Pagenotfound";
import Interstellar from "./pages/Interstellar";
import Inception from "./pages/Inception";
import Okja from "./pages/Okja";
import JaiBhim from "./pages/JaiBhim";
import Barbie from "./pages/Barbie";
import AvengersInfinitywar from "./pages/AvengersInfinitywar";
import KadaisiVivasayi from "./pages/KadaisiVivasayi";
import Oppenhiemer from "./pages/Oppenhiemer";
import Looper from "./pages/Looper";
import Dark from "./pages/Dark";
import PeakyBlinders from "./pages/PeakyBlinders";
import Eight from "./pages/Eight";
import GameOfThrones from "./pages/GameOfThrones";
import BlackMirror from "./pages/BlackMirror";
import MoneyHeist from "./pages/MoneyHeist";
import Bridgerton from "./pages/Bridgerton";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/series" element={<Series/>}/>
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/interstellar" element={<Interstellar/>}/>
          <Route path="/inception" element={<Inception/>}/>
          <Route path="/okja" element={<Okja/>}/>
          <Route path="/jaibhim" element={<JaiBhim/>}/>
          <Route path="/barbie" element={<Barbie/>}/>
          <Route path="/avengersinfinitywar" element={<AvengersInfinitywar/>}/>
          <Route path="kadaisivivasayi" element={<KadaisiVivasayi/>}/>
          <Route path="oppenhiemer" element={<Oppenhiemer/>}/>
          <Route path="looper" element={<Looper/>}/>
          <Route path="dark" element={<Dark/>}/>
          <Route path="peakyblinders" element={<PeakyBlinders/>}/>
          <Route path="1899" element={<Eight/>}/>
          <Route path="gameofthrones" element={<GameOfThrones/>}/>
          <Route path="blackmirror" element={<BlackMirror/>}/>
          <Route path="moneyheist" element={<MoneyHeist/>}/>
          <Route path="/bridgerton" element={<Bridgerton/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
