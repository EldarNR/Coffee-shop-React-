import React from "react";
import "./OutCoffee.css";
import { Aboutourbeans } from "./Aboutourbeans";
import Footer from "./Footer";

export default function Ourcoffee() { 

  return (
    <>
      <header className="header">
        <div className="background">
          <h1>Out Coffee</h1>
        </div>
      </header>
      <Aboutourbeans />
      <Footer/>
    </>
  );
}
