import React from "react";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tours from "./components/Tours";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <AboutUs/>
       <Features/>
       <Tours />
       <Footer/>
      </main>
    </React.Fragment>
  );
}

export default App;
