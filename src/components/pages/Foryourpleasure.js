import React from "react";
import "./Foryourpleasure.css";
import { Icon } from "./svg/icon";
import coffeeImage from "../img/coffee-839233_1920.png"; // Rename 'photos' to a more appropriate variable name
import { Line } from "./svg/Line";
import { Products } from "./products";
import Footer from "./Footer";

export default function Foryourpleasure() {
  return (
    <>
      <div className="body">
        <header className="header">
          <div className="background">
            <h1>For your pleasure</h1>
          </div>
        </header>
        <section className="container">
          <div className="image-container">
            <img src={coffeeImage} className="product-coffee" alt="img" /> {/* Use the correct image variable */}
          </div>
          <div className="text-containers">
            <div className="text_box">
              <div className="about-it">
                <h1>About our goods</h1>
              </div>
              <div className="icon-center">
                <Icon />
              </div>
              <p className="text-center">
                Extremity sweetness difficult behavior. On disposal of as
                landlord horrible.
                Afraid at highly months do things on at. Situation recommend
                objection do intention so questions.
              </p>
              <p>
                As greatly removed calling pleased improve. Last ask him, cold feel met, spot shy want. Children, me laughing, we prospect answered followed.
                At it went is song that held help face.
              </p>
            </div>
          </div>
          <div className="line">
            <Line />
          </div>
        </section>
        <Products />
      </div>
      <Footer />
    </>
  );
}
