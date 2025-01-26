import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/";
import Hero from "./component/Hero";
import Cards from "./component/Cards";
import Last from "./component/Last";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import "../3.4.15.js";

//Route
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main>
          <Navbar />
          <Hero/> 
          <Cards />
          <Last />
          <Contact/>
          <Footer /> 
      </main>
    </>
  );
}

export default App;
