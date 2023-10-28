import React from "react";
import photo from "../img/coffeee.jpg";
import { Icon } from "./svg/icon";
import "./pageForCard.css";
import Footer from "./Footer";

export default function PageForCard() {
  return (
    <div>
      <header className="header">
        <div className="background">
          <h1>Out Coffee</h1>
        </div>
      </header>
      <div className="body-page">
        <section className="container">
          <div className="image-container">
            <img src={photo} className="product-img" alt="img" />
          </div>
          <div className="text-container">
            <div className="text-box">
              <div className="about-it">
                <h1>About it</h1>
              </div>
              <div className="icon-center">
                <Icon />
              </div>
              <div className="on-the-left">
                <p>
                  <b>Country</b>: Brasil
                </p>
                <p>
                  <b>Description</b>: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <p>
                  <b>Price</b>:<b className="price"> 16.99$</b>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="footers">
          <Footer />
        </div>
      </div>
    </div>
  );
}
