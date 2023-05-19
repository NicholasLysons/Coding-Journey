import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
