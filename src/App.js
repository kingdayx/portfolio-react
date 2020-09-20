import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import PortFolio from "./components/PortFolio";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <About />
      <PortFolio />
      <Contact />
    </div>
  );
}

export default App;
