import React from 'react';
// #6b60fc
// #AD3FD4

import { BsPinterest } from "react-icons/bs";
import './Hero.css';

const Hero = () => {
  

  return (
    <div className="hero">
      <div className="iconWrapper">
        <BsPinterest className="icon" />
        <span>Pinterest</span>
      </div>
    </div>
  );
}

export { Hero };
