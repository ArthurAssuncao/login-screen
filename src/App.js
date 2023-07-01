import React from "react";


import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero/Hero";
import './styles/variables.css';

const App = () => {
  return (
    
    <React.Fragment>
      
      <Header></Header>
      <Hero></Hero>

      <Footer />

      {/* <h3>ola, mundo</h3> */}
    </React.Fragment>

  )
}

export default App;


